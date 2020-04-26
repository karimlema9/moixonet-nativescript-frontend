<template>
  <PageLayout :title="channel.name" name="ChannelDetails">
    <Tabs selected-index="0" tabsPosition="bottom">
      <TabStrip>
        <TabStripItem class="navigation__item">
          <Label text="Missatges" />
          <Image src.decode="font://&#xf0ca;" class="fas t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Calendari" />
          <Image src.decode="font://&#xf073;" class="far t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Informació" />
          <Image src.decode="font://&#xf05a;" class="fas t-36" />
        </TabStripItem>
        <TabStripItem class="navigation__item">
          <Label text="Settings" />
          <Image src.decode="font://&#xf013;" class="fas t-36" />
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <GridLayout>
          <messages-list :channel="channel" />
        </GridLayout>
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <calendar :channel="channel" />
        </GridLayout>
      </TabContentItem>

      <TabContentItem>
        <channel-info :channel="channel" />
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <channel-settings />
        </GridLayout>
      </TabContentItem>
    </Tabs>
  </PageLayout>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import MessagesList from '../components/MessagesList'
import Calendar from '../components/Calendar'
import ChannelInfo from '../components/ChannelInfo'
import ChannelSettings from '../components/ChannelSettings'

export default {
  name: 'Channel',
  components: {
    'messages-list': MessagesList,
    calendar: Calendar,
    'channel-info': ChannelInfo,
    'channel-settings': ChannelSettings
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
    SelectedPageService.getInstance().updateSelectedPage('Channel')
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
