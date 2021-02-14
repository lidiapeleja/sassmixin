<template>
  <div class="body container-xxl">
    <div class="justify-content-center">
      <div class="text-center">
        <div>
          <!-- Error Message Validation -->
          <p
            v-if="!form.hexValid && !form.submitFormisValid"
            class="mb-4 text-danger warning-message"
          >
            <span>⚠️</span> THE VALUES ARE NOT VALID: <br />
            Submit the 1st and 2nd parameters with a 6 digit HEX value like
            #ffffff.
            <br />
            The 3rd parameter must be an integrer number.
          </p>
          <!-- Error Message -->

          <!-- Form -->
          <div>
            <h1>
              mix(#<b-input
                v-model="form.color1"
                @change="checkifisHEXcolor1"
                class="value mb-2 mr-sm-2 mb-sm-0"
                placeholder="cc5490"
              ></b-input>
              , #<span>
                <b-input
                  v-model="form.color2"
                  @change="checkifisHEXcolor2"
                  class="value mb-2 mr-sm-2 mb-sm-0"
                  placeholder="ffffff"
                ></b-input></span
              >,
              <span>
                <b-input
                  v-model.number="form.weight"
                  class="value mb-2 mr-sm-2 mb-sm-0"
                  placeholder="50"
                ></b-input></span
              >%)
            </h1>
            <!-- Button -->
            <b-button
              @click.prevent="submitForm"
              class="section"
              variant="primary"
              >Find color</b-button
            >
            <!-- /Button -->
            <!-- Render of Value and Color Palette -->
            <div
              v-if="form.bgColor !== null"
              class="my-5 section d-flex justify-content-center align-items-center"
            >
              Your color is: {{ this.form.bgColor }}
              <div
                class="ml-3 box-color"
                v-bind:style="{ background: this.form.bgColor }"
              ></div>
              <!-- /Render of Value and Color Palette -->
            </div>
          </div>
          <!-- /Form -->
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
        hexValidcolor1: true,
        hexValidcolor2: true,
        color1: '',
        color2: '',
        weight: '',
        bgColor: null,
      },
    };
  },
  methods: {
    // Credits: Function written by J.Foster
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
        var val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));
        while (val.length < 2) {
          val = '0' + val;
        } // prepend a '0' if val results in a single digit

        color += val; // concatenate val to our new color string
      }

      return color; // PROFIT!
    },
    // Credits: Function written by J.Foster

    // check if is a HEX value
    isHexColor(hex) {
      return (
        typeof hex === 'string' &&
        hex.length === 6 &&
        !isNaN(Number('0x' + hex))
      );
    },

    // prove if color1 is a valid HEX value
    checkifisHEXcolor1(hex) {
      if (this.isHexColor(hex)) {
        this.form.hexValidcolor1 = true;
      } else {
        this.form.hexValidcolor1 = false;
      }
    },

    // prove if color1 is a valid HEX value

    checkifisHEXcolor2(hex) {
      if (this.isHexColor(hex)) {
        this.form.hexValidcolor2 = true;
      } else {
        this.form.hexValidcolor2 = false;
      }
    },

    submitForm() {
      this.form.submitFormisValid =
        this.form.color1 !== '' &&
        this.form.color1.length === 6 &&
        this.form.color2 !== '' &&
        this.form.color2.length === 6 &&
        this.form.weight !== '' &&
        isNaN(this.form.weight) === false &&
        this.form.hexValidcolor1 === true &&
        this.form.hexValidcolor2 === true;

      if (this.form.submitFormisValid) {
        const result = this.changeColor(
          this.form.color1,
          this.form.color2,
          this.form.weight
        );
        this.form.bgColor = result;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  min-height: 100vh;
  @include media-breakpoint-up(md) {
    min-height: 75vh;
  }
  @include media-breakpoint-up(lg) {
    min-height: 80vh;
  }
  .form-control {
    width: 12rem;
    height: 3.4rem;
    position: relative;
    bottom: 0.1rem;
    font-weight: $h4-font-size;
    border: $light-grey solid 1px;
    border-radius: 3px;
    padding: 0.5rem;
    font-weight: 700;
    &:focus {
      border: $primary solid 1px;
      transition: border 0.4s;
      font-weight: 700;
    }

    &::placeholder {
      font-weight: 300;
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
  .warning-message {
    font-size: $font-size-sm;
  }
  .box-color {
    background: red;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: $box-shadow;
  }
}
</style>
