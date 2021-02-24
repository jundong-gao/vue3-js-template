/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 2/24/21
 * Time: 12:33 PM
 */
import { ref } from 'vue'
function useCalc() {
    let count = ref(0)
    let add = () => count.value++
    return {
        count,
        add
    }
}


/**
 * 个人建议 统一规范 直接导出函数名并在外部组件调用,而不是导出fn()
 */
export default useCalc
