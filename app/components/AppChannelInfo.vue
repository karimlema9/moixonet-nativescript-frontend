<template>
  <GridLayout columns="120, *" rows="120, *, auto" class="info-layout">
    <Image col="0" row="0" :src="getImageUrl(channel)" stretch="fill" class="thumb img-rounded" />
    <Label col="1" row="0" :text="channel.name" class="title" />
    <Label
      col="0"
      row="1"
      :text="channel.description"
      textWrap="true"
      colSpan="3"
      class="description"
    />
    <Button
      v-if="suscribed"
      col="1"
      row="2"
      text="Sortir"
      class="leave"
      backgroundColor="red"
      @tap="$emit('leaved', channel)" />
    <Button
      v-else
      col="1"
      row="2"
      text="Entrar"
      @tap="$emit('joined', channel)"
    />
  </GridLayout>
</template>

<script>
import { baseUrl } from '../plugins/axios'

export default {
  name: 'AppChannelInfo',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  created () {
    this.suscribed = this.isSucribed()
  },
  data () {
    return {
      suscribed: false
    }
  },
  computed: {
    channels () {
      return this.$store.getters['localChannels/list']
    }
  },
  methods: {
    onSwipeStarted () {
      confirm('dasdas').then(() => {
        console.log('sips')
      }, () => {
        console.log('nope')
      })
    },
    async onPullToRefreshInitiated ({ object }) {
      await this.refresh()
      object.notifyPullToRefreshFinished()
    },
    refresh () {
      console.log('refresh')
    },
    getImageUrl (channel) {
      if (channel) {
        return baseUrl + '/channels/published/' + channel.id + '/image'
      }
    },
    isSucribed () {
      for (let i = 0; i < this.channels.length; i++) {
        if (parseFloat(this.channels[i].id) === parseFloat(this.channel.id)) {
          return true
        }
      }
      console.log('adios')
      return false
    }
  }
}
</script>

<style>
.info-layout {
  margin: 10px;
}
.info-layout * {
  margin: 20px;
}
.title {
  font-size: 30px;
}
.description {
  font-size: 17px;
}
</style>
