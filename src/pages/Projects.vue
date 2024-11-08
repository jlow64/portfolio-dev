<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { Icon } from "@iconify/vue";

gsap.registerPlugin(Draggable);

const projects = ref();
const construction = ref();
const gear = ref();
const hammer = ref();

onMounted(() => {
  // Infosys scroll animation
  gsap.timeline({
    scrollTrigger: {
      trigger: projects.value,
      scrub: 2,
      pin: true,
      start: "top top",
      end: "+=100%",
      toggleActions: "play none none reverse",
    },
  });

  // Gear spinning animation
  gsap.to(gear.value, { duration: 1.7, rotateZ: 180, repeat: -1 });
  Draggable.create(gear.value, {
    type: "x,y",
    bounds: projects.value,
    inertia: true,
    throwProps: true,
    onDragEnd: () => {
      gsap.to(gear.value, { x: 0, y: 0 });
    },
  });

  // Hammer action animation
  gsap.to(hammer.value, {
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

  Draggable.create(hammer.value, {
    type: "x,y",
    bounds: projects.value,
    inertia: true,
    throwProps: true,
    onDragEnd: () => {
      gsap.to(hammer.value, { x: 0, y: 0 });
    },
  });

  // Construction text animation
  Draggable.create(construction.value, {
    type: "x,y",
    bounds: projects.value,
    inertia: true,
    throwProps: true,
    onDragEnd: () => {
      gsap.to(construction.value, { x: 0, y: 0 });
    },
  });
});
</script>
<template>
  <section
    id="projects"
    ref="projects"
    class="flex flex-col justify-center items-center size-full min-h-screen gap-2"
  >
    <div class="flex flex-row gap-2">
      <a ref="gear">
        <Icon icon="mdi:gear" height="48" />
      </a>

      <a ref="hammer">
        <Icon icon="mingcute:hammer-fill" height="48" />
      </a>
    </div>
    <h1 ref="construction" class="text-xl font-bold">
      Projects In Construction
    </h1>
  </section>
  <div class="h-screen"></div>
</template>
