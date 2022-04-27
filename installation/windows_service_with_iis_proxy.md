# Windows service

This service can be very useful when you need grant access to wwwroot folder to developers (for example), without granting access to the server directly (RDP).

Then, possibly, you will need to setup filebrowser as a windows service with proxying traffic (proxy allows you not to open additional ports).

## Setting up Windows service
You will need [NSSM](https://nssm.cc/) to create windows service. NSSM binary must be accessible from PATH.
Run powershell as administrator and execute the following command:

```powershell
nssm install Filebrowser
```
Now you should see NSSM window.
1. Insert full path to filebrowser.exe into Path textbox. `C:\services\filebrowser\silebrowser.exe` in this example.
2. Use filebrowser root directory as a startup dir.
3. In the argument textbox, insert filebrowser parameters.
4. Left other parameters default.

Here's some examples screenshots of NSSM:

![Application](<../.gitbook/assets/nssm_application.png>)

![Details](<../.gitbook/assets/nssm_details.png>)

After this step, you can run Filebrowser service and access it by visiting [http://localhost:8080](http://localhost:8080)

## Setting up IIS proxy

You can setup IIS proxy to access Filebrowser by domain on 80/443 ports, without openning additional ports (for example, 8080).
For this you will need to setup IIS [ARR](https://www.iis.net/downloads/microsoft/application-request-routing) (Application Request Routing) module.

After installing it you will need to enable ARR in the global IIS settings.

When this done, you can add IIS website and bindings for the filebrowser, add SSL cert and so on.
You can use example web.config:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="ReverseProxyInboundRule1" stopProcessing="true">
                    <match url="(.*)" />
                    <action type="Rewrite" url="http://127.0.0.1:8080/{R:1}" />
                </rule>
            </rules>
        </rewrite>
        <security>
            <requestFiltering>
                <hiddenSegments>
                    <remove segment="App_Data" />
                    <remove segment="App_WebReferences" />
                    <remove segment="App_LocalResources" />
                    <remove segment="App_GlobalResources" />
                    <remove segment="App_code" />
                    <remove segment="bin" />
                    <remove segment="web.config" />
                    <remove segment="App_Browsers" />
                </hiddenSegments>
                <fileExtensions>
                    <remove fileExtension=".rules" />
                    <remove fileExtension=".master" />
                    <remove fileExtension=".browser" />
                    <remove fileExtension=".cs" />
                    <remove fileExtension=".vb" />
                    <remove fileExtension=".webinfo" />
                    <remove fileExtension=".resx" />
                    <remove fileExtension=".mdb" />
                    <remove fileExtension=".java" />
                    <remove fileExtension=".ldb" />
                    <remove fileExtension=".ssdgm" />
                    <remove fileExtension=".ssmap" />
                    <remove fileExtension=".cd" />
                    <remove fileExtension=".lsaprototype" />
                    <remove fileExtension=".sdmDocument" />
                    <remove fileExtension=".ldf" />
                    <remove fileExtension=".dd" />
                    <remove fileExtension=".sd" />
                    <remove fileExtension=".lddprototype" />
                    <remove fileExtension=".refresh" />
                    <remove fileExtension=".msgx" />
                    <remove fileExtension=".vsdisco" />
                    <remove fileExtension=".compiled" />
                    <remove fileExtension=".exclude" />
                    <remove fileExtension=".adprototype" />
                    <remove fileExtension=".ldd" />
                    <remove fileExtension=".ad" />
                    <remove fileExtension=".mdf" />
                    <remove fileExtension=".sdm" />
                    <remove fileExtension=".dsprototype" />
                    <remove fileExtension=".lsad" />
                    <remove fileExtension=".dsdgm" />
                    <remove fileExtension=".jsl" />
                    <remove fileExtension=".vjsproj" />
                    <remove fileExtension=".resources" />
                    <remove fileExtension=".licx" />
                    <remove fileExtension=".vbproj" />
                    <remove fileExtension=".csproj" />
                    <remove fileExtension=".sitemap" />
                    <remove fileExtension=".skin" />
                    <remove fileExtension=".ascx" />
                    <remove fileExtension=".asax" />
                    <remove fileExtension=".asa" />
                    <remove fileExtension=".config" />
                </fileExtensions>
            </requestFiltering>
        </security>
    </system.webServer>
</configuration>
```

_Note, that tou should not add <requestFiltering> tag to the web.config file if you don't need to grant access to *.config files and system directories (like App_Data)._