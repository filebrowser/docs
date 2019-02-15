---
description: Remove a global rule or user rule
---

# filebrowser rules rm

## Synopsis

Remove a global rule or user rule. The provided index
is the same that's printed when you run 'rules ls'. Note
that after each removal/addition, the index of the
commands change. So be careful when removing them after each
other.

You can also specify an optional parameter (index_end) so
you can remove all commands from 'index' to 'index_end',
including 'index_end'.

```
filebrowser rules rm <index> [index_end] [flags]
```

## Options

| Name | Shorthand | Usage |
|------|-----------|-------|
|help|h|help for rm|
|index||index of rule to remove|

### Inherited

| Name | Shorthand | Usage |
|------|-----------|-------|
|config|c|config file path|
|database|d|database path|
|id|i|id of user to which the rules apply|
|username|u|username of user to which the rules apply|

