<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { ref } from 'vue'
    export default {
        props: ['msg'],
        setup(props, context) {
            let store = useStore()
            let name = ref(store.state.name)
            return {
                name
            }
        }
    }
</script>
