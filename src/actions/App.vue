<template>
  <div class="card">
    <h4 class="p-2 font-weight-bold text-center">
      Price Tracker
    </h4>
    <slot
      v-if="isTrackable"
    >
      <div
          @click="openSettings"
          class="pt-1 text-right settings-icon"
        >
        <img
          alt="settings"
          :src="settingsIcon"
          width="16"
        >
      </div>
      <watch class="card-body text-center"/>
    </slot>
    <tab-not-trackable
      v-else
    />
  </div>
</template>

<script>
import {
  isTabTrackable,
} from 'src/tracker/utils';


import TabNotTrackable from 'actions/components/TabNotTrackable.vue';
import Watch from 'actions/components/Watch.vue';

const settings = chrome.extension.getURL('/assets/icons/setting.png');
export default {
  components: {
    TabNotTrackable,
    Watch,
},
  computed: {
    settingsIcon: () => settings,
  },
  data() {
    return {
      isTrackable: false,
    };
  },
  methods: {
    openSettings() {
      if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
      } else {
        window.open(chrome.runtime.getURL('options.html'))
      }
    },
  },
  async mounted() {
    try {
      this.isTrackable  = await isTabTrackable();
      console.log(this.isTrackable);
    } catch (error) {
      console.log(error);
    }
  },
  name: 'App',
  watch: {
    isTrackable(newV) {
      console.log(newV);
      // load stats about the page 
    },
  }
};
</script>


<style>
body{
font-family: 'Poppins', sans-serif;
}
.card {
  width: 250px !important;
  height: 400px;
  border: 0;
}
p {
  color: #212529;
  font-size: 14px;
}
.action {
  position: absolute;
  bottom: 25px;
  width:100%;
  padding: 0 15px;
  right:0;
}
.settings-icon {
  cursor: pointer;
}
</style>