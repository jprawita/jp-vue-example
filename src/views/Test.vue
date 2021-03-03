<template>
    <div>
        <h1>test</h1>
    </div>
</template>

<script>
export default {
    name: "Test",

    mounted() {
        // this.allRouter();
    },

    methods: {
        allRouter() {
            // let data = this.$route.path.split("/");
            let data = this.$route.matched
            console.log(data);
        },
    },
};
</script>

<style scoped>
</style>