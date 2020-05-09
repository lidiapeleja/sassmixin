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
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="$color-1"
              ></b-input
              >,
              <span>
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="$color-2"
                ></b-input></span
              >,
              <span>
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="$weight"
                ></b-input></span
              >)
            </h1>
            <b-button class="section" variant="primary">Find the color</b-button>
          </div>
          <div class="article">
            <p>
              for example: mix(<span>#fff</span>, <span>#5678fd</span>,
              <span>50%</span>)
            </p>
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
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
}
</style>
