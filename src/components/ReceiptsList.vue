<template>
  <div v-if="receiptsList.length > 0">
    <h2>List of receipts</h2>
    <transition-group name="receipts__list">
      <ReceiptItem
        v-for="receiptItem in receiptsList"
        :receiptItem="receiptItem"
        :key="receiptItem.id"
        @toggleFavorite="toggleFavorite"
      ></ReceiptItem>
    </transition-group>
  </div>
  <h2 v-else class="empty">List is empty...</h2>
</template>

<script>
import ReceiptItem from "./ReceiptItem.vue";

export default {
  components: { ReceiptItem },

  props: {
    receiptsList: {
      type: Array,
      required: true,
    },
  },

  methods: {
    toggleFavorite(item) {
      this.$emit("toggleFavorite", item);
    },
  },
};
</script>

<style scoped>
.empty {
  color: #ff5600;
}

.receipts__list-enter-active,
.receipts__list-leave-active {
  transition: all 0.2s ease;
}
.receipts__list-enter-from,
.receipts__list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.receipts__list-move {
  transition: transform 0.2s ease;
}
</style>
