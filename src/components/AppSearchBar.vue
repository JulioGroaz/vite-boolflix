<script >

export default {
  name: 'SearchBar',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    }
  }
};

</script>

<template>
    <div>
    <input v-model="query" @keyup.enter="search" placeholder="Search for a movie or TV show">
    <button @click="search">Search</button>
  </div>
</template>

<style scoped>

</style>