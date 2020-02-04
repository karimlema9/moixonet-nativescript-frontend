<!--<template>-->
<!--  <Page class="page">-->
<!--    <ActionBar class="action-bar">-->
<!--      &lt;!&ndash;-->
<!--            Use the NavigationButton as a side-drawer button in Android-->
<!--            because ActionItems are shown on the right side of the ActionBar-->
<!--            &ndash;&gt;-->
<!--      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />-->
<!--      &lt;!&ndash;-->
<!--            Use the ActionItem for IOS with position set to left. Using the-->
<!--            NavigationButton as a side-drawer button in iOS is not possible,-->
<!--            because its function is to always navigate back in the application.-->
<!--            &ndash;&gt;-->
<!--      <ActionItem-->
<!--        icon="res://menu"-->
<!--        android:visibility="collapsed"-->
<!--        ios.position="left"-->
<!--        @tap="onDrawerButtonTap"-->
<!--      />-->
<!--      <Label class="action-bar-title" text="Settings" />-->
<!--    </ActionBar>-->

<!--    <StackLayout width="auto" height="auto">-->
<!--      <Label text="Dark Mode" />-->
<!--      <Switch checked="true" -checked-change-="onCheckedChange($event)" />-->
<!--    </StackLayout>-->

<!--&lt;!&ndash;        <GridLayout class="page__content">&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;      <Label class="page__content-icon fas" text.decode="&#xf013;" />&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;      <Label class="page__content-placeholder" :text="message" />&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          <Label text="Label 4" row="1" col="1" backgroundColor="yellow"/>&ndash;&gt;-->
<!--&lt;!&ndash;          <Switch checked="true" -checked-change-="onCheckedChange($event)"/>&ndash;&gt;-->
<!--&lt;!&ndash;        </GridLayout>&ndash;&gt;-->
<!--  </Page>-->
<!--</template>-->

<!--<script>-->
<!--import SelectedPageService from '../shared/selected-page-service'-->
<!--import * as utils from '~/shared/utils'-->

<!--export default {-->
<!--  computed: {-->
<!--    message () {-->
<!--      return '&lt;!&ndash; Page content goes here &ndash;&gt;'-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    SelectedPageService.getInstance().updateSelectedPage('Settings')-->
<!--  },-->
<!--  methods: {-->
<!--    onDrawerButtonTap () {-->
<!--      utils.showDrawer()-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--    // Start custom common variables-->
<!--    @import '../../node_modules/@nativescript/theme/scss/variables/ruby';-->
<!--    // End custom common variables-->

<!--    // Custom styles-->
<!--</style>-->

<template>
  <PageLayout title="Settings" name="Settings">
    <!--    <StackLayout>-->
    <!--      <label text="General" class="font-weight-bold" />-->
    <!--      <GridLayout rows="auto" columns="auto, *, auto">-->
    <!--        <StackLayout col="0">-->
    <!--          <Label text="Dark Mode" />-->
    <!--        </StackLayout>-->
    <!--        <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />-->
    <!--      </GridLayout>-->
    <!--      &lt;!&ndash;      asdasd&ndash;&gt;-->
    <!--      <label text="Notificacions" class="font-weight-bold" />-->
    <!--      <GridLayout rows="auto" columns="auto, *, auto">-->
    <!--        <StackLayout row="0" col="0">-->
    <!--          <Label text="Activat Notificacions" />-->
    <!--        </StackLayout>-->
    <!--        <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />-->
    <!--        &lt;!&ndash;      asdasdasd&ndash;&gt;-->
    <!--      </GridLayout>-->
    <!--        <label text="Quant a" class="font-weight-bold" />-->
    <!--        <GridLayout rows="auto" columns="auto, *, auto">-->
    <!--          <StackLayout col="0">-->
    <!--            <Label text="Info" />-->
    <!--          </StackLayout>-->
    <!--          <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />-->
    <!--        </GridLayout>-->

    <ListView class="list-group" for="notif in notifications" style="height:1250px" @itemTap="onItemTap">
      <v-template>
        <FlexboxLayout flex-direction="row" class="list-group-item">
          <Label :text="notif.name" class="list-group-item-heading" style="width: 60%" />
          <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />
        </FlexboxLayout>
      </v-template>
    </ListView>

    <!--    </StackLayout>-->
  </PageLayout>
</template>
<!--    - [ ] Activar/desactivar notificacions-->
<!--    - [ ] Silenci notificacions-->
<!--    - [ ] Vibració-->
<!--    - [ ] Poder escollir só de la notificació-->
<!--    - [ ] Enviar notificació de prova/comprovar notificacions-->
<script>
export default {
  data () {
    return {
      notifications: [
        { name: 'Activar' },
        { name: 'Silenciar' },
        { name: 'Vibració' },
        { name: 'Só notificació' },
        { name: 'Notificació de Prova' }
      ]
    }
  },

  computed: {
    message () {
      return '<!-- Page content goes here -->'
    }
  },
  methods: {
    onItemTap (args) {
      console.log('Item with index: ' + args.index + ' tapped')
    }
  }

}
</script>
