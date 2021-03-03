<template>
    <div>
        <h1>user</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User",

       mounted () {
            // this.allRouter();
        },

        methods: {
            allRouter() {
                // let data = this.$route.path.split('/')
                let data = this.$route.matched
                console.log(data)
            }
        },
    }
</script>

<style scoped>

</style>