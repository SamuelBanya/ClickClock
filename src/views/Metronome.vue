<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 class="title">Metronome</h1>
            <div class="menu">
                <ul id="metronome-circles-list">
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
                    <button id="decrement-button" :disabled="disabledInputs ? 1 : 0" @click="decrement" class=" bg-gray-300 text-black-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input id="bpm-value" :disabled="disabledInputs ? 1 : 0" v-model="currentBPM" type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-lg hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black-700  outline-none" name="custom-input-number"/>
                    <button id="increment-button" :disabled="disabledInputs ? 1 : 0" @click="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <button :class="[isActive ? 'start-button' : 'stop-button']" @click="startMetronome">{{ buttonMessage }}</button>
            <button class="reset-button" @click="resetMetronome">Reset</button>
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
            currentBPM: 60,
            beatNumber: 0,
            disabledInputs: false
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
            // Switch 'isActive' boolean variable value:
            this.isActive = !(this.isActive);

            // 'isActive' is set to 'False' --> Display 'Stop' button:
            // User clicked 'Start' button with valid inputs:
            if(this.isActive === false) {
                // Set the 'buttonMessage' to 'Stop':
                this.buttonMessage = "Stop";
                // Play default 'StartSound' button sound:
                let startSound =  new Audio("./src/sounds/StartSound.mp3");
                startSound.play();
            }

            // 'isActive' is set to 'True' --> Display 'Start' button:
            // User clicked 'Stop' button with valid inputs:
            if (this.isActive === true) { 
                this.buttonMessage = "Start";
                this.disabledInputs = false;
                // Play default 'StartSound' button sound:
                let startSound =  new Audio("./src/sounds/StartSound.mp3");
                startSound.play();
                clearInterval(this.metronomeSequence);
            }

            // Clear any existing instance of the metronomeSequence interval function:
            if (this.metronomeSequence)
            clearInterval(this.metronomeSequence);

            // Now that the metronome sequence has started, disable the inputs:
            this.disabledInputs = true;

            // Start the metronome sequence:
            this.metronomeSequence = setInterval(() => {
                if (this.isActive === true) {
                    // Stop the metronomeSequence interval function:
                    // Re-enable the inputs:
                    this.disabledInputs = false;
                    clearInterval(this.metronomeSequence);
                }
                else {
                    this.beatNumber++;
                    // Cycle through 4 beats with a for loop
                    // Beat 1: Make 'MetronomeClick.mp3' sound play:
                    if (this.beatNumber === 1) {
                        let metronomeClick =  new Audio("./src/sounds/MetronomeClick.mp3");
                        metronomeClick.play();
                        let metronomeCirclesList = document.getElementById("metronome-circles-list")
                        let metronomeCirclesListItems = metronomeCirclesList.childNodes;
                        // We are back at Beat 1, so clear all the green circles, and replace them 
                        // with default red circles on beat 1:
                        for (let i = 0; i < metronomeCirclesListItems.length; i++) {
                            metronomeCirclesListItems[i].classList.remove("metronome-circle-green");
                            metronomeCirclesListItems[i].classList.add("metronome-circle");
                        }
                        // Now, make the first circle green:
                        metronomeCirclesListItems[this.beatNumber - 1].classList.add("metronome-circle-green");
                        metronomeCirclesListItems[this.beatNumber - 1].classList.remove("metronome-circle");
                    }
                    // Beats 2 through 4: Make 'Drumsticks.mp3' sound play:
                    if (this.beatNumber > 1 && this.beatNumber < 6) {
                        let drumstickSound =  new Audio("./src/sounds/Drumsticks.mp3");
                        drumstickSound.play();
                        let metronomeCirclesList = document.getElementById("metronome-circles-list")
                        let metronomeCirclesListItems = metronomeCirclesList.childNodes;
                        switch(this.beatNumber) {
                            case 2:
                                metronomeCirclesListItems[this.beatNumber - 1].classList.add("metronome-circle-green");
                                metronomeCirclesListItems[this.beatNumber - 1].classList.remove("metronome-circle");
                                break;
                            case 3:
                                metronomeCirclesListItems[this.beatNumber - 1].classList.add("metronome-circle-green");
                                metronomeCirclesListItems[this.beatNumber - 1].classList.remove("metronome-circle");
                                break;
                            case 4:
                                metronomeCirclesListItems[this.beatNumber - 1].classList.add("metronome-circle-green");
                                metronomeCirclesListItems[this.beatNumber - 1].classList.remove("metronome-circle");
                                break;
                        }
                    }

                    // Reset 'beatNumber' back to '1':
                    if (this.beatNumber === 4) {
                        this.beatNumber = 0;
                    }
                }
            }, (60000 / this.currentBPM));
        },
        resetMetronome() {
            // Play default 'StartSound' button sound:
            let startSound =  new Audio("./src/sounds/StartSound.mp3");
            startSound.play();
            // Stop the metronomeSequence interval function:
            // Reset the BPM back to 60 BPM by default:
            this.currentBPM = 60;
            // Switch 'isActive' boolean variable value back to 'true':
            this.isActive = true;
            // Change the 'Start' button message back to 'Start' to reset the button's behavior:
            this.buttonMessage = "Start";
            // We are back at Beat 1, so clear all the green circles, and replace them 
            // with default red circles on beat 1:
            let metronomeCirclesList = document.getElementById("metronome-circles-list")
            let metronomeCirclesListItems = metronomeCirclesList.childNodes;

            for (let i = 0; i < metronomeCirclesListItems.length; i++) {
                metronomeCirclesListItems[i].classList.remove("metronome-circle-green");
                metronomeCirclesListItems[i].classList.add("metronome-circle");
            }
            // Set the 'beatNumber' back to 0 to reset the sequence:
            this.beatNumber = 0;
            // Re-enable the inputs:
            this.disabledInputs = false;
            clearInterval(this.metronomeSequence);
        }  
    }
}

</script>