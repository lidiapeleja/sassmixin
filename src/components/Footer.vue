<template>
  <footer class="p-section container-fluid">
   <div>
     <p>Coded with love & VueJS by Lídia Pelejà</p>
     <p>All rights reserved · <span>{{ new Date().getFullYear() }}</span>
</p>
   </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {
  font-family: 'Crismon Text', serif;
  text-align: center;
  font-style: italic;
}
</style>
