<script >
    import { getFlag } from '../services/flegService';

    export default {
        name: 'ResultItem',
        props: {
            result: Object
        },
        methods: {
            getFlag
        }
    };
</script>

<template>
    <div>
    <h3>{{ result.title || result.name }}</h3>
    <p>{{ result.original_title || result.original_name }}</p>
    <p><img :src="getFlag(result.original_language)" alt="flag"> {{ result.original_language }}</p>
    <p>{{ result.vote_average }}</p>
  </div>
</template>

<style scoped>

</style>