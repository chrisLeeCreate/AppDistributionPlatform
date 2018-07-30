import axios from 'axios'
import vue from 'vue'
 
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://gamma-xesapi.speiyou.cn'
// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })

// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})
 
// 封装axios的post请求
export function fetchPOST(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

// 封装axios的get请求
export function fetchGET(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

const config = {
  headers:{
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
}

export default {
  BingPost(url, params, headers = config) {
    // console.log(url,params,"POST",config);
    return fetchPOST(url, params, );
  },
  BingGet(url, params) {
    // console.log(url,params,"GET");
    return fetchGET(url, params);
  }
}