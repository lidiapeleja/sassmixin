<template>
  <div class="home h-100 container-fluid">
    <vue-headful
      title="bla bla bla"
      description="bla bla bla"
      keywords="bla bla bla"
      image=""
      lang=""
      ogLocale=""
      url="https://mixsass.lidiapeleja.com/"
    />
    <Body />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Body from '@/components/Body.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Body,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
