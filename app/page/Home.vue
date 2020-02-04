<!--&lt;!&ndash;suppress HtmlUnknownTag &ndash;&gt;-->
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

<!--      <ActionItem-->
<!--        icon="res://menu"-->
<!--        text="hamburguer_icon"-->
<!--        android:visibility="collapsed"-->
<!--        ios.position="left"-->
<!--        @tap="onDrawerButtonTap"-->
<!--      />-->
<!--      <Label class="action-bar-title" automation-text="action_bar_label" text="Els meus canals" />-->
<!--    </ActionBar>-->

<!--    <GridLayout class="page__content">-->
<!--      <template v-if="channels.length > 0">-->
<!--        <user-channels :channels="channels" />-->
<!--        <Button class="page__content-cta -primary" automation-text="new_channel_button" text="Eliminar tots els canals " @tap="removeAll" />-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        <Label class="page__content-icon fas" text.decode="&#xf2bb;" />-->
<!--        <Label class="page__content-placeholder" :text="message" />-->
<!--        <Button class="page__content-cta -primary" automation-text="new_channel_button" text="Nou canal" @tap="newChannel" />-->
<!--        <GridLayout rows="auto" columns="*, *">-->
<!--          <Button text="Nou canal sample" @tap="newSampleChannel" />-->
<!--          <Button col="2" text="Omplir amb canals exemple" @tap="newSampleChannels" />-->
<!--        </GridLayout>-->
<!--      </template>-->

<!--      <Fab-->
<!--        row="1"-->
<!--        icon="res://baseline_add_white_24"-->
<!--        ripple-color="#F1C40F"-->
<!--        class="fab-button"-->
<!--        @tap="newChannel"-->
<!--      />-->
<!--    </GridLayout>-->
<!--  </Page>-->
<!--</template>-->

<!--<script>-->
<!--import SelectedPageService from '../shared/selected-page-service'-->
<!--import UserChannels from '../components/UserChannels'-->
<!--import channelsData from '../data/channels.json'-->
<!--import NewChannel from './NewChannel'-->
<!--import * as utils from '~/shared/utils'-->

<!--export default {-->
<!--  components: {-->
<!--    'user-channels': UserChannels-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      channels: channelsData-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    message () {-->
<!--      return 'No esteu subscrit a cap canal'-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    SelectedPageService.getInstance().updateSelectedPage('Home')-->
<!--  },-->
<!--  methods: {-->
<!--    onDrawerButtonTap () {-->
<!--      utils.showDrawer()-->
<!--    },-->
<!--    newChannel () {-->
<!--      this.$navigateTo(NewChannel)-->
<!--    },-->
<!--    newSampleChannel () {-->
<!--      this.channels.push({-->
<!--        id: 1,-->
<!--        name: 'Canal exemple',-->
<!--        created_at: 'Fa 1 segon'-->
<!--      })-->
<!--    },-->
<!--    newSampleChannels () {-->
<!--      console.log('newSamplesChannel!!!!!!!!!')-->
<!--      this.channels = channelsData-->
<!--    },-->
<!--    removeAll () {-->
<!--      // TODO CONFIRM-->
<!--      this.channels = []-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  // Start custom common variables-->
<!--  @import '~@nativescript/theme/scss/variables/ruby';-->
<!--  // End custom common variables-->

<!--  // Custom styles-->
<!--  .fab-button {-->
<!--    height: 70;-->
<!--    width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles-->
<!--    margin: 15;-->
<!--    background-color: #F1C40F;-->
<!--    horizontal-align: right;-->
<!--    vertical-align: bottom;-->
<!--  }-->

<!--  /*@media screen and (max-width: 480px) {*/-->
<!--  /*  grid-layout{*/-->
<!--  /*    font-size: 10*/-->
<!--  /*  }*/-->
<!--  /*}*/-->

<!--    grid-layout{-->
<!--      font-size: 20-->
<!--    }-->

<!--  /*@media screen and (max-width: 720px) {*/-->
<!--  /*  grid-layout{*/-->
<!--  /*    font-size: 25*/-->
<!--  /*  }*/-->
<!--  /*}*/-->

<!--</style>-->

<!--suppress HtmlUnknownTag -->
<template>
  <PageLayout title="Els meus canals" name="Home">
    <GridLayout class="page__content">
      <template v-if="channels.length > 0">
        <user-channels :channels="channels" />
        <Button class="page__content-cta c-bg-ruby" automation-text="new_channel_button" text="Eliminar tots els canals " @tap="removeAll" />
      </template>
      <template v-else>
        <Label class="page__content-icon fas" text.decode="&#xf0c9;" />
        <Label class="page__content-placeholder" :text="message" />
        <Button class="page__content-cta -primary" automation-text="new_channel_button" text="Nou canal" @tap="newChannel" />
        <GridLayout rows="auto" columns="*,*">
          <Button col="0" text="Nou canal sample" @tap="newSampleChannel" />
          <Button col="1" text="Omplir amb canals exemple" @tap="newSampleChannels" />
        </GridLayout>
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
import UserChannels from '../components/UserChannels'
import channelsData from '../data/channels.json'
import NewChannel from './NewChannel'

export default {
  components: {
    'user-channels': UserChannels
  },
  data () {
    return {
      channels: channelsData
    }
  },
  computed: {
    message () {
      return 'No esteu subscrit a cap canal'
    }
  },
  methods: {
    newChannel () {
      this.$navigateTo(NewChannel)
    },
    newSampleChannel () {
      this.channels.push({
        id: 1,
        name: 'Canal exemple',
        created_at: 'Fa 1 segon'
      })
    },
    newSampleChannels () {
      this.channels = channelsData
    },
    removeAll () {
      // TODO CONFIRM
      this.channels = []
    }
  }
}
</script>

<style scoped lang="scss">
  // Custom styles
  .fab-button {
    height: 70;
    width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
    margin: 15;
    background-color: #ff4081;
    horizontal-align: right;
    vertical-align: bottom;
  }
</style>
