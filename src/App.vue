<template>
  <div>
    <li><router-link :to="{name: 'about'}">About</router-link></li>
    <li><router-link :to="{name: 'home'}">Home</router-link></li>
    <li><router-link :to="{name: 'timer'}">Timer</router-link></li>
    <li><router-link :to="{name: 'stopwatch'}">Stopwatch</router-link></li>
    <li><router-link :to="{name: 'metronome'}">Metronome</router-link></li>
  </div>
  <router-view />
</template>

<script setup>
import CounterButton from "./components/CounterButton.vue";
import { RouterView, RouterLink } from "vue-router";
</script>