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
                        <input id="hr-input" class="h-16 w-16 text-black-600 text-xl" v-model="hrinput"/>
                    </div>
                    <div class="box-border p-4">
                        <label for="min-input" class="block mb-2 text-xl font-medium text-black-900 dark:text-white">Mins</label>
                        <input id="min-input" class="h-16 w-16 text-black-600 text-lg" v-model="mininput"/>
                    </div>
                    <div class="box-border p-4">
                        <label for="sec-input" class="block mb-2 text-xl font-medium text-black-900 dark:text-white">Secs</label>
                        <input id="sec-input" class="h-16 w-16 text-black-600 text-lg" v-model="secinput"/>
                    </div>
                </div>
            </div>
            <button class="start-button" @click="startTimer">Start</button>
            <button class="reset-mute-button">Reset</button>
        </div>
    </div>
</template>

<script setup>
import Logo from "../components/Logo.vue";
import moment from "moment";
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
            displaySecs: 0
        }
    },
    methods: {
        startTimer() {
            // Show that the button works:
            console.log("Start button clicked!")

            // Grab the multiple inputs
            console.log("hrinput: ", this.hrinput);
            console.log("mininput: ", this.mininput);
            console.log("secinput: ", this.secinput);

            // Convert all user inputs to secs:
            let hrSecs = parseInt(this.hrinput * 3600);
            let minSecs = parseInt(this.mininput * 60);
            let additionalSecs = parseInt(this.secinput);
            let totalSecs = hrSecs + minSecs + additionalSecs;

            console.log("hrSecs: ", hrSecs);
            console.log("minSecs: ", minSecs);
            console.log("additionalSecs: ", additionalSecs);
            console.log("totalSecs: ", totalSecs);

            var countdown = setInterval(() => {
                // let displayHrs = Math.floor(totalSecs / 3600);
                // let displayMins = Math.floor((totalSecs % 3600) / 60);
                // let displaySecs = Math.floor((totalSecs % 3600) % 60);

                this.displayHrs = Math.floor(totalSecs / 3600);
                this.displayMins = Math.floor((totalSecs % 3600) / 60);
                this.displaySecs = Math.floor((totalSecs % 3600) % 60);

                console.log("totalSecs: ", this.totalSecs);
                console.log("displayHrs: ", this.displayHrs);
                console.log("displayMins: ", this.displayMins);
                console.log("displaySecs: ", this.displaySecs);

                totalSecs--;

                if (totalSecs === -1) {
                    console.log("totalSecs: ", this.totalSecs);
                    console.log("displayHrs: ", this.displayHrs);
                    console.log("displayMins: ", this.displayMins);
                    console.log("displaySecs: ", this.displaySecs);
                    clearInterval(countdown);
                }
            }, 1000);
        }
    }
}
</script>