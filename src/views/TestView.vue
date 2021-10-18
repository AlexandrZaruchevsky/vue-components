<template>
  <div class="flex justify-center pt-20">
    <card-for-test v-model="person" />
    <div class="m-10">
      <button class="py-2 px-1 border bg-info-200" @click="clear">Clear</button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import CardForTest from '../test-components/CardForTest.vue'
export default {
  components: { CardForTest },
  setup(){
    const person = reactive({
      lastName:"Ivanov",
      firstName:"Ivan"
    })

    const clear = ()=>{
      console.log(person);
    }

    return{
      person,
      clear
    }
  }

}
</script>

<style>

</style>