<template>
    <h1>This is an about page</h1>
    <div>{{count}}</div>
    <button @click="add">add</button>
</template>

<script>
    import { watch, ref, watchEffect, isRef, computed } from 'vue'
    import useCalc from '@hooks/useCalc'
    export default {
        setup() {
            let { add, count } = useCalc()
            let a = ref('aaa')


            watch(count, (newVal, oldVal) => {
                console.log('newVal,oldVal::::::::::::::::', newVal,oldVal)
            })

            watchEffect(() => {
                console.log('watchEffect count::::::::::::::::', count.value)
            })


            return {
                add,
                count
            }
        }
    }
</script>
