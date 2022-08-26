<template>
  <div id='NavBar' class="absolute top-0 inset-x-0 bg-gray-900 bg-opacity-90  z-10">
    <div class="max-w-full px-4">
      <div class="flex items-center py-2 md:py-4 justify-end md:justify-start md:space-x-10">
        <!-- LINKS TO SECTIONS -->
        <nav class="hidden md:flex space-x-10 uppercase text-gray-50 text-base font-thin font-sans subpixel-antialiased">
          <a
            href="#Skills"
          >
            Skills
          </a>
          <a
            href="#Portfolio"
          >
            Portfólio
          </a>
        </nav>
        <!-- OPEN MENU IN MOBILE -->
        <div v-show="!menuShow" class="md:hidden">
          <button
            type="button"
            class="bg-blue-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 border-2 border-blue-500"
            aria-expanded="false"
            @click="menuShow = !menuShow"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div
      v-show="menuShow"
      class="absolute top-0 right-0 w-1/2 xxs:w-1/3 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        class="rounded-lg shadow-mine ring-1 ring-black ring-opacity-5 bg-blue-900 divide-y-2 divide-green-400"
      >
            <!-- CLOSE MENU IN MOBILE -->
        <div class="pt-2 pb-2 px-5">
          <div class="flex items-center justify-end">
            <div class="-mr-2">
              <button
                type="button"
                class="bg-blue-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 border-2 border-blue-500"
                @click="menuShow = !menuShow"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div class="py-4 px-5 space-y-4">
          <div class="grid grid-cols-1 gap-y-4 gap-x-8 uppercase text-white text-base font-thin font-sans subpixel-antialiased">
            <a 
            href="#Skills"
            @click="menuShow = !menuShow"
          >
            Skills
          </a>
          <a 
            href="#Portfolio"
          @click="menuShow = !menuShow"
          >
            Portfólio
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
        menuShow: false,
    }
  },
}
</script>

<style></style>
