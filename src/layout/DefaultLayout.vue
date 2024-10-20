<script setup lang="ts">
import { Navbar } from "@/components";
</script>

<template>
  <main class="flex flex-col h-screen">
    <Navbar />
    <router-view />
  </main>
</template>
