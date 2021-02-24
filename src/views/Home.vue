<template>
    <div class="home">
        {{test_name}}
        <HelloWorld msg="Vue3.0 template"/>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld'
    import { ref, getCurrentInstance, inject } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        setup(props, context) {
            /**
             * ctx 在开发环境中可以正常使用， 但是打包到生产环境 ctx指向出现变更 导致全局变量不能访问 所以直接结构proxy使用
             * 具体请看 main.js
             */

            let { ctx, proxy } = getCurrentInstance()
            proxy.$http.get('info/userinfo', {name: 'asdasd'}).then(res => {
                console.log('res::::::::::::::::', res)
            })


            let store = useStore()
            store.dispatch('changeName', '我是store修改后的name')


            let $http = inject('$http')
            $http.get('random/name', {name: 'asdasd'}).then(res => {
                console.log('res::::::::::::::::', res)
            })

            let test_name = inject('test_name')
            let updateName = inject('updateName')
            setTimeout(() => {
                updateName()
            }, 1000)


            return {
                test_name
            }

        }
    }
</script>
