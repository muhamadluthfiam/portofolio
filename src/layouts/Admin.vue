<template>
  <div class="flex justify-center items-center h-screen">
    <div class="h-[300px] w-[300px] border-2 border-black hover:shadow-md rounded-xl">
      <form class="grid grid-rows-2 gap-2 place-items-center mt-20">
        <h1 class="text-3xl">Login</h1>

        <div>
          <label for="username" class="mr-2">Username</label>
          <input class="bg-slate-200 p-2 rounded-md" id="username" placeholder="Input your name"/>
        </div>
        <div>
          <label for="username" class="mr-2">Password</label>
          <input class="bg-slate-200 p-2 rounded-md" id="username" placeholder="Input your name"/>
        </div>
          <button class="h-10 w-20 bg-slate-300 rounded-lg mt-7 hover:bg-slate-200">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>