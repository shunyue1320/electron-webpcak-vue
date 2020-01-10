<template>
  <div class="hello">
    我是bar2222222222
    <button @click="fn">请求</button>
    {{version}}
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      version: '0.0.0',
    }
  },
  methods: {
    async fn() {
      const response = await fetch('http://localhost:3000/')
      console.log(response)
      this.version = await response.text()
    }
  }
}
</script>