<script setup lang="ts">
import { Navbar } from "@/components";
import { Home, Projects, ContactMe } from "@/pages";
</script>

<template>
  <main class="flex flex-col p-2">
    <Navbar />
    <Home />
    <Projects />
    <ContactMe />
  </main>
</template>
