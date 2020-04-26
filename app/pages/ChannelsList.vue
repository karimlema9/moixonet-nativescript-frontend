<template>
  <PageLayout title="CANALS PROVA" name="ChannelsList">
    <GridLayout>
      <StackLayout>
        <Button text="Refresh" @tap="refresh" />
        <Button text="loading" @tap="load" />
        <Button text="unloading" @tap="unload" />
        <Button text="snackbar 1" @tap="showSimpleSnackbar" />
        <Button text="snackbar 2" @tap="showActionSnackbar" />
        <Button text="snackbar 3" @tap="showColorfulSnackbar" />
        <Label> Loading: {{ loading ? 'True': 'False' }}</Label>
        <RadListView
          ref="listView"
          for="channel in channels"
          :swipeActions="true"
          :pullToRefresh="true"
          @itemTap="onItemTap"
          @itemSwipeProgressStarted="onSwipeStarted"
          @pullToRefreshInitiated="onPullToRefreshInitiated"
        >
          <v-template>
            <StackLayout class="item p-t-10" orientation="vertical">
              <Label class="nameLabel">{{ channel.name }}</Label>
            </StackLayout>
          </v-template>

          <v-template name="itemswipe">
            <GridLayout columns="auto, *, auto" background-color="White">
              <StackLayout
                id="mark-view"
                col="0"
                class="swipe-item left"
                orientation="horizontal"
                @tap="onLeftSwipeClick"
              >
                <Label text="mark" vertical-alignment="center" horizontal-alignment="center" />
              </StackLayout>
              <StackLayout
                id="delete-view"
                col="2"
                class="swipe-item right"
                orientation="horizontal"
                @tap="onRightSwipeClick"
              >
                <Label text="delete" vertical-alignment="center" horizontal-alignment="center" />
              </StackLayout>
            </GridLayout>
          </v-template>
        </RadListView>
      </StackLayout>
      <GridLayout v-if="loading">
        <Label class="overlay" />
        <ActivityIndicator class="indicator" :busy="loading" />
      </GridLayout>
    </GridLayout>
  </PageLayout>
</template>

<script>
import { SnackBar } from 'nativescript-material-snackbar'
import SelectedPageService from '../shared/selected-page-service'
import * as mutations from '../store/mutation-types'
import * as actions from '../store/action-types'
import * as utils from '~/shared/utils'

const snackbar = new SnackBar()

export default {
  name: 'ChannelsList',
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('ChannelsList')
  },
  computed: {
    loading () {
      return this.$store.getters['axios/loading']
    },
    channels () {
      return this.$store.getters['channels/list']
    }
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    onItemTap () {
      console.log('ITEM TAP!')
    },
    unload () {
      this.$store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
    },
    load () {
      this.$store.commit('axios/' + mutations.SET, { key: 'loading', value: true })
    },
    showSimpleSnackbar () {
      snackbar.simple('I\'m a simple snackbar').then(result => console.log('Simple Snackbar:', result))
    },
    showActionSnackbar () {
      snackbar
        .action({
          message: 'I\'m a snackbar with an action',
          actionText: 'Dismiss',
          hideDelay: 2000
        })
        .then(result => console.log('Action Snackbar:', result))
    },
    showColorfulSnackbar () {
      snackbar
        .action({
          message: 'I\'m a colorful snackbar',
          textColor: 'blue',
          actionTextColor: 'yellow',
          backgroundColor: 'green',
          actionText: 'Dismiss',
          hideDelay: 2000
        })
        .then(result => console.log('Action Snackbar:', result))
    },
    async refresh () {
      try {
        await this.$store.dispatch('channels/' + actions.CHANNELS_INDEX)
      } catch (error) {
        console.log(error)
      }
    },
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
    }
  }
}
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '~@nativescript/theme/scss/variables/ruby';
  // End custom common variables

  // Custom styles
</style>
