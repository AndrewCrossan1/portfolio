<template>
    <div id="SearchBar">
        
    </div>
</template>

<style>
</style>

<script>
    export default {
        name: "SearchBar",
        data() {
            return {
                search: '',
            }
        },
        methods: {
            search() {
                console.log("You searched for: " + this.search)
            }
        }
    }
</script>