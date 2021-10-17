<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 0 24 24"
    :width="width"
    :fill="currentColor"
    @mouseover="hover"
    @mouseout="mouseOut"
    class="text-center"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
  </svg>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "IChevronRigth",
  props: {
    color: {
      type: String,
      default: "#aaa",
    },
    colorHover: {
      type: String,
      default: "white",
    },
    height: {
      type: [Number, String],
      default: 20,
    },
    width: {
      type: [Number, String],
      default: 20,
    },
  },
  setup(props) {
    const currentColor = ref(props.color);
    const hover = () => {
      currentColor.value = props.colorHover;
    };
    const mouseOut = () => {
      currentColor.value = props.color;
    };
    return {
      currentColor,
      hover,
      mouseOut,
    };
  },
};
</script>
