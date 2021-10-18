<template>
  <div class="item-list flex gap-2">
    <label class="w-1/4" for="input">{{ labelValue }}</label>
    <input
      class="w-3/4 px-2"
      type="text"
      name="input"
      id="input"
      v-model="inputValue"
    />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "ItemList",
  props: {
    labelValue: {
      type: String,
      default: () => "LABEL",
    },
    modelValue: {
      type: String,
      default: () => "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });

    onMounted(() => {
      console.log(props.modelValue);
    });

    return {
      inputValue,
    };
  },
};
</script>

<style></style>
