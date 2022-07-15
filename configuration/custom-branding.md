# Custom Branding

You are able to customize your File Browser installation by changing its name to any other you want, by adding a global custom style sheet and by using your own logotype if you want. To address this, there are three configuration options that can be changed:

* **Name:** which is the instance name that will show up on login and signup pages. This won't replace the version message in the sidebar.
* **Disable external links:** this will disable any external links (except the ones to this documentation).
* **Folder:** is the path to a directory that can contain two items:
  * **custom.css**, containing the styles you want to apply to your installation.
  * **img** a directory whose files can replace the [default logotypes](https://github.com/filebrowser/filebrowser/tree/master/frontend/public/img) in the application.

These options can be either set via the CLI interface using the following command:
```bash
filebrowser config set --branding.name "My Name" \
    --branding.files "/abs/path/to/my/dir" \
    --branding.disableExternal
```
Or can be set under 'Branding directory path' in **Settings → Global Settings**. 
{% hint style="info" %} If using Docker then remember to bind this directory, for example as `/home/username/containers/filebrowser/branding:/branding` {% endhint %}

For custom icons to be recognised you need to create `img` and `img/icons` directories and place the svg in the `branding/img` directory:
![](https://user-images.githubusercontent.com/13610277/179242249-3d0554ab-508d-4533-8957-f3c38bb02258.png)

To replace the favico you need to place this in the `img/icons` directory but also note that some of the other PNG icon types will be required too (see the default logotypes link above) as the browser will normally use the highest resolution option available (at a minimum the 16x16 and 32x32 options).
