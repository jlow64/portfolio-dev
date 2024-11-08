import { createApp } from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import "vue-toastification/dist/index.css";
import "./style.css";

createApp(App)
  .use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    newestOnTop: true,
  })
  .mount("#app");
