<template>
  <div class="h-100 body container-fluid">
    <div class="h-100 row justify-content-center">
      <div
        class="col d-flex align-items-center justify-content-center text-center"
      >
        <div>
           <p v-if="submitFormisInvalid" class="mb-4 text-danger warning-message">
               <span>⚠️</span> Submit the color in HEX value. Example: #ffffff
              </p>
          <div>
            <h1>
              mix(
              <b-input
                v-bind:value="form.color1"
                id="form.color1"
                class="h4 mb-2 mr-sm-2 mb-sm-0"
                placeholder="#cc5490"
              ></b-input>
              ,
              <span>
                <b-input
                  v-bind:value="form.color2"
                  id="form.color2"
                  class="h4 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="#fff"
                ></b-input></span
              >,
              <span>
                <b-input
                  v-bind:value="form.weight"
                  id="form.weight"
                  class="h4 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="50%"
                ></b-input></span
              >)
            </h1>
            <b-button v-on:click="submitForm" class="section" variant="primary"
              >Find color</b-button
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
      form: {
        submitFormisInvalid: false,
        color1: null,
        color2: null,
        weight: null,
        bgColor: null,
      },
    };
  },
  methods: {
    submitForm() {
      const submitFormisInvalid =
        this.form.color1 === null &&
        this.form.color2 === null &&
        this.form.weight === null;

      if (submitFormisInvalid) {
        console.log('errrrror');
      } else {
        console.log('working');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  .form-control {
    width: 12rem;
    height: 3rem;
    position: relative;
    bottom: 0.4rem;
    border: $light-grey solid 1px;
    border-radius: 3px;
    padding: 0.5rem;
    font-weight: 300;
    &:focus {
      border: $primary solid 1px;
      transition: border 0.4s;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
}
</style>
