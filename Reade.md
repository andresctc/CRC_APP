## Generar kesystore para realizar la Firmar de la Apicación

* Si la clave o archivo keystore no existe se debe generar con el siguiente codigo
```
  keytool -genkey -v -keystore Codensa.keystore -alias Codensa -keyalg RSA -keysize 2048 -validity 10000
```

* Se genera un password unico para el Key
```
  password: Ds@$@$910913@$@$
```

* Se realiza el borrado de la Version anteriormente publicada
```
  del Codensa.apk
```

## Generacion de aplicacion para Firmar
* Se crea la version de la aplicacion en release para produccion
```
  ionic cordova build android --release
  ionic cordova build android --prod --release --packageType=apk
``` 

* Se realiza la firma de la apk
```
  jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore Codensa.keystore platforms\android\app\build\outputs\bundle\release\app-release.apk Codensa
```

* Solicitara una clave
```
  Password: Ds@$@$910913@$@$
```

* Se realiza el comprimido de la version para subirla atiendas
```  
  zipalign -v 4 ./platforms/android/app/build/outputs/bundle/release/app-release.aab Codensa.apk
```

## Implementacion de plugins necesarios para la aplicacion
* Plugin para lectura de codigo de barras y QR para PDF417(Documentos de identidad)
```
ionic cordova plugin add phonegap-plugin-barcodescanner
npm install --save @ionic-native/barcode-scanner 
```

* Plugin para el manejo de la camara dentro de componentes html de ionic
```
ionic cordova plugin add cordova-plugin-camera-preview
npm install @awesome-cordova-plugins/camera-preview

 [b]Como desinstalar plugin[/n]
npm uninstall cordova-plugin-camera-preview
npm uninstall @awesome-cordova-plugins/camera-preview
```
* Plugin para el manejo de OCR dentro de la aplicación
```
ionic cordova plugin add cordova-plugin-mobile-ocr 
npm install @awesome-cordova-plugins/ocr 
```
* Plugin para manejo de orientación de la aplicación (PORTRAIT, LANDSCAPE)
```
ionic cordova plugin add cordova-plugin-screen-orientation
npm install @awesome-cordova-plugins/screen-orientation
```
* Plugin para manejo navegador dentro de la aplicación
```
ionic cordova plugin add cordova-plugin-inappbrowser
npm install @ionic-native/in-app-browser --save
```
* Plugin para manejo de los permisos en android
```
ionic cordova plugin add cordova-plugin-android-permissions 
npm install @awesome-cordova-plugins/android-permissions 
```


* Generación de archivos necesarios para la funcionalidad de la aplicación
```
ionic generate page CapturaDocumento
ionic generate page Login
ionic generate page Menu
ionic generate s servicios/general 
ionic generate s servicios/utilitarios
ionic generate s servicios/authGuard

ionic generate interface interfaces/DatosEscaner
ionic generate interface interfaces/FotosDocumento
ionic generate interface interfaces/DatosOcr
ionic generate interface interfaces/LoginResponse
```
## Comandos de ejecucion para la aplicacion
* Creacion de plataforma android y ejecucion en linea para desarrollo
```
ionic cordova platform add android 
ionic cordova run android -l 
```

* Creación y compilación de la aplicacion archivo (APK)
```
ionic cordova build android
```


* Ejecución de aplicación en dispositivo sin depueración
```
ionic cordova run android
```
