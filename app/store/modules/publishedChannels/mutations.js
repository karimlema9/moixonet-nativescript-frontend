import Vue from 'vue'
import * as types from '../../mutation-types'

export default {
  [types.PUBLISHED_CHANNELS_INDEX] (state, channels) {
    Vue.set(state, 'list', channels)
  }
}
