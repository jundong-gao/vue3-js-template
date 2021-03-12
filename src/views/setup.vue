<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/12/21
 * Time: 2:24 PM
-->
<template>
    <div class="color-test">
        setup {{a}} {{msg}}
    </div>
</template>

<script setup="props">
    import { ref, defineProps } from 'vue'

    let a = ref(100)
    let color = ref('red')
    let height = ref(1000)
</script>

<style scoped>
    .color-test{background-color: v-bind(color); height: v-bind(height / 2 + 'px');}
</style>
