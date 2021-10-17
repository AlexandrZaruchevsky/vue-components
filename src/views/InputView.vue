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
                  <div class="flex flex-col gap-y-0.5 text-secondary-800">
                    <label-input-row
                      labelValue="postIndex"
                      v-model="postIndex"
                    />
                    <label-input-row labelValue="country" v-model="country" />
                    <label-input-row labelValue="region" v-model="region" />
                    <label-input-row labelValue="district" v-model="district" />
                    <label-input-row labelValue="location" v-model="location" />
                    <label-input-row labelValue="street" v-model="street" />
                  </div>
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
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isShowCard = ref(true);

    const person =ref('');
    const postIndex = ref("");
    const country = ref("");
    const region = ref("");
    const district = ref("");
    const location = ref("");
    const street = ref("");

    const clk=()=>{
      console.log(person);
    }

    return {
      isShowCard,
      postIndex,
      country,
      region,
      district,
      location,
      street,
      person,
      clk
    };
  },
};
</script>

<style></style>
