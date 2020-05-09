<template>
  <div class="home section container-fluid">
    <vue-headful
      title="Learn, test and memorise the list of irregular german verbs in a fun way!"
      description="Bring your german to a next level with UnregelApp. Learn, test and memorise the list of irregular german verbs for free. Start learning now!"
      keywords="List, Irregular verbs, German, learn, list, test, memorise, improve, Germany, German, Deutschland, App"
      image=""
      lang=""
      ogLocale=""
      url="https://unregelapp.com/"
    />
    <Sticky />
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Body from '@/components/Body.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Body,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
