<template class="header bg-dark article">
  <div class="row">
    <div class="col-md-6 text-left d-flex align-items-center bold">
      <div class="d-flex flex-column h-100 justify-content-center">
        <h1>
          Learn the list of 174 <br />
          german irregular verbs <span>for free.</span>
        </h1>
        <h2 class="h4 mt-3">Memorise. Test. Learn.</h2>
        <Button />
      </div>
    </div>
    <div class="col-md-4 mt-5 mt-md-0 p-sm-0 d-flex justify-content-center">
      <a href="https://play.unregelapp.com">
        <b-img
          src="/img/irregular-verbs-home.png"
          fluid
          alt="Learn the irregular german verbs - Unregelapp.com"
          class="img"
        ></b-img>
      </a>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: calc(100vh - 78px);
}
h1 {
  font-weight: $font-weight-bold;
  font-size: $h1-font-size;
  span {
    color: $secondary;
  }
}
.img {
  height: 16rem;
  box-shadow: $box-shadow;
  border-radius: 18px;
  animation: roll 7s infinite;
  animation-delay: 2s;
  border-radius: 16px;

  @include media-breakpoint-up(sm) {
    height: 22rem;
    border-radius: 28px;
  }
  @include media-breakpoint-up(md) {
    height: 27rem;
    border-radius: $img-border-radius;
  }
  @include media-breakpoint-up(xl) {
    height: 33rem;
    border-radius: $img-border-radius;
  }
}

@keyframes roll {
  0% {
    transform: rotate(180);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
