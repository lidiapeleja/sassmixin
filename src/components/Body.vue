<template>
<div>hola</div>
</template>

<script>
export default {
  name: 'Body',
};
</script>
<style lang="scss" scoped>
h3 {
  font-weight: $font-weight-bold;
}
svg {
  height: 150px;
  width: 150px;
  @include media-breakpoint-up(md) {
    height: 200px;
    width: 200px;
  }
}
</style>
