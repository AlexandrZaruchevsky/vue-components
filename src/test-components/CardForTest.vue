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
      <item-combo-box :options="options" v-model="gender" />
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
import { computed, ref } from "@vue/reactivity";
import ItemList from "./ItemList.vue";
import ItemComboBox from "./ItemComboBox.vue";
import { watch } from "@vue/runtime-core";
export default {
  components: { ItemList, ItemComboBox },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const gender = ref("Man");
    const options = ref([
      { value: "Man", name: "Man" },
      { value: "Woman", name: "Woman" },
    ]);
    const person = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    watch(gender, (newGender) => {
      console.log(newGender);
    });
    return {
      person,
      gender,
      options,
    };
  },
};
</script>

<style></style>
