<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 id="title">Stopwatch</h1>
        </div>
    </div>
    <!-- Bottom Half Div -->
    <div class="bottom">
        <!-- Light Purple Rounded Square -->
        <div>
            <!-- Click Clock Title -->
            <Logo />
            <!-- Middle Screen Buttons -->
            <div class="timer-counter-div">
                <input class="timer-counter-input"/>
            </div>
            <button class="start-button">Start</button>
            <button class="stop-button">Stop</button>
            <button class="clear-mute-button">Clear</button>
        </div>
    </div>
</template>

<script setup>
import Logo from "../components/Logo.vue";
</script>