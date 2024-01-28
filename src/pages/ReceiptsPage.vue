<template>
  <div class="container">
    <div class="container__column">
      <h1 class="main__title">ReceiptsPage</h1>
      <div class="app__controlls">
        <SelectCustom
          :modelValue="selectedOption"
          @update:modelValue="setSelectedOption"
          :sortingOptions="sortingOptions"
        />
      </div>
      <InputCustom
        :modelValue="searchQuery"
        @update:modelValue="setSearchQuery"
        placeholder="Search..."
      />
      <ReceiptsList
        :receiptsList="sortedAndSearched"
        @toggleFavorite="toggleFavorite"
      ></ReceiptsList>
      <ButtonCustom v-if="receipts.length < totalRecipts" @click="fetchReceipts"
        >Load more</ButtonCustom
      >
      <h2 v-if="isDataLoading && receipts.length === 0">Loading...</h2>
    </div>
  </div>
</template>

<script>
import ReceiptsList from "@/components/ReceiptsList.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ReceiptsList,
  },

  methods: {
    ...mapMutations({
      setSearchQuery: "receipts/setSearchQuery",
      setSelectedOption: "receipts/setSelectedOption",
      toggleFavorite: "receipts/toggleFavorite",
    }),

    ...mapActions({
      fetchReceipts: "receipts/fetchReceipts",
      fetchAdditionalReceipts: "receipts/fetchAdditionalReceipts",
    }),
  },
  mounted() {
    this.fetchReceipts();
  },
  computed: {
    ...mapState({
      receipts: (state) => state.receipts.receipts,
      isDataLoading: (state) => state.receipts.isDataLoading,
      selectedOption: (state) => state.receipts.selectedOption,
      searchQuery: (state) => state.receipts.searchQuery,
      totalRecipts: (state) => state.receipts.totalRecipts,
      sortingOptions: (state) => state.receipts.sortingOptions,
    }),
    ...mapGetters({
      sortedReceipts: "receipts/sortedReceipts",
      sortedAndSearched: "receipts/sortedAndSearched",
    }),
  },
};
</script>

<style>
.container__column {
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  padding: 12px;
}

.app__controlls {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.main__title {
  text-align: center;
}
</style>
