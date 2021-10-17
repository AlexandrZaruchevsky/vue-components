<template>
  <div class="card-secondary">
    <div class="card-header">
      <div class="card-header-title">{{ header }}</div>
      <div class="card-header-buttons">
        <expand-less-button @click="changeLess" v-if="!isCardLess" />
        <expand-more-button @click="changeLess" v-if="isCardLess" />
        <header-button-close @click="$emit('close')" v-if="closeable" />
      </div>
    </div>
    <div class="card-body" v-show="!isCardLess">
      <slot />
    </div>
    <div class="card-footer">{{ footer }}</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "CardDropDown",
  props: {
    header: {
      type: String,
      default: "Header",
    },
    closeable: {
      type: [String, Boolean],
      default: true,
    },
    footer: {
      type: String,
    },
  },
  setup() {
    const isCardLess = ref(false);
    const changeLess = () => {
      isCardLess.value = !isCardLess.value;
    };
    return {
      isCardLess,
      changeLess,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-secondary {
  min-width: 300px;
  @apply shadow;
  .card-header {
    @apply flex justify-between py-1 px-2 bg-primary-800 text-secondary-50;
  }
  .card-header-title {
  }
  .card-header-buttons {
    @apply flex justify-between;
  }
  .card-body {
    @apply p-1;
  }
}
</style>
