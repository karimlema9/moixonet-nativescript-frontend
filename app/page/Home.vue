<template>
  <PageLayout title="Els meus canals" name="Home">
    <GridLayout class="page__content">
      <template v-if="channels && channels.length > 0">
        <user-channels :channels="channels" />
      </template>
      <template v-else>
        <Label class="page__content-icon fas" text.decode="&#xf0c9;" />
        <Label class="page__content-placeholder" :text="message" />
        <Button class="page__content-cta -primary" automation-text="new_channel_button" text="Nou canal" @tap="newChannel" />
      </template>
      <Fab
        row="1"
        icon="res://baseline_add_white_24"
        ripple-color="#f1f1f1"
        class="fab-button"
        @tap="newChannel"
      />
    </GridLayout>
  </PageLayout>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import UserChannels from '../components/UserChannels'
import * as actions from '../store/action-types'
import NewChannel from './NewChannel'
// import * as utils from '~/shared/utils'

export default {

  components: {
    'user-channels': UserChannels
  },
  computed: {
    message () {
      return 'No esteu subscrit a cap canal'
    },
    channels () {
      return this.$store.getters['localChannels/list']
    }
  },
  // beforeCreate () {
  //   this.$store.dispatch('localChannels/' + actions.LOCAL_CHANNELS_INDEX)
  // },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Home')
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    newChannel () {
      this.$navigateTo(NewChannel)
    },
    async refresh () {
      try {
        // this.$store.commit('axios/' + mutations.SET, { key: 'loading', value: true })
        await this.$store.dispatch('localChannels/' + actions.LOCAL_CHANNELS_INDEX)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '~@nativescript/theme/scss/variables/ruby';
  // End custom common variables

  // Custom styles
  .fab-button {
    height: 70;
    width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
    margin: 15;
    background-color: deeppink;
    horizontal-align: right;
    vertical-align: bottom;
  }
</style>
