<template>
  <section class="flex flex-col justify-center items-center size-full gap-2">
    <div class="flex flex-row gap-2">
      <a ref="gear">
        <Icon icon="mdi:gear" height="48" />
      </a>

      <a ref="hammer">
        <Icon icon="mingcute:hammer-fill" height="48" />
      </a>
    </div>
    <h1 class="text-xl font-bold">In Construction</h1>
  </section>
</template>
<script>
import { gsap } from "gsap";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  mounted() {
    gsap.to(this.$.refs.gear, { duration: 1.7, rotateZ: 180, repeat: -1 });
    gsap.to(this.$.refs.hammer, {
      ease: "power1.in",
      duration: 0.5,
      rotation: -70,
      transformOrigin: "right middle",
      x: -3,
      y: 15,
      repeat: -1,
      yoyo: true,
      yoyoEase: "power1.out",
    });
  },
};
</script>
