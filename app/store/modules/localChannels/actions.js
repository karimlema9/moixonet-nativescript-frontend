import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import localChannelsService from '../../../services/ChannelsService'

export default {
  [actions.LOCAL_CHANNELS_INDEX] (context) {
    const channels = localChannelsService.fetch()
    context.commit(mutations.LOCAL_CHANNELS_INDEX, channels)
  },
  [actions.LOCAL_CHANNELS_STORE] (context, channel) {
    localChannelsService.add(channel)
    context.commit(mutations.LOCAL_CHANNELS_STORE, channel)
  },
  [actions.LOCAL_CHANNELS_CLEAR] (context) {
    localChannelsService.clear()
    console.log('clear')
    context.commit(mutations.LOCAL_CHANNELS_CLEAR)
  },
  [actions.LOCAL_CHANNELS_DELETE] (context, channel) {
    localChannelsService.remove(channel)
    context.commit(mutations.LOCAL_CHANNELS_DELETE, channel)
  }
}
