<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 class="title">About</h1>
        </div>
    </div>
    <!-- Bottom Half Div -->
    <div class="bottom">
        <!-- Light Purple Rounded Square -->
        <div>
            <!-- Click Clock Title -->
            <Logo />
            <p>ClickClock is a timer, stopwatch, and metronome!</p>
            <br />
            <p>Developed with Vue 3 + Vite + Vue-Router by Samuel Banya</p> 
            <!-- Middle Screen Buttons -->
        </div>
    </div>
</template>

<script setup>
import Logo from "../components/Logo.vue";
</script>