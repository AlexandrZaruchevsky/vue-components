<template>
  <div>
    <div class="p-2 flex flex-col gap-2">
      <label-input-row
        labelValue="lastName"
        v-model="person.lastName"
        @input="$emit('update:modelValue', person)"
      />
      <label-input-row
        labelValue="firstName"
        v-model="person.firstName"
        @input="$emit('update:modelValue', person)"
      />
      <label-input-row
        labelValue="middleName"
        v-model="person.middleName"
        @input="$emit('update:modelValue', person)"
      />
      <label-date-row
        labelValue="birthday"
        v-model="person.birthday"
        @input="$emit('update:modelValue', person)"
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  name: "FormPerson",
  setup() {
    const lastName = ref("");
    const firstName = ref("");
    const middleName = ref("");
    const birthday = ref("");

    const person = reactive({
      lastName: "",
      firstName: "",
      middleName: "",
      birthday: "",
    });

    watch(person, (newPerson) => {
      console.log(newPerson);
    });

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

<style></style>
