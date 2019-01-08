---
description: Rules management utility
---

# filebrowser rules

## Synopsis

On each subcommand you'll have available at least two flags: "username" and "id". You must either set only one of them or none. If you set one of them, the command will apply to an user, otherwise it will be applied to the global set or rules.

```text
filebrowser rules [flags]
```

## Options

| Name | Shorthand | Usage |
| :--- | :--- | :--- |
| help | h | help for rules |
| id | i | id of user to which the rules apply |
| username | u | username of user to which the rules apply |

### Inherited

| Name | Shorthand | Usage |
| :--- | :--- | :--- |
| config | c | config file path |
| database | d | path to the database |

