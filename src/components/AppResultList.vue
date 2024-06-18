<script >
    import ResultItem from '../components/AppResultItem.vue';

    export default {
    name: 'ResultList',
    components: {
        ResultItem
  },
    props: {
        results: Array
  }
};
</script>

<template>

    <div>
    <ResultItem v-for="result in results" :key="result.id" :result="result"/>
    </div>

</template>

<style scoped>

</style>