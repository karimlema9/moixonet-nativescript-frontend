<template>
  <PageLayout title="Nou Canal" name="NewChannel">
    <channel-info :channel="channel"/>
  </PageLayout>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import ChannelInfo from '../components/ChannelInfo'

export default {
  name: 'ChannelInfoPage',
  components: {
    'channel-info': ChannelInfo
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('ChannelInfoPage')
  },
  methods: {
    indexChange (args) {
      const newIndex = args.value
      console.log('Current tab index: ' + newIndex)
    }
  }
}
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '../../node_modules/@nativescript/theme/scss/variables/ruby';
  // End custom common variables

  // Custom styles
</style>
