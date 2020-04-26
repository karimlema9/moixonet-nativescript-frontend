<template>
  <CardView>
    <GridLayout class="card" rows="auto" columns="auto, *, auto">
      <Image row="0" col="0" :src="getImageUrl(channel)" class="thumb img-rounded m-l-10" />
      <StackLayout row="0" col="1">
        <Label class="list-group-item-heading">{{ channel.name }} ({{ channel.messages_number }})</Label>
        <Label :text="'Subscrit des de ' + channel.created_at" text-wrap="true" class="list-group-item-text" />
      </StackLayout>
      <slot :channel="channel">
        <Button col="2" text="Sortir" @tap="$emit('leaved', channel)" />
      </slot>
    </GridLayout>
  </CardView>
</template>

<script>
import { baseUrl } from '../plugins/axios'
export default {
  name: 'AppChannelCard',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImageUrl (channel) {
      if (channel) {
        return baseUrl + '/channels/published/' + channel.id + '/image'
      }
    }
  }
}
</script>
<style>
.card {
  border: 1px solid black;
}
</style>
