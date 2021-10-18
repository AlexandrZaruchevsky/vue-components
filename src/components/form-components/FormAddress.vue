<template>
  <div>
    <div class="flex flex-col gap-y-0.5 text-secondary-800">
      <label-input-row labelValue="postIndex" v-model="address.postIndex" />
      <label-input-row labelValue="country" v-model="address.country" />
      <label-input-row labelValue="region" v-model="address.region" />
      <label-input-row labelValue="district" v-model="address.district" />
      <label-input-row labelValue="location" v-model="address.location" />
      <label-input-row labelValue="street" v-model="address.street" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "FormAddress",
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const address = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    return {
      address,
    };
  },
};
</script>

<style></style>
