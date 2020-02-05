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
    <!--    <StackLayout orientation="vertical" background-color="lightgray">-->
    <!--      <Label text="Label 1"/>-->
    <!--    </StackLayout>-->
    <!--        <ListView class="list-group" for="sett in settings" style="height:1250px" @itemTap="onItemTap">-->
    <!--          <v-template if="sett.group == 'not'">-->
    <!--            <FlexboxLayout flex-direction="row" class="list-group-item">-->
    <!--              <Label :text="sett.name" class="list-group-item-heading" style="width: 60%" />-->
    <!--              <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />-->
    <!--            </FlexboxLayout>-->
    <!--          </v-template>-->
    <!--          <v-template if="sett.group == 'not'">-->
    <!--            <FlexboxLayout flex-direction="row" class="list-group-item">-->
    <!--              <Label :text="sett.name" class="list-group-item-heading" style="width: 60%" />-->
    <!--              <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />-->
    <!--            </FlexboxLayout>-->
    <!--          </v-template>-->
    <!--        </ListView>-->
    <ScrollView>
      <ListView for="sett in settings" class="list-group">
        <v-template if="sett.camp == 'Notification'">
          <label :text="sett.camp" class="font-weight-bold"/>
        </v-template>
        <v-template if="sett.grup == 'not'">
          <GridLayout columns="1/4*, 3/4*">
            <Label :text="sett.name" class="list-group-item-heading" style="width: 60%" />
            <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />
          </GridLayout>
        </v-template>
        <v-template if="sett.camp == 'General'">
          <label :text="sett.camp" class="font-weight-bold"/>
        </v-template>
        <v-template if="sett.grup == 'gen'">
          <GridLayout columns="1/4*, 3/4*">
            <Label :text="sett.name" class="list-group-item-heading" style="width: 60%" />
            <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />
          </GridLayout>
        </v-template>
        <v-template if="sett.camp == 'About me'">
          <label :text="sett.camp" class="font-weight-bold"/>
        </v-template>
        <v-template if="sett.grup == 'about'">
          <GridLayout columns="1/4*, 3/4*">
            <Label :text="sett.name" class="list-group-item-heading" style="width: 60%" />
            <Switch col="2" checked="true" -checked-change-="onCheckedChange($event)" />
          </GridLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </PageLayout>
</template>
<script>
export default {
  data () {
    return {
      settings: [
        { camp: 'Notification' },
        { grup: 'not', name: 'Activar' },
        { grup: 'not', name: 'Silenciar' },
        { grup: 'not', name: 'Vibració' },
        { grup: 'not', name: 'Só notificació' },
        { grup: 'not', name: 'Notificació de Prova' },
        { camp: 'General' },
        { grup: 'gen', name: 'asdasd' },
        { grup: 'gen', name: 'Silenasdasdciar' },
        { grup: 'gen', name: 'Vibrasdasació' },
        { grup: 'gen', name: 'Só noasdastificació' },
        { grup: 'gen', name: 'Notifiasdascació de Prova' },
        { camp: 'About me' },
        { grup: 'about', name: 'asdasd' },
        { grup: 'about', name: 'Silenasdasdciar' },
        { grup: 'about', name: 'Vibrasdasació' },
        { grup: 'about', name: 'Só noasdastificació' },
        { grup: 'about', name: 'Notifiasdascació de Prova' }
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
