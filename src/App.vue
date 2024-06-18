<script >
import SearchBar from './components/AppSearchBar.vue';
import ResultList from './components/AppResultList.vue';
import { searchMoviesAndTVShows } from '../src/services/apiService';

export default {
  name: 'App',
  components: {
    SearchBar,
    ResultList
  },
  data() {
    return {
      results: []
    };
  },
  methods: {
    handleSearch(query) {
      searchMoviesAndTVShows(query)
        .then(results => {
          this.results = results;
        })
        .catch(error => {
          console.error('Error', error);
        });
    }
  }
};
</script>

<template>
  <div id="app">
    <SearchBar @search="handleSearch"/>
    <ResultList :results="results"/>
  </div>
</template>

<style scoped>

</style>
