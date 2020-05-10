<template>
  <footer class="fixed-bottom container-fluid pt-4 pb-5">
    <p>
      Coded with <span class="pink">love</span> & VueJS by
      <a class="pink text-bold" href="https://lidiapeleja.com">Lídia Pelejà</a> ·
      <span>{{ new Date().getFullYear() }}</span>
    </p>
    <p>
      Credits: JS Function thanks to
      <a class="pink" href="https://gist.github.com/jedfoster/7939513">J. Foster</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  font-family: 'Crismon Text', serif;
  text-align: center;
  font-style: italic;
  background-color: $white;
  .pink {
    color: $primary;
  }
  p {
    margin: 0;
  }
}
</style>
