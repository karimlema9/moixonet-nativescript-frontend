<template>
  <StackLayout>
    <template >
      <app-user-channels :channels="channels" @leave="leave" @selected="selected" />
    </template>
    <channels-no-items/>
  </StackLayout>
</template>

<script>
import ChannelDetails from '../page/ChannelDetails'
import AppUserChannels from './AppUserChannels'
import ChannelsNoItems from './ChannelsNoItems'

export default {
  name: 'UserChannels',
  components: {
    'app-user-channels': AppUserChannels,
    'channels-no-items': ChannelsNoItems
  },
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  // computed: {
  //   length () {
  //     return this.channels && this.channels.length
  //   },
  //   channels () {
  //     // console.log('getters.CHANNELS: ')
  //     // console.log(getters.CHANNELS)
  //     // return this.$store.getters[getters.CHANNELS]
  //   }
  // },
  methods: {
    leave () {
      // TODO CONFIRM DIALOG
      alert('Leaving channel').then(() => {
        console.log('Dialog closed')
        // this.$store.dispatch(actions.LEAVE_CHANNEL, channel)
      })

      // TODO -> Si es confirma vol sortir del canal eliminar de l'storage
    },
    selected (args) {
      console.log('SELECTED!')
      console.log('args:')
      console.log(args)
      this.$navigateTo(ChannelDetails, {
        props: {
          channel: {
            name: 'Channel X'
          }
        }
      })
    }
  }
}
</script>
