---
description: Updates the configuration
---

# filebrowser config set

## Synopsis

Updates the configuration. Set the flags for the options
you want to change.

```
filebrowser config set [flags]
```

## Options

| Name | Shorthand | Usage |
|------|-----------|-------|
|auth.header||HTTP header for auth.method=proxy|
|auth.method||authentication type|
|branding.disableExternal||disable external links such as GitHub links|
|branding.files||path to directory with images and custom styles|
|branding.name||replace 'File Browser' by this name|
|commands||a list of the commands a user can execute|
|help|h|help for set|
|locale||locale for users|
|lockPassword||lock password|
|perm.admin||admin perm for users|
|perm.create||create perm for users|
|perm.delete||delete perm for users|
|perm.download||download perm for users|
|perm.execute||execute perm for users|
|perm.modify||modify perm for users|
|perm.rename||rename perm for users|
|perm.share||share perm for users|
|recaptcha.host||use another host for ReCAPTCHA. recaptcha.net might be useful in China|
|recaptcha.key||ReCaptcha site key|
|recaptcha.secret||ReCaptcha secret|
|scope||scope for users|
|shell||shell command to which other commands should be appended|
|signup|s|allow users to signup|
|sorting.asc||sorting by ascending order|
|sorting.by||sorting mode (name, size or modified)|
|viewMode||view mode for users|

### Inherited

| Name | Shorthand | Usage |
|------|-----------|-------|
|config|c|config file path|
|database|d|path to the database|

