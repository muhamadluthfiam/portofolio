<template>
  <header class="bg-white fixed top-0 min-w-full flex items-center lg:absolute" >
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-6 mx-7">
            <router-link to="/" class="font-bold text-2xl block py-6">luthfiamrullah_</router-link>
          </div>
          <div class="flex items-center px-6">
            <button class="block absolute right-12 lg:hidden" @click="hover" v-bind:class="{ active: !isOpen }">
              <span class="line transition duration-300 ease-in-out origin-top-left bg-yellow-300"></span>
              <span class="line transition duration-300 ease-in-out bg-blue-400"></span>
              <span class="line transition duration-300 ease-in-out origin-bottom-left bg-red-400"></span>
            </button>
            <nav v-bind:class="{ hidden: isOpen }" class="absolute py-2 bg-white max-w-[550px] rounded-b-lg w-full right-1 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:text-white">
              <ul class="block lg:flex">
                <li class="group">
                  <router-link to="/" class="text-base text-dark py-2 mx-8 group-hover:text-blue-300 flex text-black">Home</router-link>
                </li>
                <li class="group">
                  <router-link to="/portofolio" class="text-base text-dark py-2 mx-8 group-hover:text-blue-300 flex text-black">Portofolio</router-link>
                </li>
                <li class="group">
                  <router-link to="/about" class="text-base text-dark py-2 mx-8 group-hover:text-blue-300 flex text-black">About</router-link>
                </li>
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
      isOpen: Boolean,
    }
  },
  methods: {
    hover(){
      if(this.isOpen) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    },
  }
}
</script>
