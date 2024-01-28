<template>
  <NavBar />
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  width: 100%;
  border-style: none;
  /* height: 100%; */
}

ul,
li {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  list-style: none;
  color: inherit;
}

textarea:focus,
input:focus {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1150px;
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  .container {
    max-width: 95%;
  }
}
</style>
