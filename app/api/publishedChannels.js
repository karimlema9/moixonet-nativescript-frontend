import { myAxios as instance } from '../plugins/axios'

export default {
  index: () => {
    return instance.get('published_channels')
  },
  show: (channel) => {
    return instance.post('published_channels' + channel.id)
  },
  search: (text) => {
    return instance.get('channels/search/' + text).then(result => result.data)
  }
}
