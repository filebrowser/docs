# Welcome

{% hint style="info" %}
Are you looking for how to upgrade from 1.x? [We've got you covered](upgrade-from-1.x.md).
{% endhint %}

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

Although this is the fastest way to bootstrap an instance, we recommend you to read our [installation](installation.md) guide to know more about how File Browser works and other commands you can use.

