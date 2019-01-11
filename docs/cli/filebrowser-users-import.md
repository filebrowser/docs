---
title: filebrowser users import
id: filebrowser-users-import
---

Import users from a file

## Synopsis

Import users from a file. The path must be for a json or yaml
file. You can use this command to import new users to your
installation. For that, just don't place their ID on the files
list or set it to 0.

```
filebrowser users import <path> [flags]
```

## Options

| Name | Shorthand | Usage |
|------|-----------|-------|
|help|h|help for import|
|overwrite||overwrite users with the same id/username combo|
|replace||replace the entire user base|

### Inherited

| Name | Shorthand | Usage |
|------|-----------|-------|
|config|c|config file path|
|database|d|database path|

