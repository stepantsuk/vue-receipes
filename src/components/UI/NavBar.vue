<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar__list">
        <li>
          <ButtonCustom @click="$router.push('/')">Main</ButtonCustom>
        </li>
        <li>
          <ButtonCustom @click="$router.push('/receipts')"
            >Receipts</ButtonCustom
          >
        </li>
        <li>
          <ButtonCustom @click="$router.push('/favorites')"
            >Favorites</ButtonCustom
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  padding: 12px;
  background-color: #cbe0f7;
}
.navbar__list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}
</style>
