<template>
  <div class="flex items-start gap-2 justify-center pt-20">
    <card-drop-down
      v-if="isShow"
      @close="closeForm"
      header="Statistics"
      class="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4"
    >
      <div class="flex flex-col gap-2">
        <statistic-row
          :getCount="getCountB"
          title="Count record from table Clients"
          class="border-b w-full"
        />
        <statistic-row
          :getCount="getCountA"
          title="Count records from table Terrs"
          class="border-b"
        />
      </div>
    </card-drop-down>
    <button @click="isShow = !isShow">OK</button>
    <card-drop-down :closeable="false">
      <statistic-row
        :getCount="getCountB"
        title="Count record from table Clients"
        class="border-b w-full"
      />
      <statistic-row
        :getCount="getCountA"
        title="Count records from table Terrs"
        class="border-b"
      />
    </card-drop-down>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
export default {
  name: "MainView",
  setup() {
    const isShow = ref(true);
    const closeForm = () => {
      isShow.value = false;
    };

    const getCountB = async () => {
      const count = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      return count.data;
    };

    const getCountA = async () => {
      const count = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return count.data;
    };

    onMounted(async () => {});
    return {
      closeForm,
      isShow,
      getCountA,
      getCountB,
    };
  },
};
</script>

<style lang="scss"></style>
