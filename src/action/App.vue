<template>
  <div class="card">
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
  </div>
</template>

<script>
import Watch from './components/Watch.vue';

const settings = chrome.extension.getURL('/assets/icons/setting.png');
export default {
  components: {
    Watch,
  },
  computed: {
    settingsIcon: () => settings,
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
  mounted() {
    console.log('df');
  },
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
</style> 

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