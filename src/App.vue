<!-- Adding CDN based CSS stylesheet for Font Awesome icons: -->

<template>
  <router-view />
  <!-- Bottom Navigation Buttons -->
  <router-link 
    :to="{name: 'about'}"
    custom
    v-slot="{navigate}"
    >
    <button id="about-link" class="glossy-button" @click="navigate" role="link"><fa class="font-awesome" icon="circle-info"/></button>
  </router-link>
  <router-link 
    :to="{name: 'timer'}"
    custom
    v-slot="{navigate}"
    >
    <button id="timer-link" class="glossy-button" @click="navigate" role="link"><fa class="font-awesome" icon="clock"/></button>
  </router-link>
  <router-link 
    :to="{name: 'stopwatch'}"
    custom
    v-slot="{navigate}"
    >
    <button id="stopwatch-link" class="glossy-button" @click="navigate" role="link"><fa class="font-awesome" icon="stopwatch"/></button>
  </router-link>
  <router-link 
    :to="{name: 'metronome'}"
    custom
    v-slot="{navigate}"
    >
    <button id="metronome-link" class="glossy-button" @click="navigate" role="link"><fa class="font-awesome" icon="music"/></button>
  </router-link>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>