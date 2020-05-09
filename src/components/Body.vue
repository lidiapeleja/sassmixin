<template>
  <div class="h-100 body container-fluid">
    <div class="h-100 row justify-content-center">
      <div
        class="col d-flex align-items-center justify-content-center text-center"
      >
        <div>
          <div>
            <h1>
              mix(
              <b-input
                v-bind:value="color1"
                id="color1"
                class="h2 mb-2 mr-sm-2 mb-sm-0"
                placeholder="$color-1"
              ></b-input
              >,
              <span>
                <b-input
                  v-bind:value="color2"
                  id="color2"
                  class="h2 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="$color-2"
                ></b-input></span
              >,
              <span>
                <b-input
                  v-bind:value="weight"
                  id="weight"
                  class="h2 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="$weight"
                ></b-input></span
              >)
            </h1>
            <b-button class="section" variant="primary"
              >Find the color</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body',
  components: {},
  data() {
    return {
      color1: '',
      color2: '',
      weight: '',
      bgColor: 'yellow',
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  .form-control{
    width: 12rem;
  }
}
</style>
