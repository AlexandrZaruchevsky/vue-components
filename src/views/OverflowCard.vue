<template>
  <div :class="isShow?'no-scroll':''">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum
      dolor natus, repellat ex nihil architecto vero, blanditiis consequuntur in
      alias ea optio non fugiat cumque perspiciatis labore eligendi molestias?
      Deserunt eum, ad distinctio inventore illum possimus cumque voluptatem.
      Consequuntur, quidem, pariatur quos incidunt magnam aliquam tenetur fuga
      eaque mollitia sunt nisi quod repudiandae iusto optio voluptate vitae rem
      iure eius officiis neque. Debitis beatae culpa dicta explicabo sapiente
      adipisci vero dolorum aliquid deleniti perferendis suscipit quos aperiam,
      eveniet expedita assumenda dolor sit accusantium libero necessitatibus
      quis! Quo quam voluptatem praesentium nobis eveniet ullam fuga velit modi
      eaque? Nam, quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum
      dolor natus, repellat ex nihil architecto vero, blanditiis consequuntur in
      alias ea optio non fugiat cumque perspiciatis labore eligendi molestias?
      Deserunt eum, ad distinctio inventore illum possimus cumque voluptatem.
      Consequuntur, quidem, pariatur quos incidunt magnam aliquam tenetur fuga
      eaque mollitia sunt nisi quod repudiandae iusto optio voluptate vitae rem
      iure eius officiis neque. Debitis beatae culpa dicta explicabo sapiente
      adipisci vero dolorum aliquid deleniti perferendis suscipit quos aperiam,
      eveniet expedita assumenda dolor sit accusantium libero necessitatibus
      quis! Quo quam voluptatem praesentium nobis eveniet ullam fuga velit modi
      eaque? Nam, quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum
      dolor natus, repellat ex nihil architecto vero, blanditiis consequuntur in
      alias ea optio non fugiat cumque perspiciatis labore eligendi molestias?
      Deserunt eum, ad distinctio inventore illum possimus cumque voluptatem.
      Consequuntur, quidem, pariatur quos incidunt magnam aliquam tenetur fuga
      eaque mollitia sunt nisi quod repudiandae iusto optio voluptate vitae rem
      iure eius officiis neque. Debitis beatae culpa dicta explicabo sapiente
      adipisci vero dolorum aliquid deleniti perferendis suscipit quos aperiam,
      eveniet expedita assumenda dolor sit accusantium libero necessitatibus
      quis! Quo quam voluptatem praesentium nobis eveniet ullam fuga velit modi
      eaque? Nam, quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum
      dolor natus, repellat ex nihil architecto vero, blanditiis consequuntur in
      alias ea optio non fugiat cumque perspiciatis labore eligendi molestias?
      Deserunt eum, ad distinctio inventore illum possimus cumque voluptatem.
      Consequuntur, quidem, pariatur quos incidunt magnam aliquam tenetur fuga
      eaque mollitia sunt nisi quod repudiandae iusto optio voluptate vitae rem
      iure eius officiis neque. Debitis beatae culpa dicta explicabo sapiente
      adipisci vero dolorum aliquid deleniti perferendis suscipit quos aperiam,
      eveniet expedita assumenda dolor sit accusantium libero necessitatibus
      quis! Quo quam voluptatem praesentium nobis eveniet ullam fuga velit modi
      eaque? Nam, quos.
    </p>
  </div>
  <div
    class="bg-secondary-800 bg-opacity-40 fixed block h-full w-full top-0 overflow-y-auto"
    v-if="isShow"
  >
    <div class="flex justify-center">
      <div class="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-2/7">
        <card-drop-down
          :closeable="true"
          v-if="isShow"
          @close="isShow = false"
          class="bg-secondary-50"
        >
          <p class="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            numquam nostrum molestiae, laudantium excepturi, et nesciunt ipsum
            architecto sunt quasi asperiores perspiciatis, doloremque corrupti
            minus dolore reprehenderit earum quod pariatur.
          </p>
          <p class="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            numquam nostrum molestiae, laudantium excepturi, et nesciunt ipsum
            architecto sunt quasi asperiores perspiciatis, doloremque corrupti
            minus dolore reprehenderit earum quod pariatur.
          </p>
          <p class="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            numquam nostrum molestiae, laudantium excepturi, et nesciunt ipsum
            architecto sunt quasi asperiores perspiciatis, doloremque corrupti
            minus dolore reprehenderit earum quod pariatur.
          </p>
          <p class="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            numquam nostrum molestiae, laudantium excepturi, et nesciunt ipsum
            architecto sunt quasi asperiores perspiciatis, doloremque corrupti
            minus dolore reprehenderit earum quod pariatur.
          </p>
        </card-drop-down>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
};
</script>

<style lang="scss" scoped>
.no-scroll {
  @apply h-screen overflow-hidden;
}
</style>
