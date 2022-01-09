<template>
<main>
  <Gallery class="gallery__container"/>
  <View class="view__container"/>
</main>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import View from '@/components/View.vue'

export default {
  name: 'App',
  components: {
    Gallery,
    View
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1600px;
  height: 100vh;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  max-width: 1600px;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;

  .gallery__container, .view__container {
    max-width: 50rem;
    width:50%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
}
</style>
