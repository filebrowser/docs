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

Just run the first command and then the second adn logout:

``` bash
FB_ROOT=/var/lib/filebrowser/ FB_DATABASE=$FB_ROOT/filebrowser.db FB_BASEURL=/filebrowser/ FB_PORT=8090 /usr/local/bin/filebrowser &

exec </dev/null >/dev/null 2>/dev/null
```

## nohup

After run this command will return the `JOBID` and the `PID` number:

``` bash
FB_ROOT=/var/lib/filebrowser/ FB_DATABASE=$FB_ROOT/filebrowser.db FB_BASEURL=/filebrowser/ FB_PORT=8090 nohup /usr/local/bin/filebrowser > /var/lib/filebrowser/filebrowser.log 2>&1 &

```

## setsid

From the `util-linux` package:

``` bash
FB_ROOT=/var/lib/filebrowser/ FB_DATABASE=$FB_ROOT/filebrowser.db FB_BASEURL=/filebrowser/ FB_PORT=8090 setsid /usr/local/bin/filebrowser > /var/lib/filebrowser/filebrowser.log 2>&1

```

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
# Description:       File Browser management
### END INIT INFO
# Author: PICCORO Lenz McKAY <mckaygerhard@gmail.com>

PATH=/usr/bin:/usr/local/bin
DESC="simple Web File Browser manager"
NAME=filebrowser
FB_ROOT=/var/lib/filebrowser/
FB_DATABASE=$FB_ROOT/filebrowser.db
FB_PORT=8090
FB_LOG=/var/log/$NAME
PIDFILE=/var/run/$NAME.pid
SCRIPTNAME=/etc/init.d/$NAME
DAEMON=/usr/local/bin/$NAME

[ -x "$DAEMON" ] || exit 0

# if you wants "--noauth" or extra settings put in the "/etc/default/$NAME" 
DAEMON_OPTS=""

. /lib/init/vars.sh

[ -r /etc/default/$NAME ] && . /etc/default/$NAME

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
  restart)
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
DATA_DIR=/var/lib/$RC_SVCNAME
ROOT=/var/lib/$RC_SVCNAME
CONFIG=/etc/$RC_SVCNAME/config.json
name=$RC_SVCNAME
command="/usr/local/bin/filebrowser"
command_args="-d ${DATA_DIR}/filebrowser.db -c $CONFIG -r $ROOT"
pidfile="/run/$RC_SVCNAME/$RC_SVCNAME.pid"
command_background=true
depend() {
        need net
}
start_pre() {
        checkpath --directory --mode 0775 $DATA_DIR $ROOT \
                /run/$RC_SVCNAME $LOGS_DIR
        checkpath --file --mode 0775 $CONFIG
}

start() {
    checkconfig || return 1
    ebegin "Starting ${SVCNAME}"
    start-stop-daemon --start --quiet --exec ${command} --pidfile "${FBPID}" --make-pidfile -- 
    eend $?
}
```


