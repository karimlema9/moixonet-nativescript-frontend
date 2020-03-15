
<!--&lt;!&ndash;suppress ES6ModulesDependencies, SpellCheckingInspection &ndash;&gt;-->
<!--<template-->
<!--  xmlns:android="http://schemas.android.com/apk/res/android"-->
<!--  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"-->
<!--  xsi:schemaLocation="http://schemas.android.com/apk/res/android "-->
<!--&gt;-->
<!--  <Page class="page">-->
<!--    <ActionBar class="action-bar">-->
<!--      <NavigationButton-->
<!--        text="hamburguer_icon"-->
<!--        ios:visibility="collapsed"-->
<!--        icon="res://menu"-->
<!--        @tap="onDrawerButtonTap"-->
<!--      />-->
<!--      <NavigationButton text="Go Back" android-system-icon="ic_menu_back" @tap="$navigateBack" />-->
<!--      <ActionItem-->
<!--        icon="res://menu"-->
<!--        text="hamburguer_icon"-->
<!--        android:visibility="collapsed"-->
<!--        ios.position="left"-->
<!--        @tap="$navigateBack"-->
<!--      />-->
<!--      <TextField-->
<!--        v-model="channel"-->
<!--        hint="Canal..."-->
<!--        @textChange="onTextChange"-->
<!--        @focus="onFocus"-->
<!--        @blur="onBlur"-->
<!--        @returnPress="onReturnPress"-->
<!--      />-->
<!--    </ActionBar>-->

<!--    <GridLayout class="page__content">-->
<!--      {{ channels.length }}-->
<!--      <Label v-if="channels.length === 0" class="page__content-placeholder" :text="message" />-->
<!--      <RadListView-->
<!--        v-else-->
<!--        ref="listView"-->
<!--        :pull-to-refresh="true"-->
<!--        for="channel in channels"-->
<!--        @itemTap="onItemTap"-->
<!--        @pullToRefreshInitiated="onPullToRefreshInitiated"-->
<!--      >-->
<!--        <v-template>-->
<!--          <StackLayout class="item" orientation="vertical">-->
<!--            <Label :text="channel.name" class="nameLabel" />-->
<!--          </StackLayout>-->
<!--        </v-template>-->
<!--      </RadListView>-->
<!--      &lt;!&ndash;            TODO PUBLISHED CHANNELS LIST AND FILTERED&ndash;&gt;-->
<!--    </GridLayout>-->
<!--  </Page>-->
<!--</template>-->

<!--<script>-->
<!--import * as utils from '~/shared/utils'-->

<!--export default {-->
<!--  name: 'NewChannel',-->
<!--  data () {-->
<!--    return {-->
<!--      channel: '',-->
<!--      channels: [-->
<!--        {-->
<!--          id: 1,-->
<!--          name: 'Canal 1'-->
<!--        },-->
<!--        {-->
<!--          id: 2,-->
<!--          name: 'Canal 2'-->
<!--        },-->
<!--        {-->
<!--          id: 3,-->
<!--          name: 'Canal 3'-->
<!--        },-->
<!--        {-->
<!--          id: 4,-->
<!--          name: 'Canal 4'-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    channelsCount () {-->
<!--      return this.channels.length-->
<!--    },-->
<!--    message () {-->
<!--      return "No s'ha trobat cap canal!"-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onDrawerButtonTap () {-->
<!--      utils.showDrawer()-->
<!--    },-->
<!--    onPullToRefreshInitiated ({ object }) {-->
<!--      console.log('REFRESHING!!!!!!!!...')-->
<!--      // in order to avoid race conditions (only on iOS),-->
<!--      // in which the UI may not be completely updated here-->
<!--      // we use this.$nextTick call-->
<!--      setTimeout(function () {-->
<!--        this.$nextTick(() => {-->
<!--          this.channels.push({-->
<!--            id: 99,-->
<!--            name: 'Berry'-->
<!--          })-->
<!--          object.notifyPullToRefreshFinished()-->
<!--        })-->
<!--      }, 2000)-->
<!--    },-->
<!--    onItemTap ({ item }) {-->
<!--      console.log('onItemTap')-->
<!--      console.log(item)-->
<!--      console.log(`Tapped on ${item.name}`)-->
<!--    },-->
<!--    onFocus () {-->
<!--      console.log('FOCUS!')-->
<!--    },-->
<!--    onBlur () {-->
<!--      console.log('BLUR!')-->
<!--    },-->
<!--    onTextChange () {-->
<!--      console.log('TEXT CHANGED!')-->
<!--    },-->
<!--    onReturnPress () {-->
<!--      console.log('RETURN PRESSED!')-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  // Start custom common variables-->
<!--  @import '~@nativescript/theme/scss/variables/ruby';-->
<!--  // End custom common variables-->

<!--  /*// Custom styles*/-->
<!--  /*grid-layout{*/-->
<!--  /*  font-size: 25*/-->
<!--  /*}*/-->
<!--</style>-->

<!--suppress ES6ModulesDependencies, SpellCheckingInspection, HtmlUnknownAttribute -->
<!--<template>-->
<!--  <PageLayout title="Nou Canal" name="Home">-->
<!--    <GridLayout class="page__content">-->
<!--      <SearchBar hint="Search hint" :text="channel" @textChange="onTextChanged" @returnPress="onReturnPress" @submit="onSubmit" />-->
<!--      <published-channels />-->
<!--    </GridLayout>-->
<!--  </PageLayout>-->
<!--</template>-->

<!--<script>-->
<!--import PublishedChannels from '../components/PublishedChannels'-->
<!--export default {-->
<!--  name: 'NewChannel',-->
<!--  components: {-->
<!--    'published-channels': PublishedChannels-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      channel: ''-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    message () {-->
<!--      return "No s'ha trobat cap canal!"-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onSubmit () {-->
<!--      console.log('ON SUBMIT!')-->
<!--    },-->
<!--    onTextChanged () {-->
<!--      console.log('TEXT CHANGED!')-->
<!--    },-->
<!--    onReturnPress () {-->
<!--      console.log('RETURN PRESSED!')-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <PageLayout title="Nou Canal" name="NewChannel">
    <StackLayout padding="5">
      <Label text="Busca un Canal:" />
      <RadAutoCompleteTextView
        ref="autocomplete"
        display-mode="plain"
        suggest-mode="Suggest"
        :items="dataItems"
      >
        <SuggestionView -suggestion-view suggestion-view-height="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <Label :text="item.text" />
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
    </StackLayout>
  </PageLayout>
</template>

<script>
import { ObservableArray } from 'tns-core-modules'

export default {
  name: 'NewChannel',
  data () {
    return {
      title: 'Aeroports',
      dataItems: new ObservableArray()
    }
  },
  mounted () {
    const jsonUrl = 'https://raw.githubusercontent.com/NativeScript/nativescript-ui-samples/master/examples-data/airports.json'
    this.$refs.autocomplete.setLoadSuggestionsAsync((text) => {
      const promise = new Promise((resolve, reject) => {
        http.getJSON(jsonUrl).then((r) => {
          const airportsCollection = r.airports
          const items = new Array()
          for (let i = 0; i < airportsCollection.length; i++) {
            items.push(new TokenModel(airportsCollection[i].FIELD2, null))
          }
          resolve(items)
        }).catch((err) => {
          const message = `Error fetching remote data from ${jsonUrl}: ${err.message}`
          console.log(message)
          alert(message)
          reject()
        })
      })

      return promise
    })
  },
  methods: {
    onNavigationButtonTap () {
      Frame.topmost().goBack()
    }
  }
}
</script>
