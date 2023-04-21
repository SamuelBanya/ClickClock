<template>
  <router-view />
  <!-- Bottom Navigation Buttons -->
  <router-link id="about-link" :to="{name: 'about'}"></router-link>
  <router-link id="timer-link" :to="{name: 'timer'}"></router-link>
  <router-link id="stopwatch-link" :to="{name: 'stopwatch'}"></router-link>
  <router-link id="metronome-link" :to="{name: 'metronome'}"></router-link>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>