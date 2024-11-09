<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

// css
const classes = ref({
  section: "flex flex-col justify-center items-center w-full h-screen z-50",
  form: {
    wrapper: "h-fit w-full lg:w-[400px] flex flex-col items-center gap-5 p-2",
    title: "text-2xl font-bold",
    container: "flex flex-col w-full gap-2",
    label: "form-control",
    subTitle: "label text-lg font-semibold",
    input: "input input-bordered w-full",
    textarea: "textarea textarea-bordered w-full resize-none",
    button: "btn",
  },
});

const toast = useToast();
const onSubmit = () => {
  // TODO: Next PR will need to create email functionality
  toast.success("Inquiry message sent!", { timeout: 2000 });
};
</script>
<template>
  <section id="contact-me" :class="classes.section">
    <div :class="classes.form.wrapper">
      <h1 :class="classes.form.title">Get in touch with me</h1>
      <form :class="classes.form.container" @submit.prevent="onSubmit">
        <label :class="classes.form.label">
          <span :class="classes.form.subTitle">Email</span>
          <input
            :class="classes.form.input"
            type="email"
            placeholder="your@email.com"
          />
        </label>
        <label :class="classes.form.label">
          <span :class="classes.form.subTitle">Message</span>
          <textarea
            :class="classes.form.textarea"
            placeholder="Enter your inquiries here"
          ></textarea>
        </label>
        <button :class="classes.form.button" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>
