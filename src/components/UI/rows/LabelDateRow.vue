<template>
  <div class="flex flex-row gap-2 items-center">
    <label class="w-1/4" for="input">{{ labelValue }}</label>
    <input
      class="px-1 py-0.5 outline-none border-b focus:border-primary-700 w-3/4"
      type="date"
      v-model="input"
    />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
  name: "LabelDateRow",
  props: {
    labelValue: {
      type: String,
      default: "labelValue",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const input = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    return {
      input,
    };
  },
};
</script>

<style></style>
