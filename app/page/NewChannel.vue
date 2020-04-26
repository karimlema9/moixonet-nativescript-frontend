<!--<template>-->
<!--  <PageLayout title="Nou Canal" name="NewChannel">-->
<!--    <StackLayout padding="5">-->
<!--      <Label text="Busca un Canal:" />-->
<!--      <RadAutoCompleteTextView-->
<!--        ref="autocomplete"-->
<!--        display-mode="plain"-->
<!--        suggest-mode="Suggest"-->
<!--        :items="dataItems"-->
<!--      >-->
<!--        <SuggestionView -suggestion-view suggestion-view-height="300">-->
<!--          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">-->
<!--            <v-template>-->
<!--              <Label :text="item.text" />-->
<!--            </v-template>-->
<!--          </StackLayout>-->
<!--        </SuggestionView>-->
<!--      </RadAutoCompleteTextView>-->
<!--    </StackLayout>-->
<!--  </PageLayout>-->
<!--</template>-->

<!--<script>-->
<!--import { ObservableArray } from 'tns-core-modules'-->

<!--export default {-->
<!--  name: 'NewChannel',-->
<!--  data () {-->
<!--    return {-->
<!--      title: 'Aeroports',-->
<!--      dataItems: new ObservableArray()-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    const jsonUrl = 'https://raw.githubusercontent.com/NativeScript/nativescript-ui-samples/master/examples-data/airports.json'-->
<!--    this.$refs.autocomplete.setLoadSuggestionsAsync((text) => {-->
<!--      const promise = new Promise((resolve, reject) => {-->
<!--        http.getJSON(jsonUrl).then((r) => {-->
<!--          const airportsCollection = r.airports-->
<!--          const items = new Array()-->
<!--          for (let i = 0; i < airportsCollection.length; i++) {-->
<!--            items.push(new TokenModel(airportsCollection[i].FIELD2, null))-->
<!--          }-->
<!--          resolve(items)-->
<!--        }).catch((err) => {-->
<!--          const message = `Error fetching remote data from ${jsonUrl}: ${err.message}`-->
<!--          console.log(message)-->
<!--          alert(message)-->
<!--          reject()-->
<!--        })-->
<!--      })-->

<!--      return promise-->
<!--    })-->
<!--  },-->
<!--  methods: {-->
<!--    onNavigationButtonTap () {-->
<!--      Frame.topmost().goBack()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

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
import * as actions from '../store/action-types'
import AppChannelCard from '../components/AppChannelCard'
import api from '../store/api/channelsPublished'
import SelectedPageService from '../shared/selected-page-service'
import ChannelInfoPage from './ChannelInfoPage'

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
