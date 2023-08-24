<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/todos">todos</router-link>
   <!--  <router-link to="/todo">todo</router-link> -->
  </nav>
  <router-view/>
</template>

<style lang="scss">


nav {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;


  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
