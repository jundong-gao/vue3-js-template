<template>
    <div id="nav" class="flex-jac">
        <router-link to="/" class="link">Home</router-link> |
        <router-link to="/about"  class="link">About</router-link>
    </div>
    <router-view />
</template>


<script>
    /**
     * 使用 provide 和 inject 替代挂载全局变量的方法
     * 由于provide 和 inject的作用是替代 全局变量 ，所以 选择在App.vue 文件中注册
     * inject使用在 Home.vue文件
     */
    import { ref, provide, readonly } from 'vue'
    import http from '@/service/index'
    export default {
        setup() {
            let test_name = ref('高俊东')
            /**
             * readonly readonly包裹后可以在组件内引用时不被改变值。
             * 否则在组件内可以直接通过test_name.value=xx 将值改变
             * 包裹后只能通过updateName()方法改变
             */
            function updateName() {
                test_name.value = 'gaojundong'
            }
            provide('test_name', readonly(test_name))
            provide('updateName', updateName)
            provide('$http' , http)

            return {
                test_name
            }
        }
    }
</script>

<style lang="scss">
    #nav{margin-bottom: 40px;}
    #app{color: #555; text-align: center;}
    .link{margin: 0 20px;}
    .router-link-active{color: red;}
</style>
