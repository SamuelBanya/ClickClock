<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 class="title">Metronome</h1>
        </div>
    </div>
    <!-- Bottom Half Div -->
    <div class="bottom">
        <!-- Light Purple Rounded Square -->
        <div>
            <!-- Click Clock Title -->
            <Logo />
            <!-- Middle Screen Buttons -->
            <!-- Taken from TailwindCompoents website: -->
            <div class="custom-number-input h-10 w-32">
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0" />
                    <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <button class="start-button">Start</button>
            <button class="clear-mute-button">Mute</button>
        </div>
    </div>
</template>

<style>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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

function decrement(e) {
const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
);
const target = btn.nextElementSibling;
let value = Number(target.value);
value--;
target.value = value;
}

function increment(e) {
const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
);
const target = btn.nextElementSibling;
let value = Number(target.value);
value++;
target.value = value;
}

const decrementButtons = document.querySelectorAll(
`button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
`button[data-action="increment"]`
);

decrementButtons.forEach(btn => {
btn.addEventListener("click", decrement);
});

incrementButtons.forEach(btn => {
btn.addEventListener("click", increment);
});
</script>