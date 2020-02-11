import { myAxios as httpClient } from '../../plugins/axios'

export default {
  index () {
    return httpClient.get('/api/v1/channels/')
  },
  store (channel) {
    return httpClient.post('/api/v1/channels/', channel)
  },
  delete (id) {
    return httpClient.delete('/api/v1/channels/' + id)
  },
  put (channel, newChannel) {
    return httpClient.put('/api/v1/channels/' + channel.id, newChannel)
  }
}
