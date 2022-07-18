<template>
  <div>Component User
    {{ data }}
  </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  async setup() {
    const data = ref(null);
    const store = useStore();
    const getData = () => 
      new Promise((resolve) => {
        return setTimeout(() => resolve((data.value = "luthfi")), 2000);
      });

    const addLike = () => {
      store.commit('increment')
    }

    await getData();

    return { data, addLike }
  }
};
</script>