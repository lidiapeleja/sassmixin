<template>
  <footer class="container-fluid">
    <div class="section mb-5">
      <p>Coded with <span class="pink">love</span> & VueJS by <a class="pink text-bold" href="https://lidiapeleja.com">Lídia Pelejà</a></p>
      <p>
        All rights reserved · <span>{{ new Date().getFullYear() }}</span>
      </p>
    </div>
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
  .pink {
    color: $primary;
  }
}
</style>
