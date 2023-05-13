<template>
  <div class="mt-[80px]">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-20 lg:w-1/2">
          <h1 class="text-6xl font-bold">Luthfi amrullah</h1>
          <h2 class="text-slate-400 text-2xl">Web Developer artisan | Design</h2>
          <p>Saya adalah manusia biasa yang suka</p>
          <!-- <router-link to="/about" class="button-about">
            Tentang saya
          </router-link> -->
          
        </div>
        <div class="w-full self-end px-12 lg:w-1/2">
          <div class="mt-10 grid grid-cols-4 gap-2">
            <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Maya Angelou</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#73b06f"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-5 9) rotate(189 18 18) scale(1)" fill="#214aba" rx="36"></rect><g transform="translate(-5 4.5) rotate(-9 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
            <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Sarah Winnemucca</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#214aba"></rect><rect x="0" y="0" width="36" height="36" transform="translate(3 5) rotate(301 18 18) scale(1.1)" fill="#ff6f00" rx="36"></rect><g transform="translate(-5 3) rotate(-1 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
            <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Hetty Green</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#0c8f61"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-1 5) rotate(25 18 18) scale(1.1)" fill="#ffb008" rx="36"></rect><g transform="translate(-1 5) rotate(5 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="14" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="20" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
            <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><title>Irene Morgan</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#ffb008"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-3 -3) rotate(87 18 18) scale(1)" fill="#73b06f" rx="36"></rect><g transform="translate(-7 -4) rotate(7 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="#000000" fill="none" stroke-linecap="round"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup () {
  const store = useStore();

  const addLike = () => {
    store.commit('increment');
  };

  const likes = computed(() => {
    return store.state.totalLikes;
  });

  return { addLike, likes };
  }
}
</script>