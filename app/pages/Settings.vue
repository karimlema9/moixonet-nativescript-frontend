<!--<template>-->
<!--  <PageLayout title="Settings" name="Settings">-->
<!--    <ScrollView>-->
<!--      <StackLayout>-->
<!--        <GridLayout col="*, auto">-->
<!--          <Label class="item-text" col="0" verticalAlignment="center" text="Dark Mode"></Label>-->
<!--          <Switch col="1" v-model="darkmode"></Switch>-->
<!--        </GridLayout>-->
<!--      </StackLayout>-->
<!--    </ScrollView>-->
<!--  </PageLayout>-->
<!--</template>-->

<!--<script>-->
<!--import Theme from '@nativescript/theme'-->
<!--import SelectedPageService from '../shared/selected-page-service'-->
<!--import * as utils from '~/shared/utils'-->

<!--export default {-->
<!--  computed: {-->
<!--    message () {-->
<!--      return '&lt;!&ndash; Page content goes here &ndash;&gt;'-->
<!--    }-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      darkmode: true-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    SelectedPageService.getInstance().updateSelectedPage('Settings')-->
<!--  },-->
<!--  watch: {-->
<!--    darkmode: () => {-->
<!--      Theme.toggleMode()-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onDrawerButtonTap () {-->
<!--      utils.showDrawer()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.item-text {-->
<!--  margin-left: 50;-->
<!--  font-size: 17;-->
<!--}-->
<!--</style>-->
<template>
  <PageLayout title="Settings" name="Settings">
    <GridLayout rows="auto, *" class="nt-drawer__content sep">
      <ScrollView row="1" class="nt-drawer__body">
        <StackLayout>
          <label col="0" verticalAlignment="center" class="title">Notifications</label>
          <GridLayout
            columns="auto, *"
          >
            <Label col="1" vertical-alignment="center" text="Activar notificacions" />
            <Switch col="2" horizontal-alignment="right" class="p-r-10" />
          </GridLayout>
          <GridLayout
            columns="auto, *"
          >
            <Label col="1" vertical-alignment="center" text="Silenciar notificacions" />
            <Switch col="2" horizontal-alignment="right" class="p-r-10" />
          </GridLayout>
          <GridLayout
            columns="auto, *"
            class="separator"
          >
            <Label col="1" vertical-alignment="center" text="Só de notificacions" />
          </GridLayout>
          <GridLayout
            columns="auto, *"
            class="separator"
          >
            <Label col="1" vertical-alignment="center" text="Notificació de prova" />
          </GridLayout>

          <label col="1" verticalAlignment="center" class="title">General</label>
          <GridLayout
            columns="auto, *"
          >
            <Label col="4" vertical-alignment="center" text="Dark Mode" />
            <Switch
              v-model="checked"
              property-change="switchPropertyChange"
              checked="false"
              col="5"
              horizontal-alignment="right"
              class="p-r-10"
            />
          </GridLayout>
          <GridLayout
            columns="auto, *"
            class="separator"
          >
            <Label col="1" vertical-alignment="center" text="Confirma per eliminar" />
          </GridLayout>
          <GridLayout
            columns="auto, *"
          >
            <Label col="1" vertical-alignment="center" text="Vibració" />
            <Switch col="2" horizontal-alignment="right" class="p-r-10" />
          </GridLayout>

          <label col="2" verticalAlignment="center" class="title">About me</label>
          <GridLayout
            columns="auto, *"
          >
            <Label col="7" vertical-alignment="center" text="Info" />
          </GridLayout>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </PageLayout>
</template>
<script>
import Theme from 'nativescript-theme-core'
import { Observable } from 'tns-core-modules/data/observable'
// eslint-disable-next-line no-unused-vars
const observableObject = new Observable()
export default {
  data () {
    return {
      checked: true
    }
  },
  computed: {
    message () {
      return '<!-- Page content goes here -->'
    }
  },
  watch: {
    // whenever checked changes, this function will run
    checked (val) {
      if (val) {
        Theme.setMode(Theme.Light)
        console.log('Light')
      } else Theme.setMode(Theme.Dark)
      console.log('Dark')
    }
  }
}
</script>

<style>
  .sep {
    margin: 25px 50px 75px;
  }

  .separator {
    margin-bottom: 30px;
  }
</style>
