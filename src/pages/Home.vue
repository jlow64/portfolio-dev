<script setup lang="ts">
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { onMounted, onUnmounted, ref } from "vue";
import { cn } from "@/lib/utils";
import data from "@/assets/json/homePageData.json";
import {
  colorBreathConfig,
  downArrowConfig,
  pageScrollConfig,
  fadeInFromToConfig,
  positionTimelineConfig,
  duration,
  cursorAnimation,
  textTimelineConfig,
} from "@/constants";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const pageData = ref(data);
let ctx: gsap.Context;

// Animation Refs
const intro = ref();
const totalCoach = ref();
const infosys = ref();

const positionsArray = [
  "Software Developer.",
  "Software Engineer.",
  "React Enjoyer.",
  "Vue Learner.",
];

// css
const classes = ref({
  section: "h-screen-db",
  article: "h-1/2 flex flex-col justify-center items-center",
  icon: "flex flex-row",
  code: {
    container: "mockup-code max-w-4xl",
    intro: "text-lg lg:text-2xl",
    experience: "text-sm lg:text-lg",
    pre: "flex flex-1 flex-row min-h-7 text-wrap",
    message: "flex flex-1",
  },
});

onMounted(() => {
  // Intro animation
  ctx = gsap.context((self) => {
    // Intro animation
    if (self.selector) {
      // Intro fade in animation
      const introWrapper = self.selector("#intro-wrapper");
      gsap.fromTo(introWrapper, fadeInFromToConfig.from, fadeInFromToConfig.to);

      // Intro scroll animation
      gsap.timeline({
        scrollTrigger: {
          trigger: introWrapper,
          ...pageScrollConfig,
        },
      });

      // Welcome color breathing animation
      const welcome = self.selector("#welcome");
      gsap.fromTo(welcome, colorBreathConfig.from, colorBreathConfig.to);

      // Positions Animation
      const position = self.selector("#position");
      let positionTimeline = gsap.timeline(positionTimelineConfig);
      positionsArray.forEach((item) => {
        let t1Text = gsap.timeline(textTimelineConfig);
        t1Text.to(position, {
          duration: duration,
          text: item,
        });
        positionTimeline.add(t1Text);
      });

      // Cursor Animation
      const cursor = self.selector("#cursor");
      gsap.to(cursor, cursorAnimation);

      // Down arrow prompt animation
      const icon = self.selector("#icon");
      gsap.to(icon, downArrowConfig);
    }

    // TotalCoach scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: totalCoach.value,
        ...pageScrollConfig,
      },
    });

    // Infosys scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: infosys.value,
        ...pageScrollConfig,
      },
    });
  }, intro.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>
<template>
  <section id="home" ref="intro" :class="classes.section">
    <article id="intro-wrapper" :class="cn(classes.article, 'gap-12')">
      <div :class="cn(classes.code.container, classes.code.intro)">
        <pre
          :class="classes.code.pre"
          v-for="(data, index) in pageData.intro"
          :key="index"
          :data-prefix="data.prefix"
        ><code :class="classes.code.message"><span :id="data.id">{{ data.message }}</span><span id="cursor" v-if="data.isCursor">_</span></code></pre>
      </div>
      <span :class="classes.icon">
        <a id="icon"
          ><Icon icon="radix-icons:double-arrow-down" height="3rem"
        /></a>
      </span>
    </article>
  </section>
  <section ref="totalCoach" :class="classes.section">
    <article :class="classes.article">
      <div :class="cn(classes.code.container, classes.code.experience)">
        <pre
          :class="classes.code.pre"
          v-for="(data, index) in pageData.totalCoach"
          :key="index"
          :data-prefix="data.prefix"
        ><code :class="classes.code.message">{{ data.message }}</code></pre>
      </div>
    </article>
  </section>
  <section ref="infosys" :class="classes.section">
    <article :class="classes.article">
      <div :class="cn(classes.code.container, classes.code.experience)">
        <pre
          :class="classes.code.pre"
          v-for="(data, index) in pageData.infosys"
          :key="index"
          :data-prefix="data.prefix"
        ><code :class="classes.code.message">{{ data.message }}</code></pre>
      </div>
    </article>
  </section>
</template>
