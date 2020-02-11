import { myAxios as httpClient } from '../../plugins/axios'

export default {
  index () {
    return httpClient.get('/api/v1/messages/')
  },
  store (message) {
    return httpClient.post('/api/v1/messages/', message)
  },
  delete (id) {
    return httpClient.delete('/api/v1/messages/' + id)
  },
  put (message, newMessage) {
    return httpClient.put('/api/v1/messages/' + message.id, newMessage)
  },
  show (message) {
    return httpClient.get('/api/v1/messages/' + message.id)
  }
}
