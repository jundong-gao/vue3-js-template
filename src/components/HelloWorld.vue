<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{name}}</h1>
        <button @click="emitParent">触发emit</button>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { ref, defineProps, defineEmit } from 'vue'
    let props = defineProps({
        msg: String
    })
    let emits = defineEmit(['change'])
    let store = useStore()
    let name = ref(store.state.name)
    let emitParent = () => {
        emits('change', '这是子组件的值')
    }
</script>
