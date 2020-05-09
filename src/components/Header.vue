<template class="header bg-dark article">
  <div class="row">
    <div class="col-md-6">
      <div class="">
        <Button />
      </div>
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

</style>
