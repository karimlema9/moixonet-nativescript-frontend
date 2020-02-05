<template>
  <PageLayout title="Settings" name="Settings">
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
