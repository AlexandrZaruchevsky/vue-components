<template>
  <div>
    Inputs
    <overflow v-if="isShowCard">
      <div class="flex justify-center h-full items-start">
        <div class="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/4 mt-20">
          <card-drop-down
            class="bg-secondary-50 divide-y"
            @click.stop
            @close="isShowCard = false"
            header="Inputs"
          >
            <div class="divide-y">
              <form-person v-model="person" />
              <div class="p-2">
                <card-child-list header="Address">
                  <form-address v-model="address" />
                </card-child-list>
              </div>
              <div class="flex justify-end px-2 py-1 gap-2">
                <button-ok @click="clk" />
                <button-cancel />
              </div>
            </div>
          </card-drop-down>
        </div>
      </div>
    </overflow>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
export default {
  setup() {
    const isShowCard = ref(true);
    const person = reactive({
      lastName: "Ivanov",
      firstName: "Ivan",
      middleName: "Ivanovich",
      birthday: "1980-07-13",
    });
    const address = reactive({
      postIndex: "164110",
      country: "RF",
      region: "Arkhangelsk region",
      district: "Kargopol district",
      location: "Kargopol",
      street: "Forest",
    });

    const clk = () => {
      console.log({ ...person, ...address });
    };

    return {
      isShowCard,
      person,
      address,
      clk,
    };
  },
};
</script>

<style></style>
