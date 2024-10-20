<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentTheme = ref(localStorage.getItem("theme") || "light");

const switchTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  currentTheme.value = theme;
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    currentTheme.value = savedTheme;
  }
});
</script>

<template>
  <div class="navbar-end flex items-center space-x-2">
    <button
      @click="switchTheme('light')"
      :class="{ 'btn-primary': currentTheme === 'light' }"
      class="btn"
    >
      Light
    </button>
    <button
      @click="switchTheme('dark')"
      :class="{ 'btn-primary': currentTheme === 'dark' }"
      class="btn"
    >
      Dark
    </button>
    <button
      @click="switchTheme('customTheme')"
      :class="{ 'btn-primary': currentTheme === 'customTheme' }"
      class="btn"
    >
      Custom theme
    </button>
  </div>
</template>
