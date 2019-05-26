<template>
  <div class="Timeline">
    <div class="screen" id="timelineScreen1" v-bind:class="{ 'currentScreen': currentActiveScreen == 1, 'screenValidated': isTimelineScreen1Validated == true }" @click="onTimelineStep1Click">
      <span>Step1</span>
    </div>
    <div class="screen" id="timelineScreen2" v-bind:class="{ 'currentScreen': currentActiveScreen == 2, 'screenValidated': isTimelineScreen2Validated == true }" @click="onTimelineStep2Click">
      <span>Step2</span>
    </div>
    <div class="screen" id="timelineScreen3" v-bind:class="{ 'currentScreen': currentActiveScreen == 3, 'screenValidated': isTimelineScreen3Validated == true }" @click="onTimelineStep3Click">
      <span>Step3</span>
    </div>
    <div class="screen" id="timelineScreen4" v-bind:class="{ 'currentScreen': currentActiveScreen == 4, 'screenValidated': isTimelineScreen4Validated == true }" @click="onTimelineStep4Click">
      <span>Step4</span>
    </div>
    <div class="screen" id="timelineScreen5" v-bind:class="{ 'currentScreen': currentActiveScreen == 5, 'screenValidated': isTimelineScreen5Validated == true }">
      <span>Step5</span>
    </div>
  </div>
</template>
<script src="./Timeline.fragment.js"></script>
<style src="./Timeline.fragment.css"></style>
