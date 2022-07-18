<template>
  <Suspense>
    <template #default>
      <div class="lg:pt-20">
        <div class="container">
          <h1 class="text-center font-bold text-4xl mt-10">Pendidikan</h1>
          <div class="flex flex-wrap">
            <div class="w-full self-end px-12 lg:w-1/2">
                <h1 class="text-6xl font-bold">Tentang Saya.....</h1>
                <h2 class="text-slate-400 text-2xl">rtisan | Design | ERP</h2>
                <AboutComponent />
                <p>total likes {{ likes }}</p>
            </div>
            <div class="w-full self-center px-12 lg:w-1/2">
              <h1 class="text-6xl font-bold">Tentang Saya.....</h1>
              <h2 class="text-slate-400 text-2xl">Web Developer artisan | Design | ERP</h2>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="lg:pt-20">
        <h1>Loading.....</h1>
      </div>
    </template>
  </Suspense>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import UserComponent from '../../components/UserComponent.vue'
import AboutComponent from '../../components/AboutComponent.vue'
export default {
  components: { UserComponent, AboutComponent },
  setup() {
    const store = useStore();

    const likes =  computed(() => {
      return store.state.totalLikes;
    })

    return { likes };
  }
}
</script>
