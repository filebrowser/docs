---
description: Updates an existing user
---

# filebrowser users update

## Synopsis

Updates an existing user. Set the flags for the
options you want to change.

```
filebrowser users update <id|username> [flags]
```

## Options

| Name | Shorthand | Usage |
|------|-----------|-------|
|commands||a list of the commands a user can execute|
|help|h|help for update|
|locale||locale for users|
|lockPassword||lock password|
|password|p|new password|
|perm.admin||admin perm for users|
|perm.create||create perm for users|
|perm.delete||delete perm for users|
|perm.download||download perm for users|
|perm.execute||execute perm for users|
|perm.modify||modify perm for users|
|perm.rename||rename perm for users|
|perm.share||share perm for users|
|scope||scope for users|
|sorting.asc||sorting by ascending order|
|sorting.by||sorting mode (name, size or modified)|
|username|u|new username|
|viewMode||view mode for users|

### Inherited

| Name | Shorthand | Usage |
|------|-----------|-------|
|config|c|config file path|
|database|d|database path|

