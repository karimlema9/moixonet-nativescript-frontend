<template>
  <app-messages-list :messages="messages" :channel="channel" />
</template>

<script>
import AppMessagesList from './AppMessagesList'
import api from '../api/messages'

export default {
  name: 'UserChannels',
  components: {
    'app-messages-list': AppMessagesList
  },
  async created () {
    const messages = await api.index(this.channel)
    this.messages = messages.data
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      messages: []
    }
  }
}

</script>
