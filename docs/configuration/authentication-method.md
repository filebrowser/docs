# Authentication Method

Right now, there are three possible authentication methods. Each one of them has its own capabilities and specification. If you are interested in contributing with one more authentication method, please [check the guidelines](../contributing/authentication-provider.md).

## JSON Auth \(default\)

We call it JSON Authentication but it is just the default authentication method and the one that is provided by default if you don't make any changes. Although, this method can be extended with **reCAPTCHA** verification during login:

```bash
filebrowser config set --recaptcha.key site-key --recaptcha.secret private-key
```

By default, we use [Google's reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html) service. If you live in China, or want to use other provider, you can change the host with the following command:

```bash
filebrowser config set --recaptcha.host https://recaptcha.net 
```

Where `https://recaptcha.net` is any provider you want.

## Proxy Header

If you have a reverse proxy you want to use to login your users, you do it via our `proxy` authentication method. To configure this method, your proxy must send an HTTP header containing the username of the logged in user:

```text
filebrowser config set --auth.method=proxy --auth.header=X-My-Header
```

Where `X-My-Header` is the HTTP header provided by your proxy with the username.

{% hint style="warning" %}
File Browser will blindly trust the provided header. If the proxy can be bypassed, an attacker could simply attach the header and get admin access.
{% endhint %}

## No Authentication

We also provide a no authentication mechanism for users that want to use File Browser privately such in a home network. By setting this authentication method, the user with **id 1** will be used as the default users. Creating more users won't have any effect.

```bash
filebrowser config set --auth.method=noauth
```

