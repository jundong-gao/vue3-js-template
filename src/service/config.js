/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 2/23/21
 * Time: 4:49 PM
 */

import axios from 'axios'

let server = axios.create({
    baseURL: 'https://mock.gaojundong.com/',
    timeout: 10000
})


/**
 * 请求拦截
 */
server.interceptors.request.use(config => {
    // config.headers['Authorization'] = store.getters['user/user']?.token || ''
    return config;
})


/**
 * 响应拦截
 */
server.interceptors.response.use(config => {
    return config;
})

export default server

