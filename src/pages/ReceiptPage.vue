<template>
  <div>Receipt of {{ receipt.name }}</div>
  <div class="receipt">
    <div class="receipt__info">
      <div class="receipt__img-frame">
        <img class="receipt__img" :src="receipt.image" alt="dish photo" />
      </div>
      <div class="receipt__description">
        <div class="description__raw" v-if="receipt.instructions.length">
          <strong>Instructions of receipt:</strong>
          {{ receipt.instructions.join(" ") }}
        </div>
        <div class="description__raw" v-if="receipt.ingredients.length">
          <strong>Ingredients for receipt:</strong>
          {{ receipt.ingredients.join(", ") }}
        </div>
        <div class="description__raw" v-if="receipt.ingredients.length">
          <strong>Difficulty of receipt:</strong>
          {{ receipt.difficulty }}
        </div>
        <div class="description__raw" v-if="receipt.ingredients.length">
          <strong>Cuisine of receipt:</strong>
          {{ receipt.cuisine }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      receiptId: null,
      receipt: null,
    };
  },
  computed: {
    ...mapGetters({
      getReceiptById: "receipts/getReceiptById",
    }),
  },
  created() {
    this.receiptId = this.$route.params.id;
    this.receipt = this.getReceiptById(this.receiptId);
  },
};
</script>

<style scoped>
.receipt {
  margin-top: 15px;
  padding: 15px;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between;
  align-items: center; */
  gap: 10px;
  border: 2px solid #649ad0;
}

.receipt__info {
  display: flex;
  gap: 12px;
  overflow: hidden;
}

.receipt__img-frame {
  width: 180px;
  flex-shrink: 0;
  align-self: flex-start;
}

@media screen and (max-width: 748px) {
  .receipt__img-frame {
    width: 140px;
  }
}

@media screen and (max-width: 640px) {
  .receipt__img-frame {
    width: 140px;
    align-self: center;
  }
}

.receipt__description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.description__raw {
  text-align: start;
}
</style>
