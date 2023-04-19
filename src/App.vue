<template>
  <!-- Div For Entire App -->
  <!-- Majority Of App-->
  <div class="top">
    <router-view />
    <!-- Bottom Navigation Buttons -->
    <button id="about-button"><router-link :to="{name: 'about'}">About</router-link></button>
    <button id="timer-button"><router-link :to="{name: 'timer'}">Timer</router-link></button>
    <button id="stopwatch-button"><router-link :to="{name: 'stopwatch'}">Stopwatch</router-link></button>
    <button id="metronome-button"><router-link :to="{name: 'metronome'}">Metronome</router-link></button>
  </div>
</template>

<script setup>
import CounterButton from "./components/CounterButton.vue";
import Logo from "./components/Logo.vue";
import { RouterView, RouterLink } from "vue-router";
</script>