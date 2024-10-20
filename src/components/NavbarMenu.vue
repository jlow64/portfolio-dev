<script>
export default {
  computed: {
    navBarColor() {
      if (this.$route.path === "/home") {
        // if it is a dark route
        return "#fff"; // basically any light color you want
      }
      return "#000"; // the dark color of your choice.
    },
  },
};
</script>
<template>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li
        class="rounded-md text-md p-2"
        :class="{ selected: $route.name === 'Home' }"
      >
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="rounded-md text-md p-2"
        :class="{ selected: $route.name === 'Projects' }"
      >
        <router-link :to="{ name: 'Projects' }"> Projects</router-link>
      </li>
      <li
        class="rounded-md text-md p-2"
        :class="{ selected: $route.name === 'Contact me' }"
      >
        <router-link :to="{ name: 'Contact me' }">Contact me</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  &.selected {
    color: white;
  }
}
</style>
