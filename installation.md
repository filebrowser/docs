# Installation

File Browser is a single binary and can be used as a standalone executable. Although, some might prefer to use it with [Docker](https://www.docker.com/) or [Caddy](https://caddyserver.com/), which is a fantastic web server that enables HTTPS by default. It's installation is quite straightforward independently on which system you want to use.

## Quick Setup

The quickest way for beginners to start using File Browser is by opening your terminal and executing the following commands:

{% tabs %}
{% tab title="Unix" %}
```bash
curl -fsSL https://filebrowser.xyz/get.sh | bash
filebrowser -s /path/to/your/files
```
{% endtab %}

{% tab title="Windows" %}
```bash
iwr -useb https://filebrowser.xyz/get.ps1 | iex
filebrowser -s /path/to/your/files
```
{% endtab %}
{% endtabs %}

Done! It will bootstrap a database in which all the configurations and users are stored. Now, you can see on your command line the address in which your instance is running. You just need to go to that URL and use the following credentials:

* Username: `admin`
* Password: `admin`

{% hint style="danger" %}
You must change the password and, if you can, the username for the best security possible.
{% endhint %}

Although this is the fastest way to bootstrap an instance, we recommend you to take a look at the possibility of options on [`init`](cli/filebrowser-init.md) and [`config set`](cli/filebrowser-config-set.md) to make the installation as safe and customized as it can be.

## Docker

SOON

## Caddy

SOON

