<template>
    <div class="home">
        <v-btn :to="{ name: 'Home2'}">
            home2
        </v-btn>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "Home1",
};
</script>
