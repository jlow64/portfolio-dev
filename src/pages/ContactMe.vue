<template>
  <section class="flex flex-col justify-center items-center size-full gap-2">
    <div class="h-fit w-full lg:w-1/3 flex flex-col items-center gap-5 p-10">
      <h1 class="text-2xl font-bold">Get in touch with me</h1>
      <form class="flex flex-col gap-5 w-full max-w-500">
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
