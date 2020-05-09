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
    border: transparent;
    background-color: $primary;
    text-transform: uppercase;
    font-size: $h5-font-size;
    padding: 1rem 2rem;
    color: $white;
    border-radius: 0.3rem;
    &:hover {
      background-color: $secondary;
    }
  }
}

#nav {
  padding: 30px 25px 15px;
}
</style>
