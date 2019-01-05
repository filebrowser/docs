---
description: A stylish web-based file browser
---

# filebrowser

## Synopsis

File Browser CLI lets you create the database to use with File Browser, manage your user and all the configurations without accessing the web interface.

If you've never run File Browser, you will need to create the database. See 'filebrowser help config init' for more information.

This command is used to start up the server. By default it starts listening on localhost on a random port unless specified otherwise in the database or via flags.

Use the available flags to override the database/default options. These flags values won't be persisted to the database. To persist configuration to the database use the command 'filebrowser config set'.

```text
filebrowser [flags]
```

## Options

```text
  -a, --address string    address to listen on (default comes from database)
  -c, --cert string       tls certificate (default comes from database)
  -d, --database string   path to the database (default "./filebrowser.db")
  -h, --help              help for filebrowser
  -k, --key string        tls key (default comes from database)
  -l, --log string        log output (default comes from database)
  -p, --port int          port to listen on (default comes from database)
  -s, --scope string      scope for users
```

