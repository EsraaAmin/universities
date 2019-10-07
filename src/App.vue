<template>
  <div id="app">
    <appHeader />
    <router-view/>
    <appFooter />
  </div>
</template>

<script>
  import appHeader from '@/components/header/appHeader.vue'
  import appFooter from '@/components/footer/appFooter.vue'
  
  export default {
    name: 'app',
    components: {
      appHeader,
      appFooter

    }
  }
  </script>


<style scoped lang="scss">
  @import '@/assets/css/components/global.scss';
</style>