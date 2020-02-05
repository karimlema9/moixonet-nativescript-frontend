
- [X] Drawer
  - [X] Controleu que apareguin correctament seleccionats els items de menú (menú actual ha d'estar amb color fons que el remarqui)
    - [X] A les pàgines cal utilitzar el servei SelectedPage per indicar quina pàgina està seleccionada/activa: 
       - SelectedPageService.getInstance().updateSelectedPage('ChannelsList')
- [X] Estem fent una replica aplicatiu Ebando -> instal·leu-vos tots l'aplicació al mòbil
- [ ] Apartat/pàgina Settings
  - [ ] Ús de dividers, tres seccions:  
    - [f] General
    - [f] notificacions
    - [f] Quant a
  - [f] Ús de switchs:
    - [ ] Confirmar per eliminar
    - [ ] Activar/desactivar notificacions
    - [ ] Silenci notificacions
    - [ ] Vibració
    - [ ] Poder escollir só de la notificació
    - [ ] Enviar notificació de prova/comprovar notificacions

SHARE:
 - [ ] Compartir per xarxes socials URL de canal i/o missatge

Detall de canal 
  - [ ] Missatges
    - [ ] Swipe to delete message
    
  - [ ] Action a ActionBar
    - [ ] Marcar tots els missatges com a llegits -> Confirm
  - [ ] Tabs:
    - [ ] Missatges
    - [ ] Agenda -> Mostrar calendari
    - [ ] Info del canal: Imatge, nom del canal i descripció
    - [ ] Configuració
      - [ ] Activar/desactivar notificacions
      - [ ] Tags -> Missatges etiquetables
      - [ ] Enviar missatge -> email/ bustia
      - [ ] Eliminar/desubsciures del canal 
      
# MANUAL ROUTING PASSING PROPS

```
this.$navigateTo(Detail, {
  transition: {},
  transitioniOS: {},
  transitionAndroid: {},

  props: {
    foo: 'bar',
  }
});
```  

# TASQUES DIJOUS 30 GENER 2020

- [ ] Millores CSS
  - Llista de canals:
    - Lletra més gran
    - Més amplitud de la icona/imatge
    - En comptes de botons -> icones/botó
- [f] LAYOUTS de pages
  - [f] Evitar codi WET Copy/paste -> ActivityIndicator, ActionBar etc són iguals a cada pàgina
- [X] Passar informació entre pàgines
  - [X] Master/Detail de canals
    - [X] Al fer click a un canal a la llista de canals (master) passar el canal al detail
    - $navigateTo(Component, options)
      - options: 
        - props: Propietats del component Vue que representa una nova pàgina
- [X] Utilitzar tècnica diferent que backend -> en comptes de loading a cada button/component posar un loadinggeneral
  - [X] Interceptar totes les peticions axios amb un Middleware/Interceptors axios per activar el loading
    - https://github.com/axios/axios#interceptors
  - [X] Ja no caldrà més fer $snackbar.showError() als components
  - [X] Tampoc no cal activar desativar loadings. Es pot executar el cosy sense try catch!!  
             
# TASQUES DIMARTS 28 GENER 2020


- [X] Mostrar el número total de missatges del canal a la llista de canals (p.ex entre parentesi)
- [X] Criteris de disseny:
  - [X] Material spec
  - [X] https://refactoringui.com/ -> Greys don’t have to be grey 141 -> OverLaycolor
- [X] Actualitzeu nativescript: npm install -g nativescript -> tns --version -> 6.3.3
  - En teoria hi ha millores amb el HMR (Hot Module Reloading)
- [X] Actualitzeu PHPStorm
  - [X] Instal·leu/actulitzeu plugin nativescript
  - [X] Prepareu una execució a menu Run > Edit configurations
- [X] Comprovar funciona correctament connexió API (peticions axios amb Token correcte)
  - [X] facilitar la obtenció d'un token vàlid -> Resultat login correcte amb Laravel Passport i Proxy JANITOR
    - [X] Crear token per Tinker (vegeu backend)
    - [X] Crear token per interfície gràfica de Laravel passport (vegeu backend)
    - [X] Comanda php artisan -> Laravel commands https://laravel.com/docs/6.x/artisan -> php artisan create:token 
  - [X] Page ChannelsList exemple vam fer per provar funciona. Atents a la línia de comandes si apareix error 401 -> Cal posar token nou
  - [X] Millorar UX -> Succeix un error i no mostrem res a l'usuari final
    - [X] Spinner/Loading/ActivityIndicator
      - [X] Spec material: https://material.io/components/progress-indicators/#specs
      - [X] ActivityIndicator -> Circular
      - [X] Progress: https://nativescript-vue.org/es/docs/elements/components/progress/
        - https://docs.nativescript.org/ui/components/progress
        - https://docs.nativescript.org/angular/ui/ng-components/progress
      - [X] A l'apartat cellular de l'emulador reduir la velocitat de xarxa del dispositiu.
    - [X] Estil spinner. GridLayout per defecete sinó s'indiquen columnes/rows posa un element sobre l'altre
       - [X] Efecte overlay via CSS ->    
    - [X] Utilitzat tècnica diferent que backend -> en comptes de loaind a cada button/component posar un loadinggeneral
      - [ ] Interceptar totes les peticions axios amb un Middleware/Interceptors axios per activar el loading
        - https://github.com/axios/axios#interceptors  
- [X] Snackbar plugin
  - [X] Material components. Proveu la demo de: https://github.com/Akylas/nativescript-material-components
  
# Spinner/Loading/ActivityIndicator

Docs:
- https://docs.nativescript.org/angular/ui/ng-components/activity-indicator
- https://nativescript-vue.org/en/docs/elements/components/activity-indicator/
- https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator

# TASQUES DILLUNS 27 GENER 2020

Comprovació Tasques ja haurien estar fetes:
- [X] PLUGINS:
  - [X] Axios instal·lat: està a package.json i al fitxer app.js i carpeta plugins tal com professor
    - [X] TOKEN EXPLOTACIÓ ben configurat amb un token vàlid explotació
  - [X] EventBus: ídem copiar del professor
- [X] VUEX: 
  - [x] Comprovar està instal·lat: package.json i s'importa carpeta store a app.js
- Autenticació:
  - [X] Mocking de l'autenticació: 
    - No la realitzem realment amb el backend per anar per feina
  - Si afegim interfície gràfica:
    - [ ] Menú a drawer per fer el logout amb confirm
    - [ ] Menú mostra dialeg per fer el login: el login sempre funciona correctament
      - [ ] Mostra link a registre -> Directement al backend
    - [ ] O es mostra un o es mostra l'altre segons estem logats o no

TODO: 

- [X] Llegir/Explicar apartat NOTES SOBRE EMULADORS I EXECUCIÓ
- [X] Autocomplete example, executar apartat Autocomplete RadAutocompleteTextView i explicar com funciona
- [X] Notes anteriors: https://gist.github.com/acacha/d99dbf60e4a40253fe90f7acf1aece65
- [X] Mòduls VUEX namespaced: true
- [X] Vuex: una sola mutació per modificar qualsevol estat (mutació mòdul AUTH):
[types.SET] (state, payload) {
  Vue.set(state, payload.key, payload.value)
}
- [X] Explicar funció set i pq cal? Limitations identificació de canvis en objectes/arrays a Vue/Javascript
- [ ] Posar backend a explotació per poder utilitzar a Nativescript
- [ ] Identificació de patrons/components:
  - [ ] Page amb ActionBar, a cada pàgina estem copiant i pegant el codi de la action Bar amb hamburguer icon -> Fer component i refactoritzar
-   

# NOTES SOBRE EMULADORS I EXECUCIÓ

- [ ] Multiples carpetes emulador Android: https://www.stkent.com/2017/08/10/update-your-path-for-the-new-android-emulator-location.html
  - /home/sergi/android/emulator/emulator
  - /home/sergi/android/tools/emulator
  - [ ] UTILITZAR: /home/sergi/android/emulator/emulator -avd Nexus_5X_API_29_x86
  - [ ] Posar abans emulator al path: export PATH="${PATH}:${ANDROID_HOME}emulator/:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/:${ANDROID_HOME}tools/bin"
- [ ] Afegiur script npm run dev amb     "dev": "emulator @Nexus_5X_API_29_x86 & ; emulator @Pixel_C_API_29 & ; tns run",  
- [ ] Emuladors i execució
  - [ ] emulator -list-avds
  - [ ] emulator @Nexus_5X_API_29_x86 && emulator @Pixel_C_API_29
  - [ ] tns run --help
    - [ ] emulator -list-avds
  - Emuladors desde Android Studio:
    - Comanda $ studio
      - Menu Tools AVD Manager  
  - [ ] tns devices: mostra dispositius/emuladors connectats
- [ ] LOG: tns device log
- [ ] Mostrar llis aplicacions instal·lades: tns device list-applications

REFACTORITZACIONS:
- [ ] Codi WET: onDrawerButtonTap () a totes les pàgines amb actionBar --> component actionBar

# TABS

- [X] Oblidar TabView component: https://www.nativescript.org/blog/tabs-and-bottomnavigation-nativescripts-two-new-components
- [ ] Versió 6.1 dos components nous:
  - [X] Navigation a Material spec: https://material.io/design/navigation/understanding-navigation.html#lateral-navigation
  - [X] BottomNavigation
    - [X] Material spec: https://material.io/components/bottom-navigation/#
      - 3 a 5 opcions de mnu màxim. Més de 5 navigation Drawer i 2 o menys Tabs
  - [X] Tabs: https://material.io/components/tabs/#

# TASQUES DIJOUS 16 GENER 2020

- [ ] CONFIRM DIALOG a la operació desubscriure's del canal -> https://nativescript-vue.org/en/docs/elements/dialogs/confirm/
- [ ] Portar una tablet si teniu. Si no teniu crear un dispositiu virtual extra que sigui una tablet per fer proves en tablet
- [F] Canviar nom aplicació. Vegeu apartat a sota
- [F] Provar canvis Android Properties (per exemple orientació app) utilitzant Sidekick
- [ ] Fitxer Manifest Android **app/App_Resources/Android/src/main/AndroidManifest.xml**: 
  - [F] Provar forçar aplicació només funcioni en mode portrait. Llegiu apartat FORCE ORIENTATION
- [F] Entendre aplicació estils a la pàgina **Home**
- [F] Canviar el tema: @import "~@nativescript/theme/brown"; als estils
  - [F] Aplicar colors als botons, aprendre com s'apliquen variacions primary i similars.
  - [F] Posar icona al botó afegir canal
- [f] Temes: executar i comprovar les posibilitats amb temes executant demo Nativescript
- [ ] Adaptació / Responsive segons orientation o tablet/phone
  - [ ] Canviar l'ampla del boto CTA!!  
- [ ] Exemple ús local storage (els meus canals sense usuari logat)
- [ ] Page Events -> No utilitzar created|moutend utilitzar Page Event LOADED -> hi ha events relacionats també amb la nagevació!
  - [ ] Injectar referències a la pàgina actual al codi VUE
- [ ] Crear component UserChannels:
  - [ ] Arquitectura dumb/smart component (dos parts)
  - [ ] Mostra la llista de canals de l'usuari -> inicialment la llista de canals és un JSON hardcoded. Més endavant utilitzarem localStorage
  - [ ] Utilitzem RadListView per formatar la vista:
    - [ ] Cada component de la llista ha de tenir un thumb/imatge del canal i el nom del canal
    - [ ] També mostrarem data creació -> Dos files
- [ ] Altres per practicar estils
  - [ ] Buscar icona per channels i aplicar al codi 
  - [ ] Crear pàgina de login (similar exemple app demo temes)
  - [ ] Crear un apartat config on l'usuari pugui canviar a Dark Mode (utilitzant un switch): https://www.nativescript.org/blog/an-early-look-at-the-new-nativescript-core-theme


# Guia 22 novembre

Repàs:
- tns run android per executar al emulador
- tns devices: mostra els dispositius disponibles
- Testos E2E:  
  - npm run e2e
  - Per a un dispositiu concret:
    - npm run android29 (vegeu package.json)
    
- https://gist.github.com/acacha/461541f97a6c4f3eaefef6be9e1122fc

UNIT TESTING:
- https://docs.nativescript.org/tooling/testing/testing
 - tns test init

TROUBLES:
- https://github.com/NativeScript/NativeScript/issues/3746
  - ActionItem no suporta automationText
  - NavigationButton no suporta automationText
  
# Tasques

- Contingut de la pàgina quan no hi ha cap canal:
  - Canviar la icona Casa
  - Navigation Bootom en comptes de tabView 
  - https://github.com/nstudio/nativescript-snackbar
  
  
## Config eslint:

Copieu els fitxers .eslintrc.js i els paquets extres a package.json 

# DEURES

EMULADOR AMB UN SAMSUNG GALAXY NEXUS o altre telèfon

# TESTS

http://appium.io/docs/en/commands/element/find-elements/

```
// wd example
let elementsOne = await driver.elementsByAccessibilityId("SomeAccessibilityID");
let elementsTwo = await driver.elements("id", "SomeID");
```

# Requirements

Install NativeScript for Linux:

https://docs.nativescript.org/start/ns-setup-linux

Per evitar altres errors (vegeu Troubleshooting) cal també executar:

```
sdkmanager "tools" "emulator" "platform-tools" "platforms;android-29" "build-tools;29.0.2" "extras;android;m2repository" "extras;google;m2repository"
sdkmanager "system-images;android-29;google_apis_playstore;x86_64"
``` 

Check nativescript installation:

```
tns doctor
```

## Create Android Virtual Device

Primer cal controlar tema system images hi ha disponibles:

```
sdkmanager --list | grep images
```

Un cop localitzada una system image, per instal·larla:

```
sdkmanager "system-images;android-23;google_apis;x86_64"
```

Per crear una AVD relacionada:

```
avdmanager create avd -n Emulator-Api23-Google -k "system-images;android-23;google_apis;x86_64"
``` 

You can use **avdmanager**:

```
avdmanager create avd -n Emulator-Api29-Google -k "system-images;android-29;google_apis_playstore;x86_64"
``` 

Dos coses, compte amb la comanda emulador que s'està utilitzant (no funciona /home/sergi/android/sdk/tools?):

```
./emulator -list-avds
Emulator-Api29-Google
```

També cal activar acceleració KVM si us dona l'error:

```
Please ensure KVM is properly installed and usable.
CPU acceleration status: This user doesn't have permissions to use KVM (/dev/kvm)
More info on configuring VM acceleration on Linux:
https://developer.android.com/studio/run/emulator-acceleration#vm-linux
General information on acceleration: https://developer.android.com/studio/run/emulator-acceleration.
``` 

```
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
sudo adduser sergi kvm 
```

Cal reinciar/sortir de l'usuari tornar a entrar per ser memebre del grup KVM. 

Per comprovar si KVM està ok:

```
kvm-ok
```

Executar manual:

```
emulator -avd Emulator-Api29-Google
```

# VUE DEV TOOLS

https://nativescript-vue.org/en/docs/getting-started/vue-devtools/

# APPIUM DESKTOP

Descarregar:

```
https://github.com/appium/appium-desktop/releases/tag/v1.15.1
```

Baixeu la versió amb extensió .AppImage 

Per instal·lar aneu a la carpeta baixades i feu:

```
chmod +x Appium-linux-1.15.1.AppImage 
./Appium-linux-1.15.1.AppImage 

```

Feu click a start Server i després a la "Lupa", a Json representacion poseu la capability android 29 que utilitzem a **e2e/config/appium.capabilities.json**:


```
{
"platformName": "Android",
"platformVersion": "29",
"deviceName": "Emulator-Api29-Google",
"avd": "Emulator-Api29-Google",
"lt": 60000,
"newCommandTimeout": 720,
"noReset": false,
"fullReset": false,
"app": ""
}
```

Save as Android29 i feu click a Start Session.

# HOW APPIUM WORKS:

- https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjvt5SbouzlAhUExYUKHdd4C4IQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.3pillarglobal.com%2Finsights%2Fappium-a-cross-browser-mobile-automation-tool&psig=AOvVaw1L2UPNyFKqNI2U3eESApde&ust=1573909032227220
- https://www.youtube.com/watch?v=Ns7boY6XNC0


# Installation

``` 
cd ~/Code
git clone git@github.com:acacha/moixonet-nativescript-frontend.git
cd moixonet-nativescript-frontend
npm install
``` 

# Execució

## Nativescript preview

```
tns preview
```

## Dispositiu Android 

You will need and AVD (Android Virtual Device) running using Android SDk emulator or a real device connected via USB:

Create apk:

```
tns build android
```

Check connected devices via USB:

```
watch lsusb
```

Check android devices detected:

```
adb devices
```

Check nativescript devices:

```
tns devices
```

# TESTING 

## E2E APIUM

we use Vue an Mocha version:

``` 
npm install -D nativescript-dev-appium
npm install -g appium
```

Capabilities file **e2e/config/appium.capabilities.json**. Add:

```
"android29": {
      "platformName": "Android",
      "platformVersion": "29",
      "deviceName": "Emulator-Api29-Google",
      "avd": "Emulator-Api29-Google",
      "lt": 60000,
      "newCommandTimeout": 720,
      "noReset": false,
      "fullReset": false,
      "app": ""
    },
``` 

Create AVD:

```
avdmanager create avd -n Emulator-Api29-Google -k "system-images;android-29;google_apis_playstore;x86_64"
avdmanager list
```

Run tests:

```
npm run e2e -- --runType android29
```

Si dona error de QT al arrancar emulador (vegeu Troubleshooting) executeu:

```
cd ~/android/sdk/tools
npm run e2e -- --runType android29
``` 

Resources:
-https://github.com/NativeScript/nativescript-dev-appium

### FEATURES

https://docs.nativescript.org/angular/tooling/testing/end-to-end-testing/features

### Capabilities

https://appium.io/docs/en/writing-running-appium/caps/

## UNIT TESTS

## MOCHA

# Troubleshooting

## APIUM PROBLEMS

Use --verbose to debug:

``` 
$ npm run e2e -- --runType android25 --verbose
```

https://docs.nativescript.org/angular/tooling/testing/end-to-end-testing/troubleshooting

## AAPT: error: style attribute 'android:attr/forceDarkAllowed' not found 

Si al executar **tns build android** us dona l'error:

/home/sergi/Code/esborrar/moixonet-nativescript-frontend/platforms/android/app/src/main/res/values-v29/styles.xml:5:5-7:13: AAPT: error: style attribute 'android:attr/forceDarkAllowed' not found.

Llegiu apartat requeriments, cal instal·lar system-images;android-29 i altres.

## Qt library not found at

Cal executar l'emulador des de la seva carpeta per un error recent (see Stackoverflow)

[139657463924544]:ERROR:android/android-emu/android/qt/qt_setup.cpp:28:Qt library not found at ../emulator/lib64/qt/lib

- https://stackoverflow.com/questions/42554337/cannot-launch-avd-in-emulatorqt-library-not-found
# moixonet-nativescript-frontend
# moixonet-nativescript-frontend

