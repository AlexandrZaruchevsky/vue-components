<template>
  <div class="list-table">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ListTable",
};
</script>

<style lang="scss" scoped>

.list-table{

  @apply p-2 flex flex-col gap-y-2;

}

</style>
