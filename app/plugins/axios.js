import Vue from 'nativescript-vue'
import axios from 'axios'
import { SnackBar } from 'nativescript-material-snackbar'
import store from '../store'
import * as mutations from '~/store/mutation-types'
// import httpAdapter from 'axios/lib/adapters/http'

const snackbar = new SnackBar()
// TOKEN EXPOLTACIO eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYmI3ZjhlN2I5MjAwYTAzZWIwOTYxMmIyNTExZWM0YzEwMmI2MzYwOTRiZjhiNjZkZWE3YzBlNDllZTdiNzQwN2MyMDY0MTMwZDhmNzA5In0.eyJhdWQiOiIyIiwianRpIjoiNWJiYjdmOGU3YjkyMDBhMDNlYjA5NjEyYjI1MTFlYzRjMTAyYjYzNjA5NGJmOGI2NmRlYTdjMGU0OWVlN2I3NDA3YzIwNjQxMzBkOGY3MDkiLCJpYXQiOjE1NzQ5NDU4MjksIm5iZiI6MTU3NDk0NTgyOSwiZXhwIjoxNjA2NTY4MjI5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BTq5xjAjNHpRalehIpEDvOiNcU15v6rKGl7b0iZG0N6YyQX-ulUdK9cbsmevpruw9eo_8zCwMcrbzw3nOzl-DpFnKT1y4xqhlJkS9Su_mBe5L4FrrRPJ2SFQotF_UN7u5fkdv2mRET3N5VecwZPVfd9tevnd5cZF9ypa41W3XCW3e0gUt1NYHmvcWGPf8PPfKmjZzz4qj--fkF83SNIWQTUtJF9dPO1MmYqe012CbLmsjqjGj5daW89D7f_-XHXGSkU6evUt1VITENVdwMc6Sc5Mf18Hs3WR6nlqqPV8Rhy76yiVVvXMUmH6SMfMWv05UCweSsI2aEhVnzrsbm3w6liEO0cg8kImWxkqo9rB_YB2RvRGQxaY9XLuEsGSDL5V0CbTMcMBwbbS5LV0bv3WZFNG3YJUPTuBtEdIFiZVxZ6wtVsul20byFWah17cicBsd4TATd-H1bgfSQ_IlpCI8gMfVHzmURRMRyEjPFTSrRL4Qhybp5v4Lz996QuPCytxf7MpiF-aqDCNPcsmG8NUmpwDHsB18xXdaLdfPOZmN4M6HHEDEbc-mJw60x13PiAlAqU_h0mnw4O6oPC7K0ntEC7S3EZDZEcrNSaDbL9P29EZT4dxbWN0R4mIfsY3Lg6JRE5Buyp-AxrOwWBeuCZx3oBKrXUp09_UmJ1fQCeESqo
const myAxios = axios.create({
  baseURL: 'https://moixonet.karimlema9.scool.cat',
  // adapter: httpAdapter,
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFkZGFiOWYxMTAxMGUwYTZiNmFhYzMwNGQ3YTJlNzAwNGNmNzcwZDEzZTM4YjJjNDYxOTk2ZDBhYTY1ZWFkNDI1NjJmNGQ2OTFiNWFjOTg4In0.eyJhdWQiOiIyIiwianRpIjoiYWRkYWI5ZjExMDEwZTBhNmI2YWFjMzA0ZDdhMmU3MDA0Y2Y3NzBkMTNlMzhiMmM0NjE5OTZkMGFhNjVlYWQ0MjU2MmY0ZDY5MWI1YWM5ODgiLCJpYXQiOjE1ODA0MTMyMTMsIm5iZiI6MTU4MDQxMzIxMywiZXhwIjoxNjEyMDM1NjEzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.sHmfFFKydBXP-05v2lMCqLOaGZmeVDakv4-C5lMXmBtJxM9CtNMfTiRVRxE4sYWdbWYm9cJlh67ByfVnRsYcOlP_dtyEqoWI3NDc1I3MTsf1DXC8MF6v_d2EEcSCsjbIemGPKEMcfXV_T67ff8U1jBIJQwved0Ui55bz5ZyQWdalknTce-FGbOLoQQd4XSg01RmVdTSYdvbYnv1-ky9yH436fYfkNuwa-Ojd63yJfzcY1A6uNuvv-TSowD-WVruKQqcqew7IDTdeRFHKHPHonajiyrz4nB4xLecu_K13aCQaOA5TjdJ-7ayrDk24iyRdFbpSm9f3i12_-eBHvTd02Qnp2NYWTy3bY55-iF_en0T7P-pvU8bptFQnQvtpmNRSrMcVejeV8aqY8ikCUbUR3hc2e2ptU0CbEvA_bGrZsGup_wJ5zjCqL1-g_Rk56bRvWgrUOEZM4N_PT0HvtodrBR7hiFe1Kldys8xEfJNoZIFjVRY5Cp0iU-lXodqkj3tPa0AfCZvlKFKv4DyvvniyB6H9YYpG56wrYvQGu1N8cu4q_fk2FS86mYLzRYE4jtnNpUn5rKBTErPDe3f9uOnvmo2_J48vMG1d9bjvhEoCdX-AIR5vvr-AGVeZCxfNAQ1v-YE-z2cbV-ekkv-NXRXswMbSPz4y8Y7M3zCDX6LK8Fc'
  }
})

// this helps WebStorm with autocompletion, otherwise it's not needed
myAxios.interceptors.request.use(function (config) {
  console.log('REQUEST INTERCEPTED!!!!!!!!!!!!!!!')
  // Do something before request is sent
  store.commit('axios/' + mutations.SET, { key: 'loading', value: true })
  return config
}, function (error) {
  // Do something with request error
  console.log('######### REQUEST ERROR INTERCEPTED!!!!!!!!!!!!!!!')
  console.log('ERROR:')
  console.log(error)
  snackbar.simple(error)
  return Promise.reject(error)
})

myAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('RESPONSE INTERCEPTED!!!!!!!!!!!!!!!')
  store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
  console.log('######### RESPONSE ERROR INTERCEPTED!!!!!!!!!!!!!!!')
  console.log('ERROR:')
  console.log(error)
  // https://github.com/axios/axios#handling-errors
  if (error.response) {
    console.log('CASE 1')
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log('## STATUS:')
    console.log(error.response.status)
    // console.log(error.response.headers)
    if (parseInt(error.response.status) === 401) {
      console.log('$$$$$$$$$$$ 401 $$$$$$$')
      snackbar.simple('YOU NEED TO RELOGIN!').then(
        result => console.log('Simple Snackbar:', result)
      // TODO SHOW PAGE LOGIN WHEN WE HAVE ONE
      )
    } else if (parseInt(error.response.status) === 403) {
      snackbar.simple('No teniu permisos per realitzar aquesta acció')
    } else {
      snackbar.simple('ERROR AXIOS INTERCEPTED: ' + error)
    }
  } else if (error.request) {
    console.log('CASE 2')
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
  } else {
    console.log('CASE 3')
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  // console.log(error.config)
  return Promise.reject(error)
})

// this helps WebStorm with autocompletion, otherwise it's not needed
Vue.prototype.$axios = myAxios

export default {
  install (Vue, options) {
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.prototype.$axios = myAxios
  }
}
