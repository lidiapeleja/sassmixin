<template>
  <div id="app" class="container-fluid">
    <div id="nav">
      <div class="row">
        <div class="col-6 text-left pl-0 mb-0">
          <router-link class="logo" to="/">UnregelApp</router-link>
        </div>
        <div class="col-6">
          <div class="row h-100 d-flex justify-content-end align-items-center">
            <div>
              <router-link class="mr-3 about-link" to="/about"
                >About</router-link
              >
            </div>
            <div>
              <router-link to="/blog">Blog</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: $grey;

  .btn {
    background-color: $secondary;
    border: $secondary;
    box-shadow: rgba($secondary, 0.5) 0px 6px 40px -10px;
    text-transform: uppercase;
    font-size: $font-size-base;
    letter-spacing: 2px;
    color: $white;
    border-radius: 0.3rem;
    &:hover {
      background-color: $secondary;
      background-color: darken($secondary, 15%);
    }
  }
}

#nav {
  padding: 30px 25px 15px;

  a {
    font-weight: bold;
    color: $grey;
    &:hover {
      text-decoration: none;
    }

    &.router-link-exact-active {
      color: $secondary;
      border-bottom: solid 3px $secondary;
      transition: border 0.2s;
    }
  }
  .about-link {
    &::after {
      color: $grey;
      content: '|';
      position: relative;
      right: -8px;
    }
  }
  .logo {
    font-size: $h4-font-size;
    @include media-breakpoint-up(md) {
      font-size: $h3-font-size;
    }
  }
}
</style>
