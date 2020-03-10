<!--<template>-->
<!--  <app-user-channels :channels="channels" @leave="leave" @selected="selected" />-->
<!--</template>-->

<!--<script>-->
<!--import ChannelDetails from '../page/ChannelDetails'-->
<!--import AppUserChannels from './AppUserChannels'-->
<!--export default {-->
<!--  name: 'UserChannels',-->
<!--  components: {-->
<!--    'app-user-channels': AppUserChannels-->
<!--  },-->
<!--  props: {-->
<!--    channels: {-->
<!--      type: Array,-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    leave () {-->
<!--      // TODO CONFIRM DIALOG-->
<!--      alert('Leaving channel').then(() => {-->
<!--        console.log('Dialog closed')-->
<!--      })-->

<!--      // TODO -> Si es confirma vol sortir del canal eliminar de l'storage-->
<!--    },-->
<!--    selected (args) {-->
<!--      console.log('SELECTED!')-->
<!--      console.log('args:')-->
<!--      console.log(args)-->
<!--      this.$navigateTo(ChannelDetails, {-->
<!--        props: {-->
<!--          channel-->
<!--        }-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <StackLayout>
    <template v-if="length > 0">
      <app-user-channels :channels="channels" @leave="leave" @selected="selected" />
    </template>
    <channels-no-items v-else />
  </StackLayout>
</template>

<script>
import ChannelDetails from '../page/ChannelDetails'
import * as getters from '../store/getter-types'
import ChannelsNoItems from './ChannelsNoItems'
import AppUserChannels from './AppUserChannels'

export default {
  name: 'UserChannels',
  components: {
    'app-user-channels': AppUserChannels,
    'channels-no-items': ChannelsNoItems
  },
  computed: {
    length () {
      return this.channels && this.channels.length
    },
    channels () {
      // console.log('getters.CHANNELS: ')
      // console.log(getters.CHANNELS)
      return this.$store.getters[getters.CHANNELS]
    }
  },
  methods: {
    leave (channel) {
      // this.$store.dispatch(actions.LEAVE_CHANNEL, channel)
    },
    selected (channel) {
      this.$navigateTo(ChannelDetails, {
        props: {
          channel
        }
      })
    }
  }
}
</script>
