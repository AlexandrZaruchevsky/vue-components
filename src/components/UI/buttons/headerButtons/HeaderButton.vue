<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: "HeaderButton",
};
</script>

<style lang="scss" scoped>
button{
  @apply focus:outline-none;
}
</style>
