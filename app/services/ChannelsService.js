import channelsData from '../data/channels.json'

const STORAGE_KEY = 'moixonet-channels'

/**
 * LOCAL STORAGE NOT WORKING ON NATIVESCRIPT: https://www.nativescript.org/blog/client-side-storage-in-nativescript-applications
 */
export default class ChannelsService {
  fetch () {
    const channels = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    // channels.forEach(function (channel, index) {
    //   channel.id = index
    // })
    // channelStorage.uid = channels.length
    return channels
  }

  save (channels) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(channels))
  }

  clear () {
    this.save([])
  }

  add (channel) {
    const channels = this.fetch()
    channels.push(channel)
    this.save(channels)
  }

  remove (channel) {
    const channels = this.fetch()
    channels.splice(channels.indexOf(channel), 1)
    this.save(channels)
  }

  sample () {
    this.save(channelsData)
  }
}

// EXEMPLE US

// import ChannelsService from './services/ChannelsService'
// const channelsService = new ChannelsService()
// channelsService.remove()
