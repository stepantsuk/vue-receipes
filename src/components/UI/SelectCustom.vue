<template>
  <select :value="modelValue" @change="selectOption">
    <option disabled value="">Your choose...</option>
    <option
      v-for="option in sortingOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectCustom",
  props: {
    modelValue: {
      type: String,
    },
    sortingOptions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    selectOption(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped></style>
