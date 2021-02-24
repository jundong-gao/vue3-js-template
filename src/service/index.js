/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 2/23/21
 * Time: 4:49 PM
 */

import server from './config'

const http = {
    get(url, params){
        return server.get(url, {params: params}).then(res => res.data)
    },
    post(url, params) {
        return server.post(url, params).then(res => res.data)
    }
}

export default http

