<template>
<div class="home">
    <Banner />
    <categories />
</div>
</template>

<script>
import Banner from '../components/banner/Banner.vue';
import categories from '../components/categories/categories.vue';

export default {
  name: 'home',
  components: {
    Banner,
    categories
  },
};
</script>
