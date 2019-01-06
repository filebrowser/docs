---
description: Create a new user
---

# filebrowser users add

## Synopsis

Create a new user and add it to the database.

```
filebrowser users add <username> <password> [flags]
```

## Options

```
      --commands strings    a list of the commands a user can execute
  -h, --help                help for add
      --locale string       locale for users (default "en")
      --lockPassword        lock password
      --perm.admin          admin perm for users
      --perm.create         create perm for users (default true)
      --perm.delete         delete perm for users (default true)
      --perm.download       download perm for users (default true)
      --perm.execute        execute perm for users (default true)
      --perm.modify         modify perm for users (default true)
      --perm.rename         rename perm for users (default true)
      --perm.share          share perm for users (default true)
      --scope string        scope for users (default ".")
      --sorting.asc         sorting by ascending order
      --sorting.by string   sorting mode (name, size or modified) (default "name")
      --viewMode string     view mode for users (default "list")
```

### Inherited

```
  -c, --config string     config file path
  -d, --database string   path to the database (default "./filebrowser.db")
```
