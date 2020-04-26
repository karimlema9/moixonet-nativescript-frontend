<!--<template>-->
<!--  <PageLayout title="Pagina De Proves" name="PaginaDeProves">-->
<!--    <ScrollView>-->
<!--      <StackLayout class="llistat">-->
<!--        <GridLayout columns="*, *">-->
<!--          <Button class="item-text" col="0" verticalAlignment="center" text="Vibrar" @tap="vibrate"></Button>-->
<!--          <Button class="item-text" col="1" verticalAlignment="center" text="Vibrar Patró" @tap="vibratePattern"></Button>-->
<!--        </GridLayout>-->
<!--        <StackLayout class="hr" />-->
<!--        <GridLayout columns="*, auto">-->
<!--          <Label class="item-text" col="0" verticalAlignment="center" text="Bateria"></Label>-->
<!--          <Label class="item-text" col="1" verticalAlignment="center" :text="battery"></Label>-->
<!--        </GridLayout>-->
<!--        <StackLayout class="hr" />-->
<!--        <GridLayout columns="*, auto">-->
<!--          <Label class="item-text" col="0" verticalAlignment="center" text="Network Type"></Label>-->
<!--          <Label class="item-text" col="1" verticalAlignment="center" :text="connectionTypeString"></Label>-->
<!--        </GridLayout>-->
<!--        <StackLayout class="hr" />-->
<!--        <GridLayout columns="*, auto">-->
<!--          <Label class="item-text" col="0" verticalAlignment="center" text="Sistema Operatiu"></Label>-->
<!--          <Label class="item-text" col="1" verticalAlignment="center" :text="os"></Label>-->
<!--        </GridLayout>-->
<!--        <StackLayout class="hr" />-->
<!--        <GridLayout columns="*, auto">-->
<!--          <Label class="item-text" col="0" verticalAlignment="center" text="Geolocalització"></Label>-->
<!--          <Label class="item-text" col="1" verticalAlignment="center" :text="geoloaction" textWrap="true"></Label>-->
<!--        </GridLayout>-->
<!--        <StackLayout class="hr" />-->
<!--        <GridLayout columns="*, auto">-->
<!--          <Label class="item-text" col="0" verticalAlignment="center" text="Plataforma"></Label>-->
<!--          <Label class="item-text" col="1" verticalAlignment="center" :text="platform" textWrap="true"></Label>-->
<!--        </GridLayout>-->
<!--        <StackLayout class="hr" />-->
<!--      </StackLayout>-->
<!--    </ScrollView>-->
<!--  </PageLayout>-->
<!--</template>-->

<!--<script>-->
<!--import { Vibrate } from 'nativescript-vibrate'-->
<!--import * as geolocation from 'nativescript-geolocation'-->
<!--import { Accuracy } from 'tns-core-modules/ui/enums'-->
<!--import { device, screen } from 'tns-core-modules/platform'-->
<!--import * as applicationModule from 'tns-core-modules/application'-->
<!--import power from 'nativescript-powerinfo'-->
<!--import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from 'tns-core-modules/connectivity'-->
<!--import SelectedPageService from '../shared/selected-page-service'-->

<!--const vibrator = new Vibrate()-->

