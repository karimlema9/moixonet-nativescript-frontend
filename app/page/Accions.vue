<template>
  <PageLayout title="Accions" name="Accions" class="font-weight-bold">
    <StackLayout>
      <StackLayout>
        <button @tap="vibra">Vibra</button>
      </StackLayout>
      <StackLayout>
        <button @tap="vibra">Tipus de xarxa i Velocitat</button>
      </StackLayout>
    </StackLayout>
  </PageLayout>
</template>

<script>
// import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from 'tns-core-modules/connectivity'
import { Vibrate } from 'nativescript-vibrate'
const vibrator = new Vibrate()
export default {
  methods: {
    vibra () {
      vibrator.vibrate(200)
    }
  },
  // export function onNavigatedTo(args) {
  //   const page = args.object;
  //   let connectionTypeString;
  //
  //   const type = getConnectionType();
  //
  //   switch (type) {
  //     case connectionType.none:
  //       console.log("No connection");
  //       connectionTypeString = "No Internet connectivity!";
  //       break;
  //     case connectionType.wifi:
  //       console.log("WiFi connection");
  //       connectionTypeString = "WiFI connectivity!";
  //       break;
  //     case connectionType.mobile:
  //       console.log("Mobile connection");
  //       connectionTypeString = "Mobile connectivity!";
  //       break;
  //     case connectionType.ethernet:
  //       console.log("Ethernet connection");
  //       connectionTypeString = "Ethernet connectivity!";
  //       break;
  //     case connectionType.bluetooth:
  //       console.log("Bluetooth connection");
  //       connectionTypeString = "Bluetooth connectivity!";
  //       break;
  //     default:
  //       break;
  //   }
  //
  //   startMonitoring((newConnectionType) => {
  //     switch (newConnectionType) {
  //       case connectionType.none:
  //         console.log("Connection type changed to none.");
  //         break;
  //       case connectionType.wifi:
  //         console.log("Connection type changed to WiFi.");
  //         break;
  //       case connectionType.mobile:
  //         console.log("Connection type changed to mobile.");
  //         break;
  //       case connectionType.ethernet:
  //         console.log("Connection type changed to ethernet.");
  //         break;
  //       case connectionType.bluetooth:
  //         console.log("Connection type changed to bluetooth.");
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  //
  //   // Stoping the connection monitoring
  //   stopMonitoring();
  //
  //   page.bindingContext = { connectionType: connectionTypeString };
  // }
}
</script>

<style scoped lang="scss">
  // Custom styles
  .fab-button {
    height: 70;
    width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
    margin: 15;
    background-color: #ff4081;
    horizontal-align: right;
    vertical-align: bottom;
  }
</style>
