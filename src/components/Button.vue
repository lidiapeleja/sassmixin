<template>
  <div>
    <b-button class="btn-outline-secondary" variant="secondary"
      >find out the color
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
