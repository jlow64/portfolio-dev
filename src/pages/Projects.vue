<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { Icon } from "@iconify/vue";

gsap.registerPlugin(Draggable);

let ctx: gsap.Context;

const projects = ref();

// css
const classes = ref({
  section: "h-screen-db",
  article: "h-1/2 flex flex-col justify-center items-center",
  icons: "flex flex-row gap-2",
  construction: "text-xl font-bold",
});

onMounted(() => {
  ctx = gsap.context((self) => {
    // Projects scroll animation
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

    if (self.selector) {
      // Gear spinning animation
      const gear = self.selector("#gear");
      gsap.to(gear, {
        duration: 1.7,
        rotateZ: 180,
        repeat: -1,
      });
      Draggable.create(gear, {
        type: "x,y",
        bounds: projects.value,
        inertia: true,
        throwProps: true,
        onDragEnd: () => {
          gsap.to(gear, { x: 0, y: 0 });
        },
      });

      // Hammer action animation
      const hammer = self.selector("#hammer");
      gsap.to(hammer, {
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

      Draggable.create(hammer, {
        type: "x,y",
        bounds: projects.value,
        inertia: true,
        throwProps: true,
        onDragEnd: () => {
          gsap.to(hammer, { x: 0, y: 0 });
        },
      });

      // Construction text animation
      const construction = self.selector("#construction");
      Draggable.create(construction, {
        type: "x,y",
        bounds: projects.value,
        inertia: true,
        throwProps: true,
        onDragEnd: () => {
          gsap.to(construction, { x: 0, y: 0 });
        },
      });
    }
  }, projects.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
<template>
  <section id="projects" ref="projects" :class="classes.section">
    <article :class="classes.article">
      <div :class="classes.icons">
        <a id="gear">
          <Icon icon="mdi:gear" height="48" />
        </a>
        <a id="hammer">
          <Icon icon="mingcute:hammer-fill" height="48" />
        </a>
      </div>
      <h1 id="construction" :class="classes.construction">
        Projects In Construction
      </h1>
    </article>
  </section>
</template>
