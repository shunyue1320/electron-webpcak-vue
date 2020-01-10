<template>
  <div class="hello">
    index index 版本{{version}}
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')

export default {
  data() {
    return {
      version: '0.0.0',
    }
  },
  created() {
    ipcRenderer.send('getVersion')
    ipcRenderer.on('version', (e, arg) => {
      ipcRenderer.removeAllListeners('version')
      this.version = arg.version
    })
  },
}
</script>