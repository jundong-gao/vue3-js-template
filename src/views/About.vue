<template>
    <h1>This is an about page</h1>
    <div>{{count}}</div>
    <button @click="add">add</button>
</template>

<script>
    import useCalc from '@hooks/useCalc'
    export default {
        setup() {
            let { add, count } = useCalc()
            return {
                add,
                count
            }
        }
    }
</script>
