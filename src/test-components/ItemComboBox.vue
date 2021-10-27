<template>
  <div class="flex gap-2">
    <label class="w-1/4" for="select">LABEL</label>
    <select class="w-3/4" name="select" id="select" v-model="selected">
      <option value="null" disabled>Choice</option>
      <option v-for="(option) of options" :key="option.value" :value="option.value">{{option.name}}</option>
    </select>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "ItemComboBox",
  props: {
    modelValue: {
      type: [String, Number],
      default: -1,
    },
    options:{
      type: Array,
      default:()=>[]
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selected = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    return{selected}
  },
};
</script>

<style></style>
