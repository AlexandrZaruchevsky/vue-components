<template>
  <div class="flex justify-between gap-2">
    <span>{{ title }}</span>
    <strong class="value" v-if="complete">{{ count }}</strong>
    <span class="value" v-else>
      <i-spin color="red" />
    </span>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  name: "StatisticRow",
  props: {
    title: {
      type: String,
      default: "title",
    },
    getCount: {
      type: Function,
      // required:true
    },
  },
  setup(props) {
    const complete = ref(false);
    const count = ref(0);

    onMounted(() => {
      props.getCount().then((data) => {
          count.value = data.length;
          complete.value = true;
      });
    });
    return { complete, count };
  },
};
</script>
