# Command Runner

The command runner is a feature that enables you to execute any shell command you want before or after a certain event. Right now, these are the events:

* Copy
* Rename
* Upload
* Delete

Also, during the execution of the commands set for those hooks, there will be some environment variables available to help you perform your commands:

* `FILE` with the full absolute path to the changed file.
* `SCOPE` with the path to user's scope.
* `USERNAME` with the user's username.
* `DESTINATION` with the absolute path to the destination. Only used for **copy** and **rename.**

At this moment, you can edit the commands via the command line interface, using the following commands \(please check the flag `--help` to know more about them\):

```bash
filebrowser cmds add -e="before_copy" -c="echo $FILE"
filebrowser cmd rm -e="before_copy" -i 0
filebrowser cmds ls
```

Or you can use the web interface to manage them via **Settings** → **Global Settings**.

