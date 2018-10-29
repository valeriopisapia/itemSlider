import axios from 'axios'
import config from '../utils/config'

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain'
  },
  timeout: config.requestTimeout
}

// A simple fetch without default error interceptions
export function fetch(url, options = {}) {
  return axios(Object.assign({url}, defaultOptions, options))
}

// Use this when you need automatic network failures handling
export function buildFetch(dispatch) {
  return function fetch(url, options = {}) {
    return axios(Object.assign({url}, defaultOptions, options)).catch(error => {
      console.log(error)
      return Promise.reject(error)
    })
  }
}