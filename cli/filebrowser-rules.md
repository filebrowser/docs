---
description: Rules management utility
---

# filebrowser rules

## Synopsis

On each subcommand you'll have available at least two flags:
"username" and "id". You must either set only one of them
or none. If you set one of them, the command will apply to
an user, otherwise it will be applied to the global set or
rules.

```
filebrowser rules [flags]
```

## Options

```
  -h, --help              help for rules
  -i, --id uint           id of user to which the rules apply
  -u, --username string   username of user to which the rules apply
```

### Inherited

```
  -c, --config string     config file path
  -d, --database string   path to the database (default "./filebrowser.db")
```
