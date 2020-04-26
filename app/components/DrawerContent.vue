<template lang="html">
  <GridLayout rows="auto, *" class="nt-drawer__content">
    <StackLayout v-if="loggedIn && user !==null" row="0" class="nt-drawer__header">
      <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;" />
      <Label automation-text="username_label" class="nt-drawer__header-brand" :text="user.name" />
      <Label automation-text="useremail_label" class="nt-drawer__header-footnote" :text="user.email" />
    </StackLayout>
    <StackLayout v-else row="0" class="nt-drawer__header">
      <Button text="Login" @tap="login" />
      <Button text="Register" @tap="register" />
    </StackLayout>
    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout>
        <GridLayout automationText="nav_link_home" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')" @tap="onNavigationItemTap(Home)">
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas" />
          <Label col="1" text="Home" class="p-r-10" />
        </GridLayout>

        <GridLayout automationText="nav_link_search" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'NewChannel' ? ' -selected': '')" @tap="onNavigationItemTap(NewChannel)">
          <Label col="0" text.decode="&#xf002;" class="nt-icon fas" />
          <Label col="1" text="Search" class="p-r-10" />
        </GridLayout>

        <GridLayout automationText="nav_link_proves" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'TestPage' ? ' -selected': '')" @tap="onNavigationItemTap(TestPage)">
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas" />
          <Label col="1" text="Device Info" class="p-r-10" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout automationText="nav_link_settings" columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')" @tap="onNavigationItemTap(Settings)">
          <Label col="0" text.decode="&#xf013;" class="nt-icon fas" />
          <Label col="1" text="Settings" class="p-r-10" />
        </GridLayout>

        <GridLayout v-if="loggedIn && user !==null" automationText="nav_logout" columns="auto, *" class="nt-drawer__list-item" @tap="logout()">
          <Label col="0" text.decode="&#xf013;" class="nt-icon fas" />
          <Label col="1" text="Logout" class="p-r-10" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import * as dialogs from 'tns-core-modules/ui/dialogs'
import url from '@/utils/url'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import ChannelsList from '../pages/ChannelsList'
import NewChannel from '../pages/NewChannel'
import TestPage from '../pages/TestPage'
import * as mutations from '../store/mutation-types'
import * as utils from '~/shared/utils'
import SelectedPageService from '~/shared/selected-page-service'

export default {
  components: {
    Home,
    Settings,
    TestPage,
    NewChannel,
    ChannelsList
  },
  data () {
    return {
      Home,
      Settings,
      TestPage,
      NewChannel,
      ChannelsList,
      selectedPage: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters['auth/loggedIn']
    },
    user () {
      return this.$store.getters['auth/user']
    }
  },
  mounted () {
    SelectedPageService.getInstance().selectedPage$
      .subscribe((selectedPage) => { this.selectedPage = selectedPage })
  },
  methods: {
    onNavigationItemTap (component) {
      this.$navigateTo(component, {
        clearHistory: true
      })
      utils.closeDrawer()
    },
    login () {
      dialogs.login({
        title: 'login',
        cancelButtonText: 'cancel',
        okButtonText: 'login',
        userName: 'Nom Usuari',
        password: 'Contrasenya'
      }).then((r) => {
        if (r.result) {
          this.$store.commit('auth/' + mutations.SET, { key: 'loggedIn', value: true })
          this.$store.commit('auth/' + mutations.SET, { key: 'user', value: { name: r.userName, email: r.userName } })
        } else {

        }
      })
    },
    logout () {
      dialogs.confirm({
        title: 'Logout',
        message: 'segur que vols tancar la sessió?',
        okButtonText: 'Si, pesat',
        cancelButtonText: 'Ups, m\'he equivocat jeje'
      }).then((result) => {
        if (result) {
          this.$store.commit('auth/' + mutations.SET, { key: 'loggedIn', value: false })
          this.$store.commit('auth/' + mutations.SET, { key: 'user', value: null })
        }
      })
    },
    register () {
      url.open('https://moixonet.karimlema9.scool.cat/register')
      // url.open('https://moixonet.jotaela.scool.cat/register')
    }
  }
}
</script>

<style scoped lang="scss">

  .nt-drawer__header {
    background-color: const(blue);
  }
</style>
