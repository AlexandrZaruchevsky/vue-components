<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">Header</div>
        <div class="card-header-button">
          <button-header @clickButton="$emit('close')">
            <i-x color="#bbb" colorHover="#eee" />
          </button-header>
        </div>
      </div>
      <div class="card-body">
        <slot />
      </div>
      <div v-if="footer" class="card-footer">
        {{ footer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    header: {
      type: String,
      default: "Header",
    },
    footer: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.card {
  @apply shadow-lg bg-opacity-10;
  .card-header {
    @apply flex justify-between items-center text-secondary-50 font-semibold p-2 bg-primary-800;
  }
  .card-body {
    @apply p-2;
  }
  .card-footer {
    @apply border-t py-1 px-2;
  }
}
.card-header {
  @apply flex justify-between font-semibold p-2 gap-2;
}
</style>
