<template>
  <div class="flex flex-row gap-2 items-center">
    <label class="w-1/4" for="input">{{ labelValue }}</label>
    <input
      class="px-1 py-0.5 outline-none border-b focus:border-primary-700 w-3/4"
      type="text"
      :placeholder="placeholder"
      v-model="input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "LabelInputRow",
  props: {
    labelValue: {
      type: String,
      default: "labelValue"
    },
    placeholder: {
      type: String,
    },
  },
  setup() {
    const input = ref("");
    return {
      input,
    };
  },
};
</script>

<style></style>
