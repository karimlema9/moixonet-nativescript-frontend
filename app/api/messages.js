import { myAxios as instance } from '../plugins/axios'

export default {
  index: (channel) => {
    return instance.get('channel/' + channel.id + '/published/messages')
  }
}
