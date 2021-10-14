## Quick complete user case example

We will provide a new user case with complete usage, the user case will be as:

* 

/srv/filebrowser -d /srv/filebrowser.db -c /srv/filebrowser.json config init --baseurl /elarchivo/ --locale es --log filebrowser.log --port 10900 --disable-type-detection-by-header  --disable-thumbnails -a 0.0.0.0  --root /srv/ --cache-dir /tmp/  --img-processors 6   --branding.name elarchivo --signup=false --perm.execute=false --branding.disableExternal=true

/srv/filebrowser -d /srv/filebrowsera.db config export filebrowserconfigcheck.json

sed -i 's|createUserDir":*|createUserDir": true\,|g' /srv/filebrowserconfigcheck.json 

/srv/filebrowser -d /srv/filebrowser.db config import filebrowserconfigcheck.json

/srv/filebrowser -d /srv/filebrowser.db -c /srv/filebrowser.json -l filebrowser.log -r /srv -p 10900 -b /elarchivo/ -a 0.0.0.0  --username manager

