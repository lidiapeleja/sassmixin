<template>
  <div>
    <Sticky />
    <vue-headful
      title="Learn, test and memorise the list of irregular german verbs in a fun way!"
      description="Bring your german to a next level with UnregelApp. Learn, test and memorise the list of irregular german verbs for free. Start learning now!"
      keywords="List, Irregular verbs, German, learn, list, test, memorise, improve, Germany, German, Deutschland, App"
      image=""
      lang=""
      ogLocale=""
       url="https://unregelapp.com/blog"
    />
    <div class="blog container">
      <div class="row d-flex">
        <div class="col-sm-5 text-right"><h1>Blog</h1></div>
        <div class="col-sm-7 mt-2">
          <h2>List of german irregular verbs that you can currently learn</h2>
          <h3 class="paragraph h4">
            The App currently contains the 24 most important german irregular
            verbs
          </h3>
          <p class="paragraph small-font-size text-muted text-uppercase mb-0">
            Author: UnregelApp Team
          </p>
          <p class="small-font-size text-muted text-uppercase mt-0">
            December 2019
          </p>
          <div class="section row">
            <div class="col-sm-6">
              <p>
                This is the list of verbs that you can currently practise:
                bleiben, essen, scheiden, fallen, finden, geben, gehen,
                gewinnen, halten, heißen, helfen, kommen, lassen, laufen,
                liegen, nehmen, sehen, sitzen, sprechen, stehen, tragen, tun,
                verlieren, ziehen. START LEARNING NOW! 😎
              </p>
            </div>
            <div class="col-sm-6">
              <b-img
                src="/img/unregelmäßige-verben-deutsch-unregelapp-3.jpg"
                fluid
                alt="Irregular Verbs App - presented at Google Munich Germany"
                class="img"
              ></b-img>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <!-- Article 1 -->
      <div class="section row d-flex">
        <div class="offset-sm-5 col-sm-7">
          <h2>UnregelApp for the first time presented</h2>
          <h3 class="paragraph h4">
            The App was presented for the fist time at the Google Offices in
            Munich
          </h3>
          <p class="paragraph small-font-size text-muted mb-0 text-uppercase">
            Author: UnregelApp Team
          </p>
          <p class="small-font-size text-muted text-uppercase">
            September 2019
          </p>
          <div class="section row">
            <div class="col-sm-6">
              <p>
                The Sketch designer community of designers in Munich was for the
                first time introduced to UnregelApp.com, the learning
                alternative to boring lists of irregular verbs. Presented at
                Google Offices.
              </p>
            </div>
            <div class="col-sm-6">
              <b-img
                src="/img/UnregelApp-learn-unregelmassige-deutsche-verben-at-google-2.jpg"
                fluid
                alt="Irregular Verbs App - presented at Google Munich Germany"
                class="img"
              ></b-img>
            </div>
          </div>
        </div>
        <!-- /Article 1 -->
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Sticky from '@/components/Sticky.vue';
export default {
  name: 'Blog',
  components: {
    Footer,
    Sticky,
  },
};
</script>

<style lang="scss" scoped>
.blog {
  h1 {
    color: $secondary;
  }
  h2 {
    font-weight: $font-weight-bold;
  }
  hr {
    margin-top: 3rem;
    margin-bottom: 0;
  }
}
</style>
