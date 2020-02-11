import Vue from 'nativescript-vue'
import axios from 'axios'
import { SnackBar } from 'nativescript-material-snackbar'
import store from '../store'
import * as mutations from '~/store/mutation-types'
// import httpAdapter from 'axios/lib/adapters/http'

const snackbar = new SnackBar()
// TOKEN EXPOLTACIO eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYmI3ZjhlN2I5MjAwYTAzZWIwOTYxMmIyNTExZWM0YzEwMmI2MzYwOTRiZjhiNjZkZWE3YzBlNDllZTdiNzQwN2MyMDY0MTMwZDhmNzA5In0.eyJhdWQiOiIyIiwianRpIjoiNWJiYjdmOGU3YjkyMDBhMDNlYjA5NjEyYjI1MTFlYzRjMTAyYjYzNjA5NGJmOGI2NmRlYTdjMGU0OWVlN2I3NDA3YzIwNjQxMzBkOGY3MDkiLCJpYXQiOjE1NzQ5NDU4MjksIm5iZiI6MTU3NDk0NTgyOSwiZXhwIjoxNjA2NTY4MjI5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BTq5xjAjNHpRalehIpEDvOiNcU15v6rKGl7b0iZG0N6YyQX-ulUdK9cbsmevpruw9eo_8zCwMcrbzw3nOzl-DpFnKT1y4xqhlJkS9Su_mBe5L4FrrRPJ2SFQotF_UN7u5fkdv2mRET3N5VecwZPVfd9tevnd5cZF9ypa41W3XCW3e0gUt1NYHmvcWGPf8PPfKmjZzz4qj--fkF83SNIWQTUtJF9dPO1MmYqe012CbLmsjqjGj5daW89D7f_-XHXGSkU6evUt1VITENVdwMc6Sc5Mf18Hs3WR6nlqqPV8Rhy76yiVVvXMUmH6SMfMWv05UCweSsI2aEhVnzrsbm3w6liEO0cg8kImWxkqo9rB_YB2RvRGQxaY9XLuEsGSDL5V0CbTMcMBwbbS5LV0bv3WZFNG3YJUPTuBtEdIFiZVxZ6wtVsul20byFWah17cicBsd4TATd-H1bgfSQ_IlpCI8gMfVHzmURRMRyEjPFTSrRL4Qhybp5v4Lz996QuPCytxf7MpiF-aqDCNPcsmG8NUmpwDHsB18xXdaLdfPOZmN4M6HHEDEbc-mJw60x13PiAlAqU_h0mnw4O6oPC7K0ntEC7S3EZDZEcrNSaDbL9P29EZT4dxbWN0R4mIfsY3Lg6JRE5Buyp-AxrOwWBeuCZx3oBKrXUp09_UmJ1fQCeESqo

export const baseUrl = 'https://moixonet.acacha.scool.cat'


const myAxios = axios.create({
  baseURL: baseUrl + '/api/v1',
  // adapter: httpAdapter,
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwZjAwZDE5MGVlNWNhZDYxZmUyYjUzMzc1ZTAwNDIyMTNjOTg2OWZkZjRhZTE0MzllMzIxZDBkMzVlZjY5ZjRhZGZiMTJlZThlYmIyMGE4In0.eyJhdWQiOiIxIiwianRpIjoiNzBmMDBkMTkwZWU1Y2FkNjFmZTJiNTMzNzVlMDA0MjIxM2M5ODY5ZmRmNGFlMTQzOWUzMjFkMGQzNWVmNjlmNGFkZmIxMmVlOGViYjIwYTgiLCJpYXQiOjE1ODE0NDgyMjIsIm5iZiI6MTU4MTQ0ODIyMiwiZXhwIjoxNjEzMDcwNjIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.W70PH25lRaZt2uSNU1mxkkLym_CPccZy2dVbbQuHECfoej1KnYXd5TFpAhc7qIv7mcwG2rz485yRGdDvx5tYbs42uYwkv3eRWR4FkjQN1gEacOvoW2ujB3LFKvyMroOuXrCo0Vs0HPIMr8PZHOdpdE2m-UJBtkq_ycMd6-H1XDVgQIYKrusiKXhKS81oaYYnCb0XHqlDKvV0k3Ocmzmraoz5F5njOxXqga7r7p_oZsf7_gntj712wuroQtJ5nsHntvFo_SYOA5rpfQJI6gY_5akjH_qjWGNPgoj3eIeDNJAwmBzP9lyGl0IFK12NZkyMiwEkIkHQDRYB5FOc7Z-7LuL2MxSsn1Kq4r4C87EghN7193RWmIsDCK2NJrvWh0vQX5J5Tnt2A7plSDPeJZrqNQF6SwvNgwQ-riq4u7XyUpGg98U7YO3lV_EkI0mqut5x1pcu_RzB4z5W9HCthC4my4Bh_onV7TkaTvB_yy6zE4bocZVCRxw_QHtT_4ZO6LT16ATOavfwHAMSEPL4_0eK6O3fW8jZWJzQhTQQDAcaZvZq80ZPjNd8V_v-vsjd4Fd5iMRfejQ0ID9tykXeWAN-7uqzc8wdcklFqFHWBf7qbTXznIRFnlJMesl5M3zFRpa6eOGNiHi2b7mVPV2-PsbkbCGc_s-7N-PQyDSkA2pLiIM'
  }
})

// INTERCEPTORS
// https://github.com/axios/axios#interceptors
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
  console.log(response.status)
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
      snackbar.action({
        message: 'ERROR AXIOS INTERCEPTED: ' + error,
        backgroundColor: 'red',
        actionText: 'Dismiss',
        hideDelay: 2000
      })
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

export { myAxios }

export default {
  install (Vue, options) {
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.prototype.$axios = myAxios
  }
}
