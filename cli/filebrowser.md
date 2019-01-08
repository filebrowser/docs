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
- database values
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

| Name | Shorthand | Usage |
|------|-----------|-------|
|address|a|address to listen on|
|baseurl|b|base url|
|cert|t|tls certificate|
|config|c|config file path|
|database|d|database path|
|help|h|help for filebrowser|
|key|k|tls key|
|log|l|log output|
|password||hashed password for the first user when using quick config (default "admin")|
|port|p|port to listen on|
|root|r|root to prepend to relative paths|
|username||username for the first user when using quick config|

