<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 class="title">Stopwatch</h1>
            <div class="text-black-100">
                <div class="text-6xl text-center flex w-full items-center justify-center">
                    <div class="w-24 mx-1 p-2 bg-white text-black-500 rounded-lg">
                        <div class="font-mono leading-none">{{ displayHrs || '00' }}</div>
                        <div class="font-mono uppercase text-sm leading-none">Hours</div>
                    </div>
                    <div class="w-24 mx-1 p-2 bg-white text-black-500 rounded-lg">
                        <div class="font-mono leading-none">{{  displayMins || '00' }}</div>
                        <div class="font-mono uppercase text-sm leading-none">Minutes</div>
                    </div>
                    <div class="w-24 mx-1 p-2 bg-white text-black-500 rounded-lg">
                        <div class="font-mono leading-none">{{ displaySecs || '00' }}</div>
                        <div class="font-mono uppercase text-sm leading-none">Seconds</div>
                    </div>
                </div>
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
            <button :class="[isActive ? 'start-button' : 'stop-button']" @click="startStopwatch">{{ buttonMessage }}</button>
            <button class="reset-mute-button" @click="resetStopwatch">Reset</button>
        </div>
    </div>
</template>

<script setup>
import Logo from "../components/Logo.vue";
</script>

<script>
export default {
    data() {
        return {
            totalSecs: 0,
            displayHrs: 0,
            displayMins: 0,
            displaySecs: 0,
            isActive: true,
            buttonMessage: "Start"
        }
    },
    methods: {
        startStopwatch() {
            console.log("startStopwatch method called!");

            // Switch 'isActive' boolean variable value:
            this.isActive = !(this.isActive)

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

            // Allow the countup sequence to continue after the 'Stop' button has been clicked and the total limit has not been reached:
            if (this.totalSecs < 362439) {
                clearInterval(this.countup);
            }

            this.countup = setInterval(() => {
                // Check the status of 'isActive' 
                // If it is set to 'True', then stop the countdown completely since the user
                // just clicked the 'Stop' button:
                if (this.isActive === true) {
                    // Stop the countdown interval:
                    console.log("Clearing interval because 'this.isActive' is set to true");
                    clearInterval(this.countup);
                }
                else {
                    // Prevent edge case of 99 hours, 99 mins, and 99 secs that would overflow related page
                    // Aka prevent '362439' secs total:
                    if (this.totalSecs >= 362439) {
                        this.$swal("Cannot exceed 99 hours, 99 mins, and 99 secs! Please reset stopwatch!");
                    } else {
                        console.log("totalSecs: ", this.totalSecs);
                        this.totalSecs++;
                        this.displayHrs = Math.floor(this.totalSecs / 3600);
                        this.displayMins = Math.floor((this.totalSecs % 3600) / 60);
                        this.displaySecs = Math.floor((this.totalSecs % 3600) % 60);
                    }
                }
            }, 1000);
        },
        resetStopwatch() {
            console.log("resetStopwatch function called!");
            this.displayHrs = 0;
            this.displayMins = 0;
            this.displaySecs = 0;
            this.totalSecs = 0;
            // Use 'clearInterval' on the 'countdown' variable function:
            clearInterval(this.countdown);
            // If the 'Stop' button is present, and the 'Reset' button is clicked,
            // change the 'Stop' button back to 'Start'
            if (this.isActive === false) {
                this.isActive = !(this.isActive);
                this.buttonMessage = "Start";
            }                            
        }
    }
}
</script>