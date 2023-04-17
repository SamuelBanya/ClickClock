<script setup>
import About from './components/About.vue'
</script>

<template>
  <div>
    <div style="font-size: 30px" alt="ClockEmojisDiv">
      ⏰⏱️⏲️
    </div>
  </div>
  <About msg="ClickClock" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
