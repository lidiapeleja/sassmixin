<template>
  <div id="app" class="container-fluid">
    <div id="nav">
      <div class="row">
        <div class="col-6 text-left pl-0 mb-0">
          <router-link class="logo" to="/">Mix() Sass Color Finder</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  color: $black;
  height: calc(100vh - 90px);
  .btn {
    background-color: $secondary;
    border: $secondary;
    box-shadow: rgba($secondary, 0.5) 0px 6px 40px -10px;
    text-transform: uppercase;
    font-size: $font-size-base;
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
}
</style>
