<template>
  <StackLayout>
    <RadListView
      ref="listView"
      :items="channels"
      @itemTap="onItemTap"
      :swipe-actions="false"
      :pull-to-refresh="true"
      @pullToRefreshInitiated="onPullToRefreshInitiated"
    >
      <v-template>
        <app-channel-card :channel="item" @leaved="$emit('leaved', $event)"></app-channel-card>
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script>
import AppChannelCard from './AppChannelCard'
export default {
  name: 'AppUserChannels',
  components: {
    'app-channel-card': AppChannelCard
  },
  props: {
    channels: {
      type: Array,
      required: true
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
    onItemTap (event) {
      this.$emit('selected', event.item)
    }
  }
}
</script>
<style>
.card {
  border: 1px solid black;
}
</style>
