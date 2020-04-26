<template>
  <app-user-channels :channels="channels" @leaved="leave($event)" @selected="select" />
</template>

<script>
import { SnackBar } from 'nativescript-material-snackbar'
import * as dialogs from 'tns-core-modules/ui/dialogs'
import Channel from '../pages/Channel'
import * as actions from '../store/action-types'
import AppUserChannels from './AppUserChannels'

const snackbar = new SnackBar()

export default {
  name: 'UserChannels',
  components: {
    'app-user-channels': AppUserChannels
  },
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  methods: {
    select (item) {
      console.log('canal')
      console.log(item)
      this.$navigateTo(Channel, {
        props: {
          channel: item
        }
      })
    },
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
        } else {
          snackbar.action({
            message: 'Gràcies per repensar-t\'ho',
            actionText: 'Dismiss',
            hideDelay: 2000
          })
        }
      })
    }
  }
}
</script>
