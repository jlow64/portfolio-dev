<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const onSubmit = () => {
  // TODO: Next PR will need to create email functionality
  toast.success("Inquiry message sent!", { timeout: 2000 });
};
</script>
<template>
  <section
    id="contact-me"
    class="flex flex-col justify-center items-center w-full h-screen"
  >
    <div class="h-fit w-full lg:w-[400px] flex flex-col items-center gap-5 p-2">
      <h1 class="text-2xl font-bold">Get in touch with me</h1>
      <form class="flex flex-col w-full gap-2" @submit.prevent="onSubmit">
        <label class="form-control">
          <div class="label">
            <span class="text-lg font-semibold">Email</span>
          </div>
          <input
            class="input input-bordered w-full"
            type="email"
            placeholder="your@email.com"
          />
        </label>
        <label class="form-control">
          <div class="label">
            <span class="text-lg font-semibold">Message</span>
          </div>
          <textarea
            class="textarea textarea-bordered w-full resize-none"
            placeholder="Enter your inquiries here"
          ></textarea>
        </label>
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>
