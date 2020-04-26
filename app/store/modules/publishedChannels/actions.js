import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import api from '../../api/channelsPublished'

export default {
  async [actions.PUBLISHED_CHANNELS_INDEX] (context) {
    const channels = await api.index()
    context.commit(mutations.PUBLISHED_CHANNELS_INDEX, channels.data)
  },
  async [actions.SEARCH_CHANNELS_INDEX] (context) {
    const channels = await api.index()
    context.commit(mutations.SEARCH_CHANNELS_INDEX, channels.data)
  }
}
