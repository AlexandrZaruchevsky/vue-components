<template>
  <div class="card w-1/3 shadow-2xl">
    <div
      class="header text-secondary-50 font-medium px-2 py-0.5 bg-primary-800 bg-opacity-75"
    >
      Header
    </div>
    <div class="body p-2">
      <item-list v-model="person.lastName" />
      <item-list v-model="person.firstName" />
    </div>
    <div class="footer flex justify-between p-1">
      <button
        class="px-1.5 py-0.5 rounded hover:shadow-lg text-secondary-50 bg-info-500"
      >
        Ok
      </button>
      <button
        class="px-1.5 py-0.5 rounded hover:shadow-lg text-secondary-50 bg-secondary-500"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import ItemList from "./ItemList.vue";
export default {
  components: { ItemList },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits:['update:modelValue'],
  setup(props, {emit}) {
    const person = computed({
      get:()=>props.modelValue,
      set:(val) =>emit('update:modelValue', val)
    })
    return {
      person,
    };
  },
};
</script>

<style></style>
