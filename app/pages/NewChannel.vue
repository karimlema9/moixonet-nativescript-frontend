<!--suppress ES6ModulesDependencies, SpellCheckingInspection, HtmlUnknownAttribute -->
<template>
  <PageLayout title="Nou Canal" name="NewChannel">
    <StackLayout height="800">
      <TextField v-model="textToSearch" hint="Enter text to search..." @textChange="search" @returnPress="search" />
      <ListView for="foundChannel in foundChannels">
        <v-template>
          <app-channel-card :channel="foundChannel">
            <template v-slot:default="props">
              <Button col="2" text="Info" @tap="info(props.channel)" />
            </template>
          </app-channel-card>
        </v-template>
      </ListView>
    </StackLayout>
  </PageLayout>
</template>

<script>
// import { SnackBar } from 'nativescript-material-snackbar'
import * as actions from '../store/action-types'
import AppChannelCard from '../components/AppChannelCard'
import api from '../api/publishedChannels'
import ChannelInfoPage from './ChannelInfoPage'
import SelectedPageService from "../shared/selected-page-service";

// const snackbar = new SnackBar()
const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this; const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) { func.apply(context, args) }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) { func.apply(context, args) }
  }
}

export default {
  name: 'NewChannel',
  components: {
    'app-channel-card': AppChannelCard
  },
  data () {
    return {
      textToSearch: '',
      foundChannels: []
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('NewChannel')
  },
  methods: {
    async search () {
      try {
        if (this.textToSearch === '') { return }
        const response = await api.search(this.textToSearch)
        if (response) { this.foundChannels = response }
      } catch (error) {
        console.log(error)
      }
    },
    info (item) {
      console.log(item)
      this.$navigateTo(ChannelInfoPage, {
        props: {
          channel: item
        }
      })
    },
    onClick () {
      console.log('click')
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
