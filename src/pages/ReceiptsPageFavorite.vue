<template>
  <div class="container">
    <div class="container__column">
      <h1 class="main__title">My favorites dishes !</h1>
      <ReceiptsList
        :receiptsList="getFavoritesRecipts"
        @toggleFavorite="toggleFavorite"
      ></ReceiptsList>
    </div>
  </div>
</template>

<script>
import ReceiptsList from "@/components/ReceiptsList.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ReceiptsList,
  },

  methods: {
    ...mapMutations({
      toggleFavorite: "receipts/toggleFavorite",
    }),
  },
  computed: {
    ...mapGetters({
      getFavoritesRecipts: "receipts/getFavoritesRecipts",
    }),
  },
};
</script>

<style>
.app__controlls {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.main__title {
  text-align: center;
}
</style>
