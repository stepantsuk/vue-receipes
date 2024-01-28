<template>
  <button
    class="button"
    :class="{
      red: isRed,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonCustom",
  props: {
    isRed: Boolean,
  },
};
</script>

<style scoped>
.button {
  display: block;
  background-color: #0d58a6;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
}

.red {
  background-color: #ff5600;
}

.button:hover {
  -webkit-box-shadow: 2px 2px 0px 0px #649ad0;
  -moz-box-shadow: 2px 2px 0px 0px #649ad0;
  box-shadow: 2px 2px 0px 0px #649ad0;
}

.button:active {
  transform: translate(1px, 1px);
  -webkit-box-shadow: 1px 1px 0px 0px #649ad0;
  -moz-box-shadow: 1px 1px 0px 0px #649ad0;
  box-shadow: 1px 1px 0px 0px #649ad0;
}

.red:hover {
  -webkit-box-shadow: 2px 2px 0px 0px rgba(139, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 0px 0px rgba(139, 0, 0, 0.3);
  box-shadow: 2px 2px 0px 0px rgba(139, 0, 0, 0.3);
}

.red:active {
  transform: translate(1px, 1px);
  -webkit-box-shadow: 1px 1px 0px 0px rgba(139, 0, 0, 0.3);
  -moz-box-shadow: 1px 1px 0px 0px rgba(139, 0, 0, 0.3);
  box-shadow: 1px 1px 0px 0px rgba(139, 0, 0, 0.3);
}
</style>
