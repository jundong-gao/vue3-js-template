/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 2/26/21
 * Time: 2:30 PM
 */

import { ref, readonly } from 'vue'
import http from '@/service/index'

/**
 * provide/inject 在此处承担的是 替代vue2.x中Vue.prototype的形式。
 * @param app vue实例
 */
function createProvide(app) {
    let test_name = ref('高俊东')
    /**
     * readonly readonly包裹后可以在组件内引用时不被改变值。
     * 否则在组件内可以直接通过test_name.value=xx 将值改变
     * 包裹后只能通过updateName()方法改变
     */
    function updateName() {
        test_name.value = 'gaojundong'
    }
    app.provide('test_name', readonly(test_name))
    app.provide('updateName', updateName)
    app.provide('$http' , http)
}

export default createProvide
