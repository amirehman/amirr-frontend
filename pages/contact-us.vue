<template>
  <div>

    <div class="flex flex-wrap relative">
      <div class="absolute inset-0 flex justify-center lg:justify-end select-none">
        <img src="../assets/images/mailbox.svg" class="select-none w-3/4 object-cover lg:object-contain opacity-20" alt="mention">
      </div>
      <div class="relative z-1 w-full lg:w-1/2">
        <div class="pt-16">
        <h1 class="text-2xl lg:text-3xl md:tracking-wide md:leading-10 font-normal capitalize text-gray-700">
          <span class="lg:block ">Contact Aamir Rehman</span>
        </h1>
      </div>

      <div class="my-5 text-gray-700 space-y-3">
        <p>Thanks for your interest! Please fill out this form and I’ll get back to you as quickly as I can. I usually take 2-3 days to reply. :)</p>
        <p>Please note: Although I read every email, I don’t have the capacity to respond to everyone. I’ll only reply if your email aligns with my goals and acknowledge my time and capabilities.</p>
      </div>

      <div class="my-8">
        <FormsContactForm />
      </div>

      <div class="my-10">
        <div class="text-3xl text-gray-400 font-extralight">OR</div>
      </div>

      <div class="text-xl font-normal">
          <span class="text-gray-600">Write to me at</span>
          <a href="mailto:askamirrehman@gmail.com" class="border-b pb-1 border-transparent hover:border-gray-300">askamirrehman@gmail.com</a>
      </div>
      </div>
    </div>

  </div>
</template>
