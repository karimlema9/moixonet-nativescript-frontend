<!--<template>-->
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
<!--      <Label class="action-bar-title" text="Browse" />-->
<!--    </ActionBar>-->

<!--    <GridLayout class="page__content">-->
<!--      <Label class="page__content-icon far" text.decode="&#xf1ea;" />-->
<!--      <Label class="page__content-placeholder" :text="message" />-->
<!--    </GridLayout>-->
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
<!--    SelectedPageService.getInstance().updateSelectedPage('Browse')-->
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
  <PageLayout title="Browse" name="Browse">
    <GridLayout class="page__content">
      <Label class="page__content-icon far" text.decode="&#xf1ea;" />
      <Label class="page__content-placeholder" :text="message" />
    </GridLayout>
  </PageLayout>
</template>

<script>
export default {
  computed: {
    message () {
      return '<!-- Page content goes here -->'
    }
  }
}
</script>
