<template>
  <header class="bg-white fixed top-0 min-w-full flex items-center lg:absolute" v-bind="isDark">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-6 mx-7">
            <router-link to="/" class="font-bold text-2xl block py-6">luthfiamrullah_</router-link>
          </div>
          <div class="flex items-center px-6">
            <button class="block absolute right-12 lg:hidden" @click="change" v-bind:class="{ active: !isChange }">
              <span class="line transition duration-300 ease-in-out origin-top-left bg-yellow-300"></span>
              <span class="line transition duration-300 ease-in-out bg-blue-400"></span>
              <span class="line transition duration-300 ease-in-out origin-bottom-left bg-red-400"></span>
            </button>
            <nav v-bind:class="{ hidden: isChange }" class="absolute py-2 bg-white max-w-[550px] rounded-b-lg w-full right-1 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:text-white">
              <ul class="block lg:flex">
                <li class="group">
                  <router-link to="/home" class="text-base py-2 mx-8 group-hover:text-blue-300 flex text-black">Home</router-link>
                </li>
                <li class="group">
                  <router-link to="/portofolio" class="text-base py-2 mx-8 group-hover:text-green-300 flex text-black">Portofolio</router-link>
                </li>
                <li class="group">
                  <router-link to="/blog" class="text-base py-2 mx-8 group-hover:text-green-300 flex text-black">Blog</router-link>
                </li>
                <li class="group">
                  <router-link to="/about" class="text-base py-2 mx-8 group-hover:text-red-300 flex text-black">About</router-link>
                </li>
                <li class="group">
                  <router-link to="/admin" class="w-20  py-2 mx-8 group-hover:text-yellow-300 flex text-black">Login</router-link>
                </li>
                <!-- <button class="mx-8 outline-2 outline w-10 h-10 rounded-lg hover:shadow-xl hover:bg-slate-50" @click="darkMode">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button> -->
                <hr>
                <button class="mt-2 mx-8 text-xl w-20 h-10 rounded-lg hover:shadow-xl hover:bg-slate-50 text-black" @click="darkMode">
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isChange: Boolean,
    }
  },
  methods: {
    change(){
      this.isChange ? this.isChange = false : this.isChange = true
    },
    darkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem('darkMode', this.isDark);
    }
  }
}
</script>
