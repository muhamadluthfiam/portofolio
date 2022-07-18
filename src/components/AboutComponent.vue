<template>
  <div>
    {{ data }}
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  async setup() {
    const data = ref(null);
    const value = {
      name: 'aku',
      saya: 'dia'
    }
    const getData = () =>
      new Promise ((resolve) => {
        return setTimeout(() => resolve(data.value = value))
      })

    await getData();
    return data
  }
}
</script>