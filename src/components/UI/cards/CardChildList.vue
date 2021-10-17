<template>
  <div class="child-list">
    <div
      class="child-list-header"
      :class="isExpand ? 'border rounded-t border-b-0' : 'border rounded'"
    >
      <div class="child-list-button">
        <chevron-rigth-button v-if="!isExpand" @click="isExpand = !isExpand" />
        <expand-more-button-s v-if="isExpand" @click="isExpand = !isExpand" />
      </div>
      <div class="child-list-title">
        {{ header }}
      </div>
    </div>
    <div class="child-list-body" v-show="isExpand">
      <slot />
    </div>
    <div class="child-list-footer" v-if="footer">
      {{ footer }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "CardChildList",
  props: {
    header: {
      type: String,
      default: "header",
    },
    footer: {
      type: String,
    },
  },
  setup() {
    const isExpand = ref(true);
    return {
      isExpand,
    };
  },
};
</script>

<style lang="scss" scoped>
.child-list {
  // @apply ;
  .child-list-header {
    @apply flex gap-2 items-center;
    .child-list-button {
      @apply flex items-center;
    }
  }
  .child-list-body {
    @apply p-2 border rounded-b;
  }
}
</style>
