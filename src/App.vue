<template>
  <router-view />
  <!-- Bottom Navigation Buttons -->
  <button id="about-button"><router-link :to="{name: 'about'}">ABOUT</router-link></button>
  <button id="timer-button"><router-link :to="{name: 'timer'}">TEST</router-link></button>
  <button id="stopwatch-button"><router-link :to="{name: 'stopwatch'}">STOPWATCH</router-link></button>
  <button id="metronome-button"><router-link :to="{name: 'metronome'}">METRONOME</router-link></button>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>