---
id: upgrade
title: Upgrade from 1.x
---

The newer version doesn't have obligatory a configuration file and a database. We now only have a database and a powerful command line to interact with it. Although, most options can be changed through the web interface.

You can keep using a configuration file for the options described by the [main command](cli/filebrowser.md). To import from a previous version, please run:

```bash
filebrowser upgrade --database=/path/to/new.db \
    --old.database=/path/to/1.x.db \
    --old.config=/path/to/old/config.json
```

You don't necessarily need to indicate the `old.config` path. If you don't, we'll use the defaults we had for each option in the previous version.

{% hint style="danger" %}
Notice that this command **won't** import the shareable links because they are incompatible with the new version. In the previous version, if a user wasn't allowed to go to `/path/foo` but they had permissions to access `/path` then, by sharing or downloading the directory, they would have access to `/path/foo` so we needed to change the internal structure of shareable links to fix this issue.
{% endhint %}

Now that you have the new database up and running, please check if the config looks good for you and if the users also look good via the following commands:

```bash
filebrowser -d=/path/to.db config cat
filebrowser -d=/path/to.db users ls
```

To run your server, just:

```bash
filebrowser -d=/path/to.db
```

