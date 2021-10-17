<template>
  <div
    class="bg-secondary-800 bg-opacity-40 absolute block h-full w-full top-0 overflow-y-auto"
    @click.stop
    @click="cl"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Overflow",
  setup(){
    const cl = ()=>{
      console.log("click on overflow");
    }
    return{
      cl
    }
  }
};
</script>

<style></style>
