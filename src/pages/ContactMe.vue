<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const form = ref();

// css
const classes = ref({
  section: "flex flex-col justify-center items-center w-full h-screen z-50",
  form: {
    wrapper: "h-fit w-full lg:w-[400px] flex flex-col items-center gap-5 p-2",
    title: "text-2xl font-bold",
    container: "flex flex-col w-full gap-2",
    doubleCol: "flex flex-row gap-2",
    label: "form-control flex-1",
    subTitle: "label text-lg font-semibold",
    input: "input input-bordered w-full",
    textarea: "textarea textarea-bordered w-full resize-none",
    button: "btn",
  },
});

const toast = useToast();
const onSubmit = () => {
  emailjs.sendForm(serviceId, emailTemplate, form.value, emailPublicKey).then(
    () => {
      toast.success("Inquiry message sent!", { timeout: 2000 });
      form.value.reset();
    },
    (error) => {
      toast.error(error ?? "Unable to send message. Please try again.");
    }
  );
};
</script>
<template>
  <section id="contact-me" :class="classes.section">
    <div :class="classes.form.wrapper">
      <h1 :class="classes.form.title">Get in touch with me</h1>
      <form
        ref="form"
        :class="classes.form.container"
        @submit.prevent="onSubmit"
      >
        <div :class="classes.form.doubleCol">
          <label :class="classes.form.label">
            <span :class="classes.form.subTitle">Name</span>
            <input
              :class="classes.form.input"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
          </label>
          <label :class="classes.form.label">
            <span :class="classes.form.subTitle">Subject</span>
            <input
              :class="classes.form.input"
              type="text"
              placeholder="Inquiry"
              name="subject"
              required
            />
          </label>
        </div>
        <label :class="classes.form.label">
          <span :class="classes.form.subTitle">Email</span>
          <input
            :class="classes.form.input"
            type="email"
            placeholder="your@email.com"
            name="email"
            required
          />
        </label>
        <label :class="classes.form.label">
          <span :class="classes.form.subTitle">Message</span>
          <textarea
            :class="classes.form.textarea"
            placeholder="Enter your inquiries here"
            name="message"
            required
          ></textarea>
        </label>
        <button :class="classes.form.button" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>
