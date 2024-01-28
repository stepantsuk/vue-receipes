<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "InputCustom",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
  // watch: {
  //   modelValue(newValue) {
  //     console.log(newValue);
  //   },
  // },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid #0D58A6;
  padding: 10px;
}

.input:focus {
  -webkit-box-shadow: 2px 2px 0px 0px #649ad0;
  -moz-box-shadow: 2px 2px 0px 0px #649ad0;
  box-shadow: 2px 2px 0px 0px #649ad0;
}
</style>
