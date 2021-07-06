<template>
  <div>


    <section class="my-24 tutoials-by-category">

      <div class="section-header mb-10 flex items-center justify-between relative">
        <span class="capitalize text-xl tracking-wide font-medium select-none text-gray-800">Tutoials</span>
        <div class="flex">

          <ul class="flex md:hidden items-center space-x-2">

            <li class="text-lg text-gray-700">
              <span>All</span>
            </li>

            <li class="text-gray-600">
              <svg class="fill-current w-5 h-5" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M22 0H2L0 2v2l1 1 8 8v10a1 1 0 001 1l4-3 1-1v-6-1l8-8 1-1V2l-2-2z"/></svg>
            </li>

          </ul>

          <ul class="capitalize select-none text-gray-800 md:flex items-center space-y-2 md:space-y-0 md:space-x-3 absolute md:static right-0 top-8 md:top-0 w-auto bg-gray-100 md:bg-transparent rounded-xl overflow-hidden">

            <li>
              <label class="block bg-gray-100 px-4 md:px-2 py-2 md:py-1 md:rounded-lg cursor-pointer hover:bg-yellow-200 transition-all">
                <span>All</span>
                <input type="checkbox" class="hidden" value="all">
              </label>
            </li>

            <li>
              <label class="block bg-gray-100 px-4 md:px-2 py-2 md:py-1 md:rounded-lg cursor-pointer hover:bg-yellow-200 transition-all">
                <span>CSS</span>
                <input type="checkbox" class="hidden" value="css">
              </label>
            </li>

            <li>
              <label class="block bg-gray-100 px-4 md:px-2 py-2 md:py-1 md:rounded-lg cursor-pointer hover:bg-yellow-200 transition-all">
                <span>Tailwind CSS</span>
                <input type="checkbox" class="hidden" value="tailwind">
              </label>
            </li>

            <li>
              <label class="block bg-gray-100 px-4 md:px-2 py-2 md:py-1 md:rounded-lg cursor-pointer hover:bg-yellow-200 transition-all">
                <span>Bootstrap</span>
                <input type="checkbox" class="hidden" value="bootstrap">
              </label>
            </li>

            <li>
              <label class="block bg-gray-100 px-4 md:px-2 py-2 md:py-1 md:rounded-lg cursor-pointer hover:bg-yellow-200 transition-all">
                <span>Bulma</span>
                <input type="checkbox" class="hidden" value="bulma">
              </label>
            </li>

          </ul>
        </div>
      </div>
      <!--  -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1f3b4390836469.Y3JvcCw4MDgsNjMyLDAsMA.png" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/1f9b1771309437.Y3JvcCwxMTkyLDkzMyw2Miww.jpg" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/22c47b90383313.Y3JvcCwxOTIwLDE1MDEsMCww.png" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/2effd390366719.Y3JvcCw4MDgsNjMyLDAsMA.png" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

        <div class="card border rounded-xl overflow-hidden">
          <div class="image">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3b971b81090977.Y3JvcCwxMzMzLDEwNDMsMCww.jpg" class="w-full" alt="image">
          </div>
          <div class="info p-3">
            <h3 class="text-semibold text-lg flex items-center justify-between">
              <span>Aliexpress Dashboard</span>
              <span class="hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2">Paid</span>
            </h3>
            <div class="text-gray-700 flex itmes-center justify-between text-sm">
              <span>a one page portfolio theme</span>
              <nuxt-link to="/"> Tailwind </nuxt-link>
            </div>
          </div>
        </div>
        <!-- card -->

      </div>
    </section>

  </div>
</template>
<script>
export default {

}
</script>
