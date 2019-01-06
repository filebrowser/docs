---
description: Add a global rule or user rule
---

# filebrowser rules add

## Synopsis

Add a global rule or user rule.

```
filebrowser rules add <path|expression> [flags]
```

## Options

```
  -a, --allow   indicates this is an allow rule
  -h, --help    help for add
  -r, --regex   indicates this is a regex rule
```

### Inherited

```
  -c, --config string     config file path
  -d, --database string   path to the database (default "./filebrowser.db")
  -i, --id uint           id of user to which the rules apply
  -u, --username string   username of user to which the rules apply
```
