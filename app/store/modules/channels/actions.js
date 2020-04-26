import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import api from '../../../api/channels'

export default {
  async [actions.CHANNELS_INDEX] (context) {
    const channels = await api.index()
    console.log(channels)
    console.log('channels')
    context.commit(mutations.CHANNELS_INDEX, channels.data)
  }
}
