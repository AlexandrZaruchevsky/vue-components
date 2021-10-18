<template>
  <div class="p-2 flex flex-col gap-2">
    <label-input-row
      labelValue="lastName"
      :defaultValue="lastName"
      v-model="lastName"
      @input="$emit('update:modelValue', person)"
    />
    <label-input-row
      labelValue="firstName"
      :defaultValue="firstName"
      v-model="firstName"
      @input="$emit('update:modelValue', person)"
    />
    <label-input-row
      labelValue="lastName"
      :defaultValue="middleName"
      v-model="middleName"
      @input="$emit('update:modelValue', person)"
    />
    <label-date-row
      labelValue="birthday"
      :defaultValue="birthday"
      v-model="birthday"
      @input="$emit('update:modelValue', person)"
    />
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "FormPerson",
  props: {
    personDefault: {
      type: Object,
    },
    clearObject: {
      type: Function,
    },
  },
  emits: ["clearEmit","update:modelValue"],
  setup(props, { emit }) {
    const lastName = ref(props.personDefault.lastName);
    const firstName = ref(props.personDefault.firstName);
    const middleName = ref(props.personDefault.middleName);
    const birthday = ref(props.personDefault.birthday);

    const person = computed(() => {
      return {
        lastName: lastName.value,
        firstName: firstName.value,
        middleName: middleName.value,
        birthday: birthday.value,
      };
    });

    const ccl=()=>{
        lastName.value = "";
        firstName.value = "";
        middleName.value = "";
        birthday.value = "";
        console.log("Hi emit");

    }

    onMounted(() => {
      emit("clearEmit", ()=>ccl);
    });

    // const clearObject = () => {
    //   lastName.value = "";
    //   firstName.value = "";
    //   middleName.value = "";
    //   birthday.value = "";
    // };

    return {
      lastName,
      firstName,
      middleName,
      birthday,
      person,
    };
  },
};
</script>
