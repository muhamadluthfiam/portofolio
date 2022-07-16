<template>
  <div>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  data() {
    return {
      isOpen: Boolean,
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    hover(){
      if(this.isOpen) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    },
    fixed() {
      console.log('disekrol')
    }
  }
}
</script>
