<template>
    <!-- Top Half Div -->
    <!-- Purple Background Div -->
    <div class="top">
        <!-- Medium Light Purple Rounded Square -->
        <div class="medium-purple-square">
            <!-- Page Title -->
            <h1 class="title">Timer</h1>
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
            <div class="text-yellow-100">
                <div class="text-6xl text-center flex w-full items-center justify-center">
                    <div class="box-border p-4">
                        <label for="hr-input" class="block mb-2 text-xl font-medium text-black-900 dark:text-white">Hours</label>
                        <input id="hr-input" :disabled="disabledInputs ? 1 : 0" class="h-16 w-16 text-black-600 text-xl" v-model="hrinput"/>
                    </div>
                    <div class="box-border p-4">
                        <label for="min-input" class="block mb-2 text-xl font-medium text-black-900 dark:text-white">Mins</label>
                        <input id="min-input" :disabled="disabledInputs ? 1 : 0" class="h-16 w-16 text-black-600 text-lg" v-model="mininput"/>
                    </div>
                    <div class="box-border p-4">
                        <label for="sec-input" class="block mb-2 text-xl font-medium text-black-900 dark:text-white">Secs</label>
                        <input id="sec-input" :disabled="disabledInputs ? 1 : 0" class="h-16 w-16 text-black-600 text-lg" v-model="secinput"/>
                    </div>
                </div>
            </div>
            <button :class="[isActive ? 'start-button' : 'stop-button']" @click="startTimer">{{ buttonMessage }}</button>
            <button class="reset-mute-button" @click="resetTimer">Reset</button>
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
            hrinput: "",
            mininput: "",
            secinput: "",
            totalSecs: 0,
            hrSecs: 0,
            minSecs: 0,
            additionalSecs: 0,
            totalSecs: 0,
            displayHrs: 0,
            displayMins: 0,
            displaySecs: 0,
            // Adding 'isActive' boolean toggle for 'Start' vs 'Stop' button CSS class change:
            isActive: true,
            // set 'buttonMessage' to 'Start' to begin with so that we can later change it to 'Stop':
            buttonMessage: "Start",
            // set 'disabledInputs' to 'false' to start with:
            disabledInputs: false
        }
    },
    methods: {
        startTimer() {
            // Check to see if user entered blank input:
            if (this.hrinput === "" && this.mininput === "" && this.secinput === "") {
                console.log("Inputs are blank!");
                this.$swal('Inputs are blank!\n\nPlease enter valid numerical values for hours, mins, and secs.');
            }

            // Allow the user to proceed since they entered actual values:
            else {
                // Show that the button works:
                console.log("Start / Stop button clicked!")

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

                // Account for the any blank inputs aka 2 inputs that are blank but 1 is still valid:
                // 'hrinput' is blank:
                if (this.hrinput === "") {
                    this.hrinput = 0;
                }

                // 'mininput' is blank:
                if (this.mininput === "") {
                    this.mininput = 0;
                }

                // 'secinput' is blank:
                if (this.secinput === "") {
                    this.secinput = 0;
                }

                // Grab the inputs only for the run of the 'Start' button aka when 'disabledInputs'
                // is set to 'false' --> This is to prevent the 'double countdown' edge case:
                if (this.disabledInputs === false) {
                    console.log("this.disabledInputs: ", this.disabledInputs);
                    // Convert all user inputs to secs:
                    this.hrSecs = parseInt(this.hrinput * 3600);
                    this.minSecs = parseInt(this.mininput * 60);
                    this.additionalSecs = parseInt(this.secinput);
                    // Adding 1 to total so that it acts like a real countdown to show the beginning
                    // of the countdown:
                    this.totalSecs = this.hrSecs + this.minSecs + this.additionalSecs + 1;
                    console.log("this.totalSecs = ", this.totalSecs);
                }

                // Switch 'disabledInputs' boolean variable value to 'false' which can only
                // be reset with the 'Reset' button later on:
                this.disabledInputs = true;

                // Clear the 'countdown' variable function's interval to prevent multiple new instances 
                // from being made:
                if(this.countdown >= 0) clearInterval(this.countdown)

                // Allow the user to proceed with the timer because they didn't click the 'Stop' button:
                this.countdown = setInterval(() => {
                    console.log("Inside countdown");
                    console.log("this.isActive: ", this.isActive);
                    // Check the status of 'isActive' 
                    // If it is set to 'True', then stop the countdown completely since the user
                    // just clicked the 'Stop' button:
                    if (this.isActive === true) {
                        // Stop the countdown interval:
                        console.log("Clearing interval because 'this.isActive' is set to true");
                        clearInterval(this.countdown);
                    }
                    else {
                        if (this.totalSecs <= 1) {
                            console.log("TIMES UP!");
                            this.displaySecs = 0;
                            let alarmSound =  new Audio("src/sounds/alarm.mp3");
                            alarmSound.play();
                            console.log("totalSecs: ", this.totalSecs);
                            console.log("displayHrs: ", this.displayHrs);
                            console.log("displayMins: ", this.displayMins);
                            console.log("displaySecs: ", this.displaySecs);
                            this.disabledInputs = false;
                            if (this.isActive === false) {
                                this.isActive = !(this.isActive);
                                this.buttonMessage = "Start";
                            }
                            clearInterval(this.countdown);
                        }

                        // Prevent 'totalSecs' from being negative after countdown
                        // is completed:
                        else {
                            this.totalSecs--;

                            this.displayHrs = Math.floor(this.totalSecs / 3600);
                            this.displayMins = Math.floor((this.totalSecs % 3600) / 60);
                            this.displaySecs = Math.floor((this.totalSecs % 3600) % 60);

                            console.log("totalSecs: ", this.totalSecs);
                            console.log("displayHrs: ", this.displayHrs);
                            console.log("displayMins: ", this.displayMins);
                            console.log("displaySecs: ", this.displaySecs);
                        }
                    }
                }, 1000);

            // Checking 'this.countdown' within 'startTimer' function:
            console.log("Checking this.countdown in startTimer function: ");
            console.log("this.countdown: ", this.countdown);
            }
        },
        resetTimer() {
            console.log("resetTimer function called!");
            // Re-enable the inputs using hte 'disabledInputs' boolean variable:
            this.disabledInputs = false;
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