<template>
  <div>
    <ul v-for="(item, index) in list" :key="index">
      <li>
        <router-link :to="`/blog/${item.id}`"> {{ item.title }} </router-link>
        {{item}}
      </li>
    </ul> 
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'BlogComponent',
  async setup() {
    const data = reactive({
      list: []
    });

    const result = await fetch('https://jsonplaceholder.typicode.com/posts/');
    data.list = await result.json();

    return { ...toRefs(data) }
  }
}
</script>