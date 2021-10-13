# Installation

File Browser is a single binary and can be used as a standalone executable. Although, some might prefer to use it with [Docker](https://www.docker.com/) or [Caddy](https://caddyserver.com/), which is a fantastic web server that enables HTTPS by default. Its installation is quite straightforward independently on which system you want to use.

## Quick Setup

The quickest way for beginners to start using File Browser is by opening your terminal and executing the following commands:

{% tabs %}
{% tab title="Brew" %}
```
brew tap filebrowser/tap
brew install filebrowser
filebrowser -r /path/to/your/files
```
{% endtab %}

{% tab title="Unix" %}
```bash
curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
filebrowser -r /path/to/your/files
```
{% endtab %}

{% tab title="Windows" %}
```bash
iwr -useb https://raw.githubusercontent.com/filebrowser/get/master/get.ps1 | iex
filebrowser -r /path/to/your/files
```
{% endtab %}
{% endtabs %}

Done! It will bootstrap a database in which all the configurations and users are stored. Now, you can see on your command line the address in which your instance is running. You just need to go to that URL and use the following credentials:

* Username: `admin`
* Password: `admin`

{% hint style="danger" %}
You must change the password and, if you can, the username for the best security possible.
{% endhint %}

Although this is the fastest way to bootstrap an instance, we recommend you to take a look at the possibility of options on [`config init`](cli/filebrowser-config-init.md) and [`config set`](cli/filebrowser-config-set.md) to make the installation as safe and customized as it can be.

## Docker

File Browser is also available as a Docker image. You can find it on [Docker Hub](https://hub.docker.com/r/filebrowser/filebrowser). The usage is as follows:

```bash
docker run \
    -v /path/to/root:/srv \
    -v /path/filebrowser.db:/database.db \
    -v /path/.filebrowser.json:/.filebrowser.json \
    --user $(id -u):$(id -g) \
    -p 80:80 \
    filebrowser/filebrowser
```

By default, we already have a [configuration file with some defaults](https://github.com/filebrowser/filebrowser/blob/master/.docker.json) so you can just mount the root and the database. Although you can overwrite by mounting a directory with a new config file. If you don't already have a database file, make sure to create a new empty file under the path you specified. Otherwise, Docker will create an empty folder instead of an empty file, resulting in an error when mounting the database into the container.

