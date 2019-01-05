# Custom Branding

You can now customize your File Browser installation by change its name to any other you want, by adding a global custom style sheet and by using your own logotype if you want. To address this, we have three configuration options that can be changed:

* **Name:** which is the instance name that will show up on login and signup pages. This won't replace the version message in the sidebar.
* **Disable external links:** this will disable any external links except the ones to this documentation.
* **Folder:** is the path to a directory that can contain two items:
  * **custom.css**, containing the styles you want to apply to your installation.
  * **img,** a directory whose files can replace the [default logotypes](https://github.com/filebrowser/frontend/tree/master/public/img) around the instance.

This options can be either changed via the CLI interface through the following command:

```bash
filebrowser config set --branding.name "My Name" \
    --branding.files "/abs/path/to/my/dir" \
    --branding.disableExternal
```

Or you can go to **Settings → Global Settings** and change it there.

