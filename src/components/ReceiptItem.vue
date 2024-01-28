<template>
  <div>
    <div
      class="receipt"
      :class="{
        isFavorite: receiptItem.isFavorite,
      }"
    >
      <div class="receipt__info">
        <div class="receipt__img-frame">
          <img class="receipt__img" :src="receiptItem.image" alt="dish photo" />
        </div>
        <div class="receipt__description">
          <div class="description__raw">
            <strong>Id of receipt:</strong> {{ receiptItem.id }}
          </div>
          <div class="description__raw">
            <strong>Name of receipt:</strong> {{ receiptItem.name }}
          </div>
          <div class="description__raw" v-if="receiptItem.instructions.length">
            <strong>Instructions of receipt:</strong>
            {{ receiptItem.instructions.join(" ") }}
          </div>
          <div class="description__raw" v-if="receiptItem.ingredients.length">
            <strong>Ingredients for receipt:</strong>
            {{ receiptItem.ingredients.join(", ") }}
          </div>
        </div>
      </div>
      <div class="receipt__buttons">
        <ButtonCustom @click="$router.push(`/receipts/${receiptItem.id}`)"
          >learn more</ButtonCustom
        >
        <ButtonCustom @click="toggleFavorite" :isRed="true">{{
          receiptItem.isFavorite ? "Not favorite" : "Add favorite"
        }}</ButtonCustom>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    receiptItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggleFavorite", this.receiptItem);
    },
  },
};
</script>

<style scoped>
.receipt {
  margin-top: 15px;
  padding: 15px;
  display: flex;
  gap: 10px;
  border: 2px solid #cbe0f7;
}

/* @media screen and (max-width: 768px) { */
.receipt {
  flex-direction: column;
}
/* } */

.isFavorite {
  border: 2px solid rgb(255, 86, 80);
}

.receipt__info {
  display: flex;
  gap: 12px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .receipt__info {
    flex-direction: column;
    gap: 12px;
  }
}

.receipt__img-frame {
  width: 180px;
  flex-shrink: 0;
  align-self: flex-start;
}

@media screen and (max-width: 768px) {
  .receipt__img-frame {
    width: 100%;
  }
}

.receipt__description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.description__raw {
  text-align: start;
}

.receipt__buttons {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}

/* @media screen and (max-width: 768px) { */
.receipt__buttons {
  flex-direction: row;
  justify-content: space-between;
}

.receipt__buttons .button {
  flex: 50%;
}
/* } */
</style>
