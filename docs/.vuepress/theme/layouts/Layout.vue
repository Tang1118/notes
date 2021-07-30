<template>
  <Layout/>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { useRoute } from 'vue-router';
export default {
  components: {
    Layout
  },
  beforeRouteUpdate(to, from, next) {
    console.log('11111', to)
    console.log(from)
    next()
  }
}
</script>

<style lang="css">
.adsbygoogle-box {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0.5rem 2.5rem;
  max-width: var(--content-width);
  text-align: center;
}

@media (max-width: 959px) {
  .adsbygoogle-box {
    padding: 0.5rem 2rem;
  }
}

@media (max-width: 419px) {
  .adsbygoogle-box {
    padding: 0.5rem 1.5rem;
  }
}
</style>
