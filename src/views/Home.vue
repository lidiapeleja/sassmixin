<template>
  <div class="home container-fluid">
    <vue-headful
      title="Mix() SASS Color Finder"
      description="Mix() SASS Color Finder by Lídia Pelejà"
      keywords="Mix() SASS Function Color Picker"
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
</style>
