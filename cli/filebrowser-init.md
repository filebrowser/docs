---
description: Initialize a new database
---

# filebrowser init

## Synopsis

Initialize a new database to use with File Browser. All of
this options can be changed in the future with the command
"filebrowser config set". The user related flags apply
to the defaults when creating new users and you don't
override the options.

```
filebrowser init [flags]
```

## Options

```
      --auth.header string         HTTP header for auth.method=proxy
      --auth.method string         authentication type (default "json")
      --branding.disableExternal   disable external links such as GitHub links
      --branding.files string      path to directory with images and custom styles
      --branding.name string       replace 'File Browser' by this name
      --commands strings           a list of the commands a user can execute
  -h, --help                       help for init
      --locale string              locale for users (default "en")
      --lockPassword               lock password
      --perm.admin                 admin perm for users
      --perm.create                create perm for users (default true)
      --perm.delete                delete perm for users (default true)
      --perm.download              download perm for users (default true)
      --perm.execute               execute perm for users (default true)
      --perm.modify                modify perm for users (default true)
      --perm.rename                rename perm for users (default true)
      --perm.share                 share perm for users (default true)
      --recaptcha.host string      use another host for ReCAPTCHA. recaptcha.net might be useful in China (default "https://www.google.com")
      --recaptcha.key string       ReCaptcha site key
      --recaptcha.secret string    ReCaptcha secret
      --scope string               scope for users (default ".")
      --shell string               shell command to which other commands should be appended
  -s, --signup                     allow users to signup
      --sorting.asc                sorting by ascending order
      --sorting.by string          sorting mode (name, size or modified) (default "name")
      --viewMode string            view mode for users (default "list")
```

### Inherited

```
  -c, --config string     config file path
  -d, --database string   path to the database (default "./filebrowser.db")
```
