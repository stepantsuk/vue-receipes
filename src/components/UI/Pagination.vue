<template>
  <ul class="pagination__frame">
    <li
      class="pagination__item"
      :class="{
        active: num === currentPage,
      }"
      v-for="num in totalCount"
      :key="num"
      @click="changePage(num)"
    >
      {{ num }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalCount: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  methods: {
    changePage(num) {
      this.$emit("changePage", num);
    },
  },
};
</script>

<style scoped>
.pagination__frame {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.pagination__item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid darkcyan;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
}

.pagination__item:hover {
  -webkit-box-shadow: 4px 4px 0px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 0px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 0px 0px rgba(34, 60, 80, 0.2);
}

.active {
  background-color: #cbe0f7;
  color: white;
}
</style>
