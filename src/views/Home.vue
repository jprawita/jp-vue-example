<template>
    <div class="home">
        <span v-for="(n, i) in mapTest" :key="i" @click="toLink(n.breadCrumb.link)">
            {{ n.breadCrumb.name }} >
        </span><br>

        <v-btn @click="toLink('/home1')">
            home1
        </v-btn>
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",

    data () {
        return {
            map: '',
            mapTest: '',
        };
    },

    components: {
        // 
    },

    mounted() {
        this.routerPath();
    },

    methods: {
        allRouter() {
            // let data = this.$route.path.split("/");
            let data = this.$route.matched
            console.log(data);
        },
        routerPath() {
            let data = []
            for (var i = 0; i < this.$route.matched.length; i++) {
                data.push(this.$route.matched[i].meta)
            }

            this.mapTest = data
            console.log(data)
        },
        toLink(n) {
            this.$router.push({ path: n })
            this.routerPath()
        }
    },
};
</script>
