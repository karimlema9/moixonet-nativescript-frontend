import Vue from 'vue'
import * as types from '../../mutation-types'

export default {
  [types.CHANNELS_INDEX] (state, channels) {
    console.log(channels)
    Vue.set(state, 'list', channels)
  }
}
