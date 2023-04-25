<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 class="title">Metronome</h1>
            <div class="menu">
                <ul>
                    <li class="metronome-circle"></li>
                    <li class="metronome-circle"></li>
                    <li class="metronome-circle"></li>
                    <li class="metronome-circle"></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Bottom Half Div -->
    <div class="bottom">
        <!-- Light Purple Rounded Square -->
        <div>
            <!-- Click Clock Title -->
            <Logo />
            <!-- Middle Screen Buttons -->
            <div id="bpm-div" class="custom-number-input h-10 w-40">
                <label for="custom-input-number" class="w-full text-black-700 text-lg font-semibold">BPM
                </label>
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button id="decrement-button" @click="decrement" class=" bg-gray-300 text-black-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input id="bpm-value" type="number" onmouseleave="inputFunction" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-lg hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black-700  outline-none" name="custom-input-number" value="1" min="1" max="300" />
                    <button id="increment-button" @click="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <button class="start-button">Start</button>
            <button class="reset-mute-button">Mute</button>
        </div>
    </div>
</template>

<style>
    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    }

    input[type=number] {
    -moz-appearance: textfield;
    }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>

<script setup>
    import Logo from "../components/Logo.vue";

    // NOTE:
    // This is from the Tailwind Components example:
    // https://tailwindcomponents.com/component/number-input-counter

    function inputFunction() {
        console.log("Mouse has left input tag");
    }

    function decrement(e) {
        console.log("decrementFunction called!");
        const btn = document.querySelector("#decrement-button");
        const target = document.querySelector("#bpm-value");
        let value = Number(target.value);
        if (value > 1) {
            value--;
            target.value = value;
        }
        
        if (value > 300){
            value = 300;
            target.value = value;
        }

        if (value < 1){
            value = 1;
            target.value = value;
        }
    }

    function increment(e) {
        const btn = document.querySelector("#increment-button");
        const target = document.querySelector("#bpm-value");

        console.log("btn: " + btn);
        console.log("target: " + target);

        let value = Number(target.value);
        if (value < 300) {
            value++;
            target.value = value;
        }

        if (value > 300){
            value = 300;
            target.value = value;
        }

        if (value < 1){
            value = 1;
            target.value = value;
        }
    }
</script>