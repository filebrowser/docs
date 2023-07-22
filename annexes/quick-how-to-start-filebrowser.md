## Quick example how to

If you plan to use quickly, **first of all, donwload and install the filebrowser**, then follow those minimal steps:

* Create or choose the user of the system that will run the `filebrowser` service, in a unix-like system will be as:

```
useradd -h /srv -g fileuser -c fileuser -G wheel -s /bin/false fileuser
```

* Login and choose the root of the files in the server side, where the filebrowser will serve the files:

```
mkdir -p /srv/
chmod fileuser /srv/
```

* Init the database cofiguration

```
su -l fileuser
/usr/local/bin/filebrowser -d /srv/filebrowser.db config init -b /files/ -l /srv/filebrowser.log -a 0.0.0.0 -r /srv/
```

* Run the ejecutable with configured database

```
/usr/local/bin/filebrowser -d /srv/filebrowser.db -b /files/ -l /srv/filebrowser.log -a 0.0.0.0 -r /srv/
```

For more advanced way you can use daemonize ways of, in next document.

#### Quick Customizing how to

For any custom settings you must do in two ways: by the build-in GUI or by the command line. The build-in GUI does not have all the complete settings of course, but most user close one.

In the command line way you must stop the `filebrowser` before made any configuration:

* Exporting some setups and editing to re-import, we just edit the create user directory:

```
/usr/local/bin/filebrowser -d /srv/filebrowsera.db config export filebrowserconfigcheck.json

sed -i 's|createUserDir":*|createUserDir": true\,|g' /srv/filebrowserconfigcheck.json 

/usr/local/bin/filebrowser -d /srv/filebrowser.db config import filebrowserconfigcheck.json
```

Then runs again the file browser. Repeat for any other command line customization.

