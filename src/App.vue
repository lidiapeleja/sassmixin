<template>
  <div id="app" class="container-fluid">
    <div id="nav">
      <div class="row">
        <div class="col text-center mt-4 pl-0 mb-0">
          <router-link class="logo" to="/"
            ><mark>Mix() Sass Color Finder</mark></router-link
          >
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
  height: calc(100vh - 220px);
  .btn {
    border: transparent;
    background-color: $primary;
    text-transform: uppercase;
    padding: 1rem 2rem;
    color: $white;
    border-radius: 0.3rem;
    box-shadow: 0 6px 40px -10px rgba(255,2,102,.5);
    &:hover {
      background-color: darken($primary, 15%);
    }
  }
}

mark {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#cc5490),
    to(#ff0266)
  );
  background: linear-gradient(90deg, #cc5490, #ff0266);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

#nav {
  padding: 30px 25px 15px;
  a {

    color: $primary;
    font-weight: 700;
    font-size: $h2-font-size;
    letter-spacing: 10px;
    text-transform: uppercase;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
