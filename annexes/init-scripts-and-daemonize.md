# Daemonize and init scripts

The purpose is to keep the program simple, but here we documented the best way to keep an instance in service as a daemon in the main operating systems 

1. Sometimes we do not have access to the system tools, or not enought privilegies, in this case we will use the most standard, the shell and we will assume we have access to bash we have `nohup` (bash) and `setsid` (util-linux)
2. If we have direct access to system resources, we can use a daemon script and integrated to the system init process by example using `SysVinit` or `OpenRC`

* [Using bash](#bash)
* [Using nohup](#nohup)
* [Using setsid](#setsid)
* [Sysvinit script](#sysvinit)
* [Openrc script](#openrc)

## Bash

Use this way only for testing purposes, is a easy to do way but it depends on bash shell access and available permissions, just run the first command and then the second adn logout:

``` bash
FB_ROOT=/srv FB_DATABASE=$FB_ROOT/filebrowser.db FB_BASEURL=/filebrowser/ FB_USERNAME=adminuser /usr/local/filebrowser &

exec </dev/null >/dev/null 2>/dev/null
```

## nohup

Is the most easy way but `nohup` has a disadvantage in the sense that the process group of the process remains the same so the process running with nohup is vulnerable to any signal sent to the whole process group (like Ctrl + C).

``` bash
FB_ROOT=/srv FB_DATABASE=$FB_ROOT/filebrowser.db FB_BASEURL=/filebrowser/ FB_USERNAME=adminuser nohup /srv/filebrowser > /srv/filebrowser.log 2>&1 &

```

Take care that when you executed it will return and output, the `JOBID` and the `PID` number, you can use those to return to the process: just do `fg %JOBID` and you are like a no backgroud task.


## setsid

This is quite more standard .. but the `setsid` command must come from the `util-linux` package, it does not depends on `bash` shell and detach prefectly.

``` bash
FB_ROOT=/srv FB_DATABASE=$FB_ROOT/filebrowser.db FB_BASEURL=/filebrowser/ FB_USERNAME=adminuser setsid /srv/filebrowser > /srv/filebrowser.log 2>&1

```

It allocates a new process group to the process being executed and hence, the process created is totally in a newly allocated process group and can execute safely without fear of being killed even after session logout.


## SysVinit

This init script can be used on Debian and Devuan based system, for others sysv-init style you can manage the start and stop commands.

The configuration can be managed by using a `/etc/default/filebrowser` file with the environment variables of `FB_`:

``` bash
#!/bin/sh
### BEGIN INIT INFO
# Provides:          filebrowser
# Required-Start:    $local_fs $network $remote_fs $syslog
# Required-Stop:     $local_fs $network $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Description:       filebrowser Web File Browser management api and gui
### END INIT INFO
# Author: PICCORO Lenz McKAY <mckaygerhard@gmail.com>

PATH=/usr/bin:/usr/local/bin
DESC="simple Web File Browser manager"
NAME=filebrowser
FB_ROOT=/srv
FB_DATABASE=$FB_ROOT/filebrowser.db
FB_CONFIG=/etc/filebrowser/filebrowser.json
FB_PORT=19600
FB_ADDRESS=127.0.0.1
FB_BASEURL=/filebrowser/
FB_LOG=/var/log/$NAME
FB_USERNAME=adminuser
PIDFILE=/var/run/$NAME.pid
SCRIPTNAME=/etc/init.d/$NAME
DAEMON=/usr/local/bin/$NAME

[ -x "$DAEMON" ] || exit 0

[ -r /etc/default/$NAME ] && . /etc/default/$NAME

export FB_ROOT=$FB_ROOT
export FB_DATABASE=$FB_DATABASE
export FB_PORT=$FB_PORT
export FB_CONFIG=$FB_CONFIG
export FB_BASEURL=$FB_BASEURL
export FB_LOG=$FB_LOG
export FB_USERNAME=$FB_USERNAME
# if you wants "--noauth" or extra settings put in the "/etc/default/$NAME" but db and files must be reseted
DAEMON_OPTS="  "

. /lib/init/vars.sh

. /lib/lsb/init-functions

do_start() {
    start-stop-daemon --start --quiet --make-pidfile --pidfile $PIDFILE --exec $DAEMON --name $NAME --background -- $DAEMON_OPTS || return 2
}

resetconf() {
    rm -rf $FB_DATABASE
}

do_stop()
{
    start-stop-daemon --stop --quiet --remove-pidfile --retry=TERM/30/KILL/5 --pidfile $PIDFILE --name $NAME
    RETVAL="$?"
    [ "$RETVAL" = 2 ] && return 2
    start-stop-daemon --stop --quiet --oknodo --retry=0/30/KILL/5 --exec $DAEMON
    [ "$?" = 2 ] && return 2
    rm -f $PIDFILE
    return "$RETVAL"
}

case "$1" in
  start)
    [ "$VERBOSE" != no ] && log_daemon_msg "Starting $DESC" "$NAME"
    do_start
    case "$?" in
	0|1) [ "$VERBOSE" != no ] && log_end_msg 0 ;;
	2) [ "$VERBOSE" != no ] && log_end_msg 1 ;;
    esac
    ;;
  stop)
    [ "$VERBOSE" != no ] && log_daemon_msg "Stopping $DESC" "$NAME"
    do_stop
    case "$?" in
	0|1) [ "$VERBOSE" != no ] && log_end_msg 0 ;;
	2) [ "$VERBOSE" != no ] && log_end_msg 1 ;;
    esac
    ;;
  status)
    status_of_proc "$DAEMON" "$NAME" && exit 0 || exit $?
    ;;
  restart|force-reload)
    log_daemon_msg "Restarting $DESC" "$NAME"
    do_stop
    case "$?" in
      0)
	do_start
	case "$?" in
	    0) log_end_msg 0 ;;
	esac
	;;
      *)
	log_end_msg 1
	;;
    esac
    ;;
  resetconf)
    log_daemon_msg "Resetting/erasing all and make new config instance of $DESC" "$NAME"
    do_stop
    case "$?" in
      0)
	resetconf
	do_start
	case "$?" in
	    0) log_end_msg 0 ;;
	esac
	;;
      *)
	log_end_msg 1
	;;
    esac
    ;;
  *)
    echo "Usage: $SCRIPTNAME {start|stop|status|restart|resetconf}" >&2
    exit 3
    ;;
esac

```

## OpenRC

This init script can be used on Alpine and Gentoo based systems like Funtoo, for others openrc style you can manage the start and stop commands.

The configuration unfortunatelly cannot be managed by using a `/etc/conf.d/filebrowser` file yet with the environment variables of `FB_`:

```bash
#!/sbin/openrc-run
# /usr/local must be adapted to installed binary
# Author: PICCORO Lenz McKAY <mckaygerhard@gmail.com>

name=$RC_SVCNAME
cfgfile="/etc/$RC_SVCNAME/$RC_SVCNAME.conf"
command="/usr/local/filebrowser"
command_args="--database /srv/$RC_SVCNAME.db"
FBPID="/run/$RC_SVCNAME.pid"
pidfile="${FBPID}"
command_background="yes"
extra_started_commands="resetconf"

checkconfig() {
    if [ -z "${FBPID}" ] ; then
	FBPID="/run/filebrowser.pid"
    fi
    if [ -z "${FB_ROOT}" ] ; then
	FB_ROOT="/srv"
    fi
}

start() {
    checkconfig || return 1
    ebegin "Starting ${SVCNAME}"
    start-stop-daemon --start --quiet --exec /usr/sbin/lighttpd --pidfile "${FBPID}" --make-pidfile -- 
    eend $?
}

stop() {
    local rv=0
    ebegin "Stopping ${SVCNAME}"
    start-stop-daemon --stop --quiet --pidfile "${FBPID}"
    eend $?
}

resetconf() {
    stop
    checkconfig || return 1
    ebegin "Reseting/erasing all settings files not implemented. help here"
}

graceful() {
    if ! service_started "${SVCNAME}" ; then
	eerror "${SVCNAME} isn't running"
	return 1
    fi
    checkconfig || return 1
    ebegin "Gracefully stopping ${SVCNAME}"
    start-stop-daemon --quiet --pidfile "${FBPID}" \
	--signal INT
    if eend $? ; then
	rm -f "${FBPID}"
	start
    fi
}
```


