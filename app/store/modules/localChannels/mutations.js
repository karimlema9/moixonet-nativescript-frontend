import Vue from 'vue'
import * as types from '../../mutation-types'

export default {
  [types.LOCAL_CHANNELS_INDEX] (state, channels) {
    state.list = channels
  },
  [types.LOCAL_CHANNELS_STORE] (state, channel) {
    state.list.push(channel)
  },
  [types.LOCAL_CHANNELS_CLEAR] (state) {
    state.list = []
  },
  [types.LOCAL_CHANNELS_DELETE] (state, channel) {
    console.log(channel)
    state.list.splice(state.list.findIndex(c => c.id === channel.id), 1)
  }
}
