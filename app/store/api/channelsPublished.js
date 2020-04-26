import { myAxios as httpClient } from '../../plugins/axios'

export default {
  index: () => {
    return httpClient.get('published_channels')
  },
  show: (channel) => {
    return httpClient.post('published_channels' + channel.id)
  },
  search: (text) => {
    return httpClient.get('channels/search/' + text).then(result => result.data)
  }
}
