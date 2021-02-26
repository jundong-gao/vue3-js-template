<template>
    <div id="nav" class="flex-jac">
        <router-link to="/" class="link">Home</router-link> |
        <router-link to="/about"  class="link">About</router-link>
    </div>
    <router-view />
</template>


<script setup></script>

<style lang="scss">
    #nav{margin-bottom: 40px;}
    #app{color: #555; text-align: center;}
    .link{margin: 0 20px;}
    .router-link-active{color: red;}
</style>
