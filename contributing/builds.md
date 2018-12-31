# Builds

## Get the source code

In order to make development easier, the frontend is included in the backend as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Then, in order to tinker with the sources, start by getting both repos at once with:

```bash
git clone --recurse-submodules https://github.com/filebrowser/filebrowser
```

{% hint style="info" %}
Since it is a submodule, when developing the frontend remember to update the backend repository accordingly.
{% endhint %}

Alternatively, you can download the repositories in two steps with `curl`/`wget`:

```bash
curl -L https://github.com/filebrowser/filebrowser/archive/master.tar.gz | tar xvz
cd filebrowser-master
curl -L https://github.com/filebrowser/frontend/archive/master.tar.gz | tar xvz
mv frontend-master frontend
```

However, note that this approach won't let you push your changes back easily.

