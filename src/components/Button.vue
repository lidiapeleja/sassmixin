<template>
  <div>
    <b-button
      class="btn"
      variant="secondary"
      href="https://play.unregelapp.com"
      >find out the color<span class="pl-2">&#10095;</span>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 1rem 1.5rem;
  @include media-breakpoint-up(sm) {
    padding: 1rem 2rem;
  }
}
</style>
