# Shell commands

Within Filebrowser you can toggle the shell (`< >` icon at the top right) and this will open a shell command window at the bottom of the screen.

**By default no commands are availabe as the command list is empty**

To enable commands these need to either be done on a per-user basis (including for the Admin user).

You can do this by adding them in Settings > User Management > (edit user) > Commands or to *apply to all new users created from that point forward* they can be set in Settings > Global Settings

{% hint style="info" %} If using a proxy manager then remember to enable websockets support for the Filebrowser proxy{% endhint %}

{% hint style="info" %} If using Docker and you want to add a new command that is not in the base image then you will need to build a custom Docker image using `filebrowser/filebrowser' as a base image.  For example to add 7z:
``` 
FROM filebrowser/filebrowser
RUN sudo apt install p7zip-full
```
{% endhint %}
