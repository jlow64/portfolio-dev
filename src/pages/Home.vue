<script setup lang="ts">
import { Icon } from "@iconify/vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { onMounted, ref } from "vue";
import { cn } from "@/lib/utils";
import data from "@/assets/json/homePageData.json";
import {
  colorBreathConfig,
  downArrowConfig,
  pageScrollConfig,
  fadeInFromToConfig,
  positionTargets,
  positionTimelineConfig,
  duration,
  cursorAnimation,
  textTimelineConfig,
} from "@/constants";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const pageData = ref(data);

// Animation Refs
const icon = ref();
const position = ref();
const introSection = ref();
const welcome = ref();
const cursor = ref();
const scrollPrompt = ref();
const totalCoach = ref();
const infosys = ref();

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
  gsap.context(() => {
    // Intro animation
    gsap.fromTo(
      introSection.value,
      fadeInFromToConfig.from,
      fadeInFromToConfig.to
    );

    // Cursor Animation
    gsap.to(cursor.value, cursorAnimation);

    // Position Animation
    let positionTimeline = gsap.timeline(positionTimelineConfig);
    positionTargets.forEach((item) => {
      let t1Text = gsap.timeline(textTimelineConfig);
      t1Text.to(position.value, {
        duration: duration,
        text: item,
      });
      positionTimeline.add(t1Text);
    });

    // Down arrow prompt animation
    gsap.to(icon.value, downArrowConfig);

    // Welcome color breathing animation
    gsap.fromTo(welcome.value, colorBreathConfig.from, colorBreathConfig.to);

    // Intro scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: introSection.value,
        ...pageScrollConfig,
      },
    });

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
  });
});
</script>
<template>
  <section id="home" :class="classes.section">
    <article
      id="test-text"
      ref="introSection"
      :class="cn(classes.article, 'gap-12')"
    >
      <div :class="cn(classes.code.container, classes.code.intro)">
        <pre
          :class="classes.code.pre"
          v-for="(data, index) in pageData.intro"
          :key="index"
          :data-prefix="data.prefix"
        ><code :class="classes.code.message"><span :ref="data.ref">{{ data.message }}</span><span ref="cursor" v-if="data.isCursor">_</span></code></pre>
      </div>
      <span ref="scrollPrompt" :class="classes.icon">
        <a ref="icon"
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
