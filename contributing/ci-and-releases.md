# CI and Releases

Currently, a single CI service is being used: [travis-ci.com/filebrowser](https://travis-ci.com/filebrowser) and we use our [wizard script](https://github.com/filebrowser/filebrowser/blob/master/wizard.sh) to manage our builds and releases.

## Release Procedure

{% hint style="info" %}
We use semantic versioning. For more info check [semver.org](https://semver.org).
{% endhint %}

1. Execute `./wizard.sh -r $semver` in [filebrowser/filebrowser](https://github.com/filebrowser/filebrowser).
2. When the tag is pushed, Circle will detect it and execute the following procedures:
   1. Run through the linters to check if the code is alright.
   2. Build the frontend and the backend, generating `rice-box.go`.
      * If the commit **is not** tagged, we will push the latest `filebrowser/filebrowser` docker image to [hub.docker.com/r/filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser/).
   3. If the commit **is** tagged, then:
      1. Build the release artifacts for all supported platforms and a new docker image \(see [`.goreleaser.yml`](https://github.com/filebrowser/filebrowser/blob/master/.goreleaser.yml) for more information\).
      2. The artifacts are published to [GitHub Releases](https://github.com/filebrowser/filebrowser/releases).
      3. The tagged docker image is published to [hub.docker.com/r/filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser/).



