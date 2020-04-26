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
