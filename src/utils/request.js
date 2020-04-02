import Axios from 'axios';
import _ from 'lodash';
import { Message } from 'element-ui'

export async function sleep(timeoutMs) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), timeoutMs);
  });
}

export async function getQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  return r != null ? unescape(r[2]) : null;
}

function http() {
  let url = '/v1';
  let axios = Axios.create();
  axios.interceptors.request.use(
    function(config) {
      config.headers.post['Content-Type'] = 'application/json';
      config.url = url + config.url;
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function(response) {
      let msg = _.get(response, 'data.error_msg', '系统错误');
      if (response.data.error_code === 401) {
        window.location = `/login`;
        return;
      } else if (response.data.error_code === 500) {
        Message({
          message: '权限不足',
          type: 'error',
          duration: 2 * 1000
        })
        throw new Error(msg);
      } else if (response.data.error_code !== 0) {
        Message({
          message: msg || 'error',
          type: 'error',
          duration: 2 * 1000
        })
        throw new Error(msg);
      }
      return response.data;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  return axios;
}

export async function HttpGet(url) {
  return await http().get(url);
}

export async function HttpPost(url, jsonData) {
  return await http().post(url, jsonData);
}
