---
description: Import a configuration file
---

# filebrowser config import

## Synopsis

Import a configuration file. This will replace all the existing
configuration. Can be used with or without unexisting databases.
If used with a nonexisting database, a key will be generated
automatically. Otherwise the key will be kept the same as in the
database.

```
filebrowser config import <filename> [flags]
```

## Options

| Name | Shorthand | Usage |
|------|-----------|-------|
|help|h|help for import|

### Inherited

| Name | Shorthand | Usage |
|------|-----------|-------|
|config|c|config file path|
|database|d|database path|

