# Welcome

### Quick Start

This is the fastest way for beginners to start using File Browser. Although, there [other ways](./installation) to install it.

* [Download File Browser](https://github.com/filebrowser/filebrowser/releases) and put it on your PATH.
* Run `filebrowser -s /path/to/your/files`.

Done! It will tell you the address in which File Browser is running. You'll only need to open it and use the following credentials \(you must change them!\):

* Username: `admin`
* Password: `admin`

### One Step Script

If you're running linux or macOS, you can use a very special script - made by [Kyle Frost](https://www.kylefrost.me/) - to download the latest version of File Browser and install it on `/usr/local/bin`.

{% tabs %}
{% tab title="curl" %}
```bash
curl -fsSL https://filebrowser.github.io/get.sh | bash
```
{% endtab %}

{% tab title="wget" %}
```bash
wget -qO- https://filebrowser.github.io/get.sh | bash
```
{% endtab %}
{% endtabs %}

If you're on Windows, you can use PowerShell to install File Browser too. You should run the following command as administrator since it needs permissions to add the executable to the PATH.

```bash
iwr -useb https://filebrowser.github.io/get.ps1 | iex
```



