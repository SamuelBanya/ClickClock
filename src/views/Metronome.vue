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
                    <input id="bpm-value" v-model="currentBPM" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-lg hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black-700  outline-none" name="custom-input-number"/>
                    <button id="increment-button" @click="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <button :class="[isActive ? 'start-button' : 'stop-button']" @click="startMetronome">{{ buttonMessage }}</button>
            <button class="reset-mute-button" @click="resetMetronome">Reset</button>
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

<!-- Using 'Composition' API: -->
<script setup>
    import Logo from "../components/Logo.vue";
</script>

<!-- Using 'Options' API: -->
<script>
export default {
    data() {
        return {
            isActive: true,
            buttonMessage: "Start",
            currentBPM: 1,
            beatNumber: 0
        }
    },
    methods: {
        // NOTE:
        // This is from the Tailwind Components example:
        // https://tailwindcomponents.com/component/number-input-counter

        decrement(e) {
            const btn = document.querySelector("#decrement-button");
            const target = document.querySelector("#bpm-value");
            let value = Number(target.value);
            if (value > 1) {
                value--;
                target.value = value;
                this.currentBPM = value;
            }
            
            if (value > 300){
                value = 300;
                target.value = value;
                this.currentBPM = value;
            }

            if (value < 1){
                value = 1;
                target.value = value;
                this.currentBPM = value;
            }
        },
        increment(e) {
            const btn = document.querySelector("#increment-button");
            const target = document.querySelector("#bpm-value");

            let value = Number(target.value);
            if (value < 300) {
                value++;
                target.value = value;
                this.currentBPM = value;
            }

            if (value > 300){
                value = 300;
                target.value = value;
                this.currentBPM = value;
            }

            if (value < 1){
                value = 1;
                target.value = value;
                this.currentBPM = value;
            }
        },
        startMetronome() {
            console.log("startMetronome function called!");
            // Switch 'isActive' boolean variable value:
            this.isActive = !(this.isActive);

            // 'isActive' is set to 'False' --> Display 'Stop' button:
            // User clicked 'Start' button with valid inputs:
            if(this.isActive === false) {
                // Set the 'buttonMessage' to 'Stop':
                this.buttonMessage = "Stop";
            }

            // 'isActive' is set to 'True' --> Display 'Start' button:
            // User clicked 'Stop' button with valid inputs:
            if (this.isActive === true) { 
                this.buttonMessage = "Start";
            }

            // Check the 'currentBPM' value that was provided:
            console.log("this.currentBPM: ", this.currentBPM);

            if (this.metronomeSequence)
            clearInterval(this.metronomeSequence);

            // Start the metronome sequence:
            this.metronomeSequence = setInterval(() => {
                if (this.isActive === true) {
                // Stop the countdown interval:
                console.log("Clearing interval because 'this.isActive' is set to true");
                clearInterval(this.countdown);
                }
                this.beatNumber++;
                console.log("Testing metronome sequence");
                // Cycle through 4 beats with a for loop
                // Beat 1: Make 'MetronomeClick.mp3' sound play:
                if (this.beatNumber === 1) {
                    console.log("this.beatNumber: ", this.beatNumber);
                    let metronomeClick =  new Audio("src/sounds/MetronomeClick.mp3");
                    metronomeClick.play();
                }
                // Beats 2 through 4: Make 'Drumsticks.mp3' sound play:
                if (this.beatNumber > 1 && this.beatNumber < 6) {
                    console.log("this.beatNumber: ", this.beatNumber);
                    let drumstickSound =  new Audio("src/sounds/Drumsticks.mp3");
                    drumstickSound.play();
                }

                // Reset 'beatNumber' back to '1':
                if (this.beatNumber === 4) {
                    this.beatNumber = 0;
                }
            }, (60000 / this.currentBPM));
        },
        resetMetronome() {
            console.log("resetMetronome function called!");
        }  
    }
}

</script>