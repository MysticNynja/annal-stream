<template>
<!-- This serves all our pages using vue router -->
<router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" :key="$route.path"/> 
  </transition>
</router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>