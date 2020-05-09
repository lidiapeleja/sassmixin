<template>
  <div>
    <vue-headful
      title="Learn, test and memorise the list of irregular german verbs in a fun way!"
      description="Bring your german to a next level with UnregelApp. Learn, test and memorise the list of irregular german verbs for free. Start learning now!"
      keywords="List, Irregular verbs, German, learn, list, test, memorise, improve, Germany, German, Deutschland, App"
      image=""
      lang=""
      ogLocale=""
      url="https://unregelapp.com/about"
    />
    <Sticky />
    <div class="about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-5 text-right"><h1>About</h1></div>
          <div class="col-12 col-sm-7">
            <p class="mt-2">
              UnregelApp has been developed to empower everyone to learn the
              German verb Conjugations in a fun way. The App is in Beta version,
              currently containing the 24 most fundamental verbs of the German
              language. In the following months, UnregelApp will be released
              with the whole 174 set of verbs that will bring you up to the C1
              level. Sign up our newsletter and you will be the first to know
              when full version is out! UnregelApp is a project from
              <a
                class="text-primary"
                href="https://www.linkedin.com/in/lidiapeleja/"
                >Lídia Pelejà</a
              >, a Catalan Front-end Web Developer, UX Designer and
              Communication Specialist currently based in Munich, Germany. As
              she also struggled with the irregular verbs, she decided to start
              coding a project to help others. That's how UnregelApp was
              created. <span>Happy learning ♡</span>.
            </p>
            <p class="credit">
              Credits: Illustation & Icons thanks to
              <a href="https://icons8.com/">Icons8</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Sticky from '@/components/Sticky.vue';

export default {
  components: {
    Footer,
    Sticky,
  },
};
</script>

<style lang="scss" scoped>
.about {
  h1 {
    color: $secondary;
  }
  p {
    font-size: $h4-font-size;
    font-weight: $font-weight-bold;
    &.credit {
      font-size: $font-size-base;
    }
  }

  a {
    color: $secondary;
  }

  span {
    color: $rosa;
  }
}
</style>
