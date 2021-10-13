<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    viewBox="0 0 20 20"
    :width="width"
    :fill="currentColor"
    @mouseover="hover"
    @mouseout="mouseOut"
  >
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </svg>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "IExpandMore",
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
