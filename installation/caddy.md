# Caddy

We recommend using [Caddy](https://caddyserver.com/) server as a proxy for File Browser. Caddy is a blazing fast and fantastic web server \(such as Nginx or Apache\) with automatic HTTPS through Let's Encrypt. It's really easy to use too.

So, how to use it with File Browser? We just need the [`proxy` directive](https://caddyserver.com/docs/proxy)! We will assume you already have File Browser running on port 8080.

### Run on root domain

```text
example.com

proxy / 127.0.0.1:8080
```

### Run on sub-directory

If you want to run it on a sub-directory, don't forget to set the Base URL option with the intended path. For example, if you want to access File Browser on `/admin`, you should first run:

```bash
filebrowser config set --baseurl /admin
```

And then, use the following Caddyfile:

```text
example.com

proxy /admin 127.0.0.1:8080
```

Same as above, but setting the sub-directory at the top:

```text
localhost:2015/admin

proxy / 127.0.0.1:8080
```

