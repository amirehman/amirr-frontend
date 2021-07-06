<template>
  <div>




    <div class="container mx-auto px-5 lg:px-0">


      <nav class="navbar flex items-center w-full justify-between text-gray-700 mt-5">
        <ul class="hidden lg:flex items-center font-normal text-gray-800">
            <li class="pr-5">
              <h1 class="capitalize text-xl tracking-wide font-semibold select-none">
                <nuxt-link to="/">Aamir R.</nuxt-link>
              </h1>
            </li>
            <li>
              <nuxt-link to="/" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">UI Components</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Templates</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Themes</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Tutorials</nuxt-link>
            </li>

          </ul>

          <ul class="flex lg:hidden items-center font-normal text-gray-800">
            <li class="pr-5">
              <h1 class="capitalize text-xl tracking-wide font-semibold select-none">
                <nuxt-link to="/">Aamir R.</nuxt-link>
              </h1>
            </li>
          </ul>


          <ul class="hidden lg:flex items-center font-normal text-gray-800">
            <li>
              <nuxt-link to="/" class="mr-2 px-5 py-1 inline-block rounded-full bg-green-200 border-2 border-transparent hover:border-green-400 hover:bg-transparent hover:text-black transition-all">Podcasts</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="px-5 py-2 inline-block rounded-full hover:bg-yellow-200 hover:text-black transition-all">Support</nuxt-link>
            </li>
        </ul>

        <ul class="flex lg:hidden items-center font-normal text-gray-800">
            <li class="cursor-pointer">
                <svg class="fill-current w-8 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385"><path d="M12 84h361a12 12 0 000-24H12a12 12 0 000 24zM373 180H12a12 12 0 000 25h361a12 12 0 000-25zM373 301H12a12 12 0 000 24h361a12 12 0 000-24z"/></svg>
            </li>
        </ul>
      </nav>

      <nuxt/>


      <section class="news-letter mt-24 bg-yellow-50 h-auto py-24 lg:py-0 lg:h-96 px-5 md:px-12 flex items-center rounded-t-2xl">
          <div class="w-full">
            <div class="icon mb-10 lg:mb-5">
              <svg class="fill-current w-16 mx-auto lg:ml-0" viewBox="0 0 483.3 483.3" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M475 195v265c0 6-2 13-7 17l-1 1c-4 3-10 5-15 5H31a23 23 0 01-15-6c-5-4-8-11-8-17V195c0-6 2-11 6-16a22 22 0 0117-7h421c6 0 13 2 17 7s6 10 6 16z" fill="#f6b863"/><path d="M469 179L242 361 14 179 229 5c7-7 18-7 26 0z" fill="#eaa14e"/><path d="M421 57v161L242 361 62 218V57z" fill="#eeefee"/><path d="M468 477l-1 1-202-135 18-15zM219 343L16 478v-1l184-149z" fill="#eaa14e"/><g fill="#dbd8dd"><path d="M102 100h279v12H102zM102 146h279v12H102zM102 193h279v12H102zM149 240h185v12H149z"/></g></svg>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">

              <div class="w-full text-center lg:text-left">
                <div class="text-2xl xl:text-3xl font-bold w-full text-gray-700">
                  <span class="inline lg:block">Subscribe to our newsletter to receive</span>
                  <span class="inline lg:block"> weekly design freebies!</span>
                </div>
                <p class="text-sm text-gray-500 mt-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing repellat, voluptas quisquam? ur adipisicing repellat, voluptas qu Iusto quaerat ratione esse?
                </p>
              </div>

              <div  class="w-full">
                <form action="">
                  <div class="form-element w-full md:w-3/4 mx-auto flex justify-center relative bg-theme-green-light border border-yellow-200 rounded-xl overflow-hidden">
                    <input type="text" placeholder="email@yahoo.com" class="w-full border bg-transparent p-4 rounded-xl focus:outline-none active:outline-none">
                    <button type="submit" class="focus:outline-none active:outline-none group absolute right-0 top-0 flex items-center h-full">
                      <span class="group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded-xl block mr-3 hover:bg-yellow-300 flex items-center space-x-2">
                        <span class="block">Subscribe</span>
                        <span class="block">
                          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-5" viewBox="0 0 512 512"><path d="M405 245v-32c0-67-45-124-106-143v-6a43 43 0 00-86 0v6c-61 19-106 76-106 143v32c0 71-17 96-29 115-7 10-14 20-14 35 0 34 72 47 131 51a64 64 0 00122 0c59-4 131-17 131-51 0-15-7-25-14-35-12-19-29-44-29-115zM235 64a21 21 0 0142 0v2a149 149 0 00-42 0v-2zm21 405c-16 0-30-8-37-22a903 903 0 0074 0c-7 14-21 22-37 22zm0-42c-98 0-171-17-171-32 0-8 4-13 10-24 13-19 33-48 33-126v-32a128 128 0 01256 0v32c0 78 20 107 33 126 6 11 10 16 10 24 0 15-73 32-171 32zM499 178a11 11 0 10-20 7 223 223 0 010 142 11 11 0 0020 7 244 244 0 000-156zM445 185c-5 2-8 8-6 14a181 181 0 010 114 11 11 0 0020 7 202 202 0 000-128c-2-6-8-9-14-7zM21 256c0-24 4-48 12-71a11 11 0 00-20-7 245 245 0 000 156 11 11 0 0020-7c-8-23-12-47-12-71zM73 313a181 181 0 010-114 11 11 0 00-20-7 202 202 0 000 128 11 11 0 0020-7z"/></svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </section>

      <footer class="bg-green-50 p-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 flex">

          <div class="flex items-center justify-center lg:justify-start text-center lg:text-left">
            <div>
              <span class="block font-semibold text-2xl text-gray-800">Aamir R.</span>
              <p class="block text-sm text-gray-700">
                <span class="block italic">Copyright © <a href="/" class="hover:text-yellow-500">Amirr.Net</a> </span>
                <span class="block">All themes, templates, Clones and snippets created, design and maintained by Amir Rehman. licensed MIT</span>
              </p>
            </div>
          </div>
          <!-- column -->

          <div class="social flex items-center justify-center order-2 lg:order-1">
            <div>
              <ul class="flex items-center justify-center space-x-3">
                <li><a href="" class="border border-gray-300 flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-yellow-200 hover:border-yellow-200 transition-all rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 310 310"><path d="M298 65c-11-14-32-19-71-19H83c-40 0-61 6-72 20S0 100 0 128v54c0 54 13 82 83 82h144c34 0 53-5 65-16 13-12 18-32 18-66v-54c0-30-1-50-12-63zm-99 97l-65 34a10 10 0 01-15-8v-68a10 10 0 0115-9l65 34a10 10 0 010 17z"/></svg>
                </a></li>
                <li><a href="" class="border border-gray-300 flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-yellow-200 hover:border-yellow-200 transition-all rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 310 310"><path d="M303 57l-15 6c6-7 11-15 13-24a5 5 0 00-7-6c-11 7-22 11-35 14a67 67 0 00-113 56c-45-4-87-26-116-62a5 5 0 00-8 1 67 67 0 006 76l-9-4a5 5 0 00-7 5v1c0 24 13 45 33 57l-5-1a5 5 0 00-6 7c7 22 26 39 49 44a118 118 0 01-77 17 5 5 0 00-4 9c29 19 63 29 97 29 68 0 110-32 134-59a186 186 0 0046-127c12-8 22-19 30-31a5 5 0 00-6-8z"/></svg>
                </a></li>
                <li><a href="" class="border border-gray-300 flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-yellow-200 hover:border-yellow-200 transition-all rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 300 300"><path d="M39 0h222c22 0 39 17 39 39v222c0 22-17 39-39 39H39c-22 0-39-17-39-39V39C0 17 17 0 39 0zm180 33c-8 0-14 6-14 14v32c0 8 6 14 14 14h33c8 0 14-6 14-14V47c0-8-6-14-14-14h-33zm47 94h-26c2 8 4 17 4 26 0 50-42 90-94 90-51 0-93-40-93-90 0-9 1-18 4-26H33v127c0 6 6 12 12 12h209c7 0 12-6 12-12V127zM150 91c-33 0-60 26-60 58 0 33 27 59 60 59 34 0 61-26 61-59 0-32-27-58-61-58z"/></svg>
                </a></li>
                <li><a href="" class="border border-gray-300 flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-yellow-200 hover:border-yellow-200 transition-all rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 310 310"><path d="M82 165h34v140c0 3 2 5 5 5h57c3 0 5-2 5-5V166h39c3 0 5-2 5-5l6-51a5 5 0 00-5-6h-45V72c0-10 6-15 16-15h29c3 0 5-2 5-5V5c0-3-2-5-5-5h-42c-7 0-32 1-51 19a53 53 0 00-18 48v37H82c-3 0-5 2-5 5v51c0 3 2 5 5 5z"/></svg>
                </a></li>
                <li><a href="" class="border border-gray-300 flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-yellow-200 hover:border-yellow-200 transition-all rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5" viewBox="0 0 310 310"><path d="M72 100H10c-3 0-5 2-5 5v200c0 2 2 5 5 5h62c3 0 5-3 5-5V105c0-3-2-5-5-5zM41 0a41 41 0 100 83 41 41 0 000-83zM230 95c-25 0-43 11-54 23v-13c0-3-2-5-5-5h-60c-3 0-5 2-5 5v200c0 2 2 5 5 5h62c3 0 5-3 5-5v-99c0-34 9-47 33-47 25 0 27 21 27 48v98c0 2 2 5 5 5h62c3 0 5-3 5-5V195c0-50-9-100-80-100z"/></svg>
                </a></li>
              </ul>
              <div class="mt-4 flex items-center justify-center text-gray-800">
                <nuxt-link to="/" class="text-lg flex items-center space-x-2">
                  <span class="block mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6" viewBox="0 0 512 512"><path d="M395 203H96c-18 0-32 14-32 32v21c0 76 42 145 110 180a11 11 0 009-19c-60-31-98-93-98-161v-21c0-6 5-11 11-11h299c6 0 10 5 10 11v21c0 68-37 130-98 161a11 11 0 0010 19c68-35 110-104 110-180v-21c0-18-15-32-32-32z"/><path d="M490 423c-2-4-6-7-10-7H11a11 11 0 00-8 18l24 24c14 14 33 22 53 22h331c20 0 39-8 53-22l24-24c3-3 4-7 2-11zm-41 20a53 53 0 01-38 16H80c-14 0-28-6-38-16l-6-6h418l-5 6zM491 253c-28-18-74 2-79 4a11 11 0 008 19c11-4 44-15 60-5 7 5 11 14 11 28 0 42-86 68-120 75l-7 1a11 11 0 104 21l7-2c6-1 137-26 137-95 0-22-7-37-21-46zM328 113c18-21 18-55 0-77-3-5-10-5-15-2-4 4-5 11-1 15 11 14 11 37 0 51a64 64 0 000 77 11 11 0 0015 2c4-4 5-10 1-15a43 43 0 010-51zM264 113c18-21 18-55 0-77a11 11 0 10-16 13c11 14 11 37 0 51a64 64 0 000 77 11 11 0 0015 2c4-4 5-10 1-15a43 43 0 010-51zM200 113c18-21 18-55 0-77-3-5-10-5-15-2-4 4-5 11-1 15 11 14 11 37 0 51a64 64 0 000 77 11 11 0 0015 2c4-4 5-10 1-15a43 43 0 010-51z"/></svg>
                  </span>
                  <span class="block">Buy Me a Coffee</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- column -->

          <div class="links flex items-center justify-center text-center lg:text-left lg:justify-end order-1 lg:order-2 my-12 lg:my-0">
            <div>
              <div class="mb-2 text-lg font-medium">Resources</div>
              <ul class="text-gray-800">
                <li> <nuxt-link to="/">Templates</nuxt-link> </li>
                <li> <nuxt-link to="/">Themes</nuxt-link> </li>
                <li> <nuxt-link to="/">Blogs</nuxt-link> </li>
                <li> <nuxt-link to="/">Podcasts</nuxt-link> </li>
                <li> <nuxt-link to="/">Terms & Conditions</nuxt-link> </li>
              </ul>
            </div>
          </div>
          <!-- column -->


        </div>
      </footer>

    </div>

  </div>
</template>
