<template>
  <app-channel-settings
    @notifications="notifications"
    @tags="tags"
    @sentMessage="sendNessage"
    @removedMessages="removeNessages"/>
</template>

<script>
import AppChannelSettings from './AppChannelSettings'

export default {
  name: 'UserChannels',
  components: {
    'app-channel-settings': AppChannelSettings
  },
  methods: {
    notifications () {
      console.log('notifications')
    },
    tags () {
      console.log('tags')
    },
    sendNessage () {
      console.log('sendNessage')
    },
    removeNessages () {
      console.log('removeNessages')
    }
  }
}
</script>