<!--export default {-->
<!--  name: 'TestPage',-->
<!--  mounted () {-->
<!--    SelectedPageService.getInstance().updateSelectedPage('TestPage')-->
<!--    // tipus de connexió-->
<!--    this.connectionTypeResponse(this.type)-->
<!--    startMonitoring((newConnectionType) => {-->
<!--      this.connectionTypeResponse(newConnectionType)-->
<!--    })-->
<!--    // TODO QUAN TREBALLO EN METHODS O VAROABLE VUE PETA: Error receiving broadcast Intent { act=android.intent.action.BATTERY_CHANGED flg=0x60000010 (has extras) } in com.tns.gen.android.content.BroadcastReceiver_vendor_962_26_BroadcastReceiver@4c859b6-->
<!--    // Bateria-->
<!--    power.startPowerUpdates(function ({ percent }) {-->
<!--      console.log('battery charge: ' + percent + '%')-->
<!--    })-->
<!--    // sistema operatiu-->
<!--    if (applicationModule.android) {-->
<!--      this.os = 'Android'-->
<!--    } else if (applicationModule.ios) {-->
<!--      this.os = 'IOS'-->
<!--    }-->
<!--    // GEOLOCALITAZACIÓ-->
<!--    geolocation.enableLocationRequest()-->
<!--    geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 }).then((response) => {-->
<!--      this.geoloaction = 'latitude: ' + response.latitude +-->
<!--        '\nlongitude: ' + response.longitude +-->
<!--        '\naltitude: ' + response.altitude +-->
<!--        '\nhorizontalAccuracy: ' + response.horizontalAccuracy +-->
<!--        '\nverticalAccuracy: ' + response.verticalAccuracy-->
<!--    })-->
<!--    // PLATAFORMA-->
<!--    this.platform = '\nmodel: ' + device.model +-->
<!--      '\ndeviceType: ' + device.deviceType +-->
<!--      '\nos: ' + device.os +-->
<!--      '\nosVersion: ' + device.osVersion +-->
<!--      '\nsdkVersion: ' + device.sdkVersion +-->
<!--      '\nlanguage: ' + device.language +-->
<!--      '\nmanufacturer: ' + device.manufacturer +-->
<!--      '\nuuid: ' + device.uuid +-->
<!--      '\nregion: ' + device.region +-->
<!--      '\nheightDIPs: ' + screen.heightDIPs +-->
<!--      '\nheightPixels: ' + screen.heightPixels +-->
<!--      '\nscale: ' + screen.scale +-->
<!--      '\nwidthDIPs: ' + screen.widthDIPs +-->
<!--      '\nwidthPixels: ' + screen.widthPixels-->
<!--  },-->
<!--  destroyed () {-->
<!--    // tipus de conexió-->
<!--    stopMonitoring()-->
<!--    // Bateria-->
<!--    power.stopPowerUpdates()-->
<!--    // New-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      connectionType: getConnectionType(),-->
<!--      connectionTypeString: '',-->
<!--      battery: 'TODO | Veure en la consola',-->
<!--      os: '',-->
<!--      geoloaction: '',-->
<!--      platform: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    connectionTypeResponse (type) {-->
<!--      switch (type) {-->
<!--        case connectionType.none:-->
<!--          this.connectionTypeString = 'No Internet connectivity!'-->
<!--          break-->
<!--        case connectionType.wifi:-->
<!--          this.connectionTypeString = 'WiFI connectivity!'-->
<!--          break-->
<!--        case connectionType.mobile:-->
<!--          this.connectionTypeString = 'Mobile connectivity!'-->
<!--          break-->
<!--        case connectionType.ethernet:-->
<!--          this.connectionTypeString = 'Ethernet connectivity!'-->
<!--          break-->
<!--        case connectionType.bluetooth:-->
<!--          this.connectionTypeString = 'Bluetooth connectivity!'-->
<!--          break-->
<!--        default:-->
<!--          break-->
<!--      }-->
<!--    },-->
<!--    vibrate () {-->
<!--      vibrator.vibrate(500)-->
<!--    },-->
<!--    vibratePattern () {-->
<!--      vibrator.vibrate([-->
<!--        100, 350, 100, 350,-->
<!--        100, 175, 100, 175, 100, 175,-->
<!--        300, 150, 100, 150, 100, 150, 100, 150,-->
<!--        300, 200, 100, 200-->
<!--      ])-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.llistat *{-->
<!--  margin: 20px;-->
<!--}-->
<!--</style>-->

<template>
  <PageLayout title="Device Info" name="DeviceInfo">
    <ScrollView>
      <StackLayout class="marge">
        <GridLayout columns="*, *">
          <Button class="item-text" col="0" vertical-alignment="center" text="Vibrar" @tap="vibrate" />
        </GridLayout>
        <StackLayout class="hr" />
        <GridLayout columns="*, auto">
          <Label class="item-text" col="0" vertical-alignment="center" text="Tipus de connexió" />
          <Label class="item-text" col="1" vertical-alignment="center" :text="connectionTypeString" />
        </GridLayout>
        <StackLayout class="hr" />
        <GridLayout columns="*, auto">
          <Label class="item-text" col="0" vertical-alignment="center" text="Bateria" />
          <Label class="item-text" col="1" vertical-alignment="center" :text="battery" />
        </GridLayout>
        <StackLayout class="hr" />
        <GridLayout columns="*, auto">
          <Label class="item-text" col="0" vertical-alignment="center" text="Sistema Operatiu" />
          <Label class="item-text" col="1" vertical-alignment="center" :text="os" />
        </GridLayout>
        <StackLayout class="hr" />
        <GridLayout columns="*, auto">
          <Label class="item-text" col="0" vertical-alignment="center" text="Geolocalització" />
          <Label class="item-text" col="1" vertical-alignment="center" :text="geoloaction" text-wrap="true" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </PageLayout>
</template>

<script>
import { Vibrate } from 'nativescript-vibrate'
import { Accuracy } from 'tns-core-modules/ui/enums'
import * as geolocation from 'nativescript-geolocation'
import * as applicationModule from 'tns-core-modules/application'
import power from 'nativescript-powerinfo'
import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from 'tns-core-modules/connectivity'
import SelectedPageService from '../shared/selected-page-service'

const vibrator = new Vibrate()

export default {
  name: 'DeviceInfo',
  data () {
    return {
      connectionType: getConnectionType(),
      connectionTypeString: '',
      battery: 'Es pot veure a la consola, nose com mostraro per aqui.',
      os: '',
      geoloaction: ''
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('DeviceInfo')
    // tipus de connexió
    this.connectionTypeResponse(this.type)
    startMonitoring((newConnectionType) => {
      this.connectionTypeResponse(newConnectionType)
    })
    power.startPowerUpdates(function ({ percent }) {
      console.log('Porcentaje de bateria: : ' + percent + '%')
    })
    if (applicationModule.android) {
      this.os = 'Android'
    } else if (applicationModule.ios) {
      this.os = 'IOS'
    }
    geolocation.enableLocationRequest()
    geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 }).then((response) => {
      this.geoloaction = 'latitude: ' + response.latitude +
        '\nlongitude: ' + response.longitude +
        '\naltitude: ' + response.altitude +
        '\nhorizontalAccuracy: ' + response.horizontalAccuracy +
        '\nverticalAccuracy: ' + response.verticalAccuracy
    })
  },
  destroyed () {
    // tipus de conexió
    stopMonitoring()
    // Bateria
    power.stopPowerUpdates()
    // New
  },
  methods: {
    connectionTypeResponse (type) {
      switch (type) {
        case connectionType.none:
          this.connectionTypeString = 'Sin conexion!'
          break
        case connectionType.wifi:
          this.connectionTypeString = 'Conexion WiFI'
          break
        case connectionType.mobile:
          this.connectionTypeString = 'Conexion datos'
          break
        case connectionType.ethernet:
          this.connectionTypeString = 'Conexion Ethernet'
          break
        case connectionType.bluetooth:
          this.connectionTypeString = 'Conexion Bluetooth'
          break
        default:
          break
      }
    },
    vibrate () {
      vibrator.vibrate(200)
    }
  }
}
</script>

<style scoped lang="scss">
  .marge *{
    margin: 10px;
  }
</style>
