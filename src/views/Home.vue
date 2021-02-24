<template>
    <div class="home">
        <HelloWorld msg="Vue3.0 App"/>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld'
    import { ref, getCurrentInstance } from 'vue'
    import { useStore } from 'vuex'
    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        setup(props, context) {
            let { proxy } = getCurrentInstance()
            console.log('proxy::::::::::::::::', proxy)
            proxy.$http.get('userinfo', {name: 'asdasd'}).then(res => {
                console.log('res::::::::::::::::', res)
            })


            let store = useStore()
            store.dispatch('changeName', 'asdasdsad')

        }
    }
</script>
