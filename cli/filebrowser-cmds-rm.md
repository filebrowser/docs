---
description: Removes a command from an event hooker
---

# filebrowser cmds rm

## Synopsis

Removes a command from an event hooker. The provided index is the same that's printed when you run 'cmds ls'. Note that after each removal/addition, the index of the commands change. So be careful when removing them after each other.

You can also specify an optional parameter \(index\_end\) so you can remove all commands from 'index' to 'index\_end', including 'index\_end'.

```text
filebrowser cmds rm <event> <index> [index_end] [flags]
```

## Options

| Name | Shorthand | Usage |
| :--- | :--- | :--- |
| help | h | help for rm |

### Inherited

| Name | Shorthand | Usage |
| :--- | :--- | :--- |
| config | c | config file path |
| database | d | database path |

