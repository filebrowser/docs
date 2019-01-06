---
description: A stylish web-based file browser
---

# filebrowser

## Synopsis

File Browser CLI lets you create the database to use with File Browser,
manage your users and all the configurations without acessing the
web interface.
	
If you've never run File Browser, you'll need to have a database for
it. Don't worry: you don't need to setup a separate database server.
We're using Bolt DB which is a single file database and all managed
by ourselves.

For this specific command, all the flags you have available (except
"config" for the configuration file), can be given either through
environment variables or configuration files.

If you don't set "config", it will look for a configuration file called
.filebrowser.{json, toml, yaml, yml} in the following directories:

- ./
- $HOME/
- /etc/filebrowser/

The precedence of the configuration values are as follows:

- flag
- environment variable
- configuration file
- defaults

The environment variables are prefixed by "FB_" followed by the option
name in caps. So to set "database" via an env variable, you should
set FB_DATABASE equals to the path.

Also, if the database path doesn't exist, File Browser will enter into
the quick setup mode and a new database will be bootstraped and a new
user created with the credentials from options "username" and "password".

```
filebrowser [flags]
```

## Options

```
  -a, --address string    address to listen on (default "127.0.0.1")
  -b, --baseurl string    base url
  -t, --cert string       tls certificate
  -c, --config string     config file path
  -d, --database string   path to the database (default "./filebrowser.db")
  -h, --help              help for filebrowser
  -k, --key string        tls key
  -l, --log string        log output (default "stdout")
      --password string   password for the first user when using quick config (default "admin")
  -p, --port int          port to listen on (default 8080)
  -s, --scope string      scope to prepend to a user's scope when it is relative (default ".")
      --username string   username for the first user when using quick config (default "admin")
```

