<template>
  <app-channel-info :channel="channel" @joined="join($event)" @leaved="leave($event)" />
</template>

<script>
import { SnackBar } from 'nativescript-material-snackbar'
import * as dialogs from 'tns-core-modules/ui/dialogs'
import Home from '../page/Home'
import * as actions from '../store/action-types'
import AppChannelInfo from './AppChannelInfo'

const snackbar = new SnackBar()
export default {
  name: 'ChannelInfo',
  components: {
    'app-channel-info': AppChannelInfo
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  methods: {
    leave (channel) {
      dialogs.confirm({
        title: 'Dessubscripció',
        message: 'Segur que vols sortir d\'auqest canal?? :(',
        okButtonText: 'Sips UwU',
        cancelButtonText: 'Sry, no tornara a passar'
      }).then((result) => {
        if (result) {
          this.$store.dispatch('localChannels/' + actions.LOCAL_CHANNELS_DELETE, channel)
          snackbar.action({
            message: channel.name + ' et trobara a flatar :,(',
            actionText: 'Dismiss',
            hideDelay: 2000
          })
          this.$navigateTo(Home, {
            clearHistory: true
          })
        } else {
          snackbar.action({
            message: 'Gràcies per repensar-t\'ho',
            actionText: 'Dismiss',
            hideDelay: 2000
          })
        }
      })
    },
    join (channel) {
      this.$store.dispatch('localChannels/' + actions.LOCAL_CHANNELS_STORE, channel)
      snackbar.action({
        message: 'T\'has subscrit al Canal ' + channel.name,
        actionText: 'Dismiss',
        hideDelay: 2000
      })
      this.$navigateTo(Home, {
        clearHistory: true
      })
    }
  }
}
</script>
