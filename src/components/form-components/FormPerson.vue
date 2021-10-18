<template>
  <div class="p-2 flex flex-col gap-2">
    <label-input-row labelValue="lastName" v-model="person.lastName" />
    <label-input-row labelValue="firstName" v-model="person.firstName" />
    <label-input-row labelValue="lastName" v-model="person.middleName" />
    <label-date-row labelValue="birthday" v-model="person.birthday" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "FormPerson",
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const person = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    return {
      person,
    };
  },
};
</script>
