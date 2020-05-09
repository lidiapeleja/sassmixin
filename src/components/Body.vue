<template>
  <div class="h-100 body container-fluid">
    <div class="h-100 row justify-content-center">
      <div
        class="col d-flex align-items-center justify-content-center text-center"
      >
        <div>
          <p
            v-if="!form.submitFormisValid"
            class="mb-4 text-danger warning-message"
          >
            <span>⚠️</span> Submit the 1st and 2nd paramwter in 6 digit HEX
            value. #ffffff is OK.
            <span class="line-through">#fff</span> is not. The 3rd parameter must be a number.
          </p>
          <div>
            <h1>
              mix(#<b-input
                v-model="form.color1"
                class="h4 mb-2 mr-sm-2 mb-sm-0"
                placeholder="cc5490"
              ></b-input>
              , #<span>
                <b-input
                  v-model="form.color2"
                  class="h4 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="ffffff"
                ></b-input></span
              >,
              <span>
                <b-input
                  v-model.number="form.weight"
                  class="h4 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="50"
                ></b-input></span
              >%)
            </h1>
            <b-button
              @click.prevent="submitForm"
              class="section"
              variant="primary"
              >Find color</b-button
            >
            <p v-if="form.bgColor !== null" class="section">
              Your color is: {{ this.form.bgColor }}
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
  data() {
    return {
      form: {
        submitFormisValid: true,
        color1: '',
        color2: '',
        weight: '',
        bgColor: null,
      },
    };
  },
  methods: {
    changeColor(color1, color2, weight) {
      function d2h(d) {
        return d.toString(16);
      } // convert a decimal value to hex
      function h2d(h) {
        return parseInt(h, 16);
      } // convert a hex value to decimal

      weight = typeof weight !== 'undefined' ? weight : 50; // set the weight to 50%, if that argument is omitted

      var color = '#';

      for (var i = 0; i <= 5; i += 2) {
        // loop through each of the 3 hex pairs—red, green, and blue
        var v1 = h2d(color1.substr(i, 2));
        var v2 = h2d(color2.substr(i, 2));
        var val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));
        while (val.length < 2) {
          val = '0' + val;
        } // prepend a '0' if val results in a single digit

        color += val; // concatenate val to our new color string
      }

      return color; // PROFIT!
    },
    submitForm() {
      this.form.submitFormisValid =
        this.form.color1 !== '' &&
        this.form.color1.length === 6 &&
        this.form.color2 !== '' &&
        this.form.color2.length === 6 &&
        this.form.weight !== '' &&
        isNaN(this.form.weight) === false;

      if (this.form.submitFormisValid) {
        console.log('isNaN?', isNaN(this.form.weight));
        const result = this.changeColor(
          this.form.color1,
          this.form.color2,
          this.form.weight
        );
        this.form.bgColor = result;
        console.log(this.form.bgColor);
      } else {
        alert('error');
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

  .line-through {
    text-decoration: line-through;
  }
}
</style>
