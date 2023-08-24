<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/databinding">Databinding</router-link> |
        <router-link to="/nested">Nested</router-link> |
        <router-link to="/parent">Parent</router-link> |
        <router-link to="/parent2">Parent2</router-link> |
        <router-link to="/parent3">Parent3</router-link> |
        <router-link to="/parent4">Parent4</router-link> |
        <router-link to="/parent5">Parent5</router-link> |
        <router-link to="/composition">composition</router-link> |
        <router-link to="/provide">provide</router-link> |
        <router-link to="/inject">inject</router-link>
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
