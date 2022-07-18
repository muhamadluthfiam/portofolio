<template>
  <Suspense>
    <template #default>
      <BLogComponent />
    </template>
    <template #fallback>
      duarr.....
    </template>
  </Suspense>
</template>
<script>
import BlogComponent from '../BlogList.vue'
export default {
  components: { BlogComponent }
}
</script>