<template>
  <GridLayout class="page__content">
    <RadListView
      v-if="messages && messages.length > 0"
      ref="listViewMessages"
      for="message in messages"
      :swipe-actions="false"
      :pull-to-refresh="true"
      @pullToRefreshInitiated="onPullToRefreshInitiated"
    >
      <v-template>
        <CardView class="card">
          <StackLayout row="0" col="1">
            <Label class="list-group-item-heading">{{ message.title }}</Label>
            <Label :text="'publicat el dia ' + message.created_at" text-wrap="true" class="list-group-item-text" />
            <Label :text="message.description" text-wrap="true" />
          </StackLayout>
        </CardView>
      </v-template>
    </RadListView>
    <template v-else>
      <Label class="page__content-icon fas" text.decode="&#xf0c9;" />
      <Label class="page__content-placeholder" textAlignment="center" :text="'Actualment el canal ' + channel.name + ' no te cap missatge agregat'" textWrap="true" />
    </template>
  </GridLayout>
</template>

<script>

export default {
  name: 'AppMessagesList',
  props: {
    messages: {
      type: Array,
      required: true
    },
    channel: {
      type: Object,
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
    }
  }
}
</script>

<style>
.card {
  margin: 5px;
}
</style>
