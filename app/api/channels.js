import { myAxios as instance } from '../plugins/axios'

export default {
  index: () => {
    return instance.get('/api/v1/channels')
  },
  store: (channel) => {
    return instance.post('/api/v1/channels', channel)
  },
  put: (id, newChannel) => {
    return instance.put('/api/v1/channels/' + id, newChannel)
  },
  delete: (id) => {
    return instance.delete('api/v1/channels/' + id)
  }
}
