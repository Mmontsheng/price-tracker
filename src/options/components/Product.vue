<template>
  <li class="my-1 list-group-item d-flex justify-content-between align-items-center">
    <strong>{{ name }}</strong> 
    <span
      @click="promptDelete"
      class="bin-icon badge badge-pill">
      <img
        alt="settings"
        :src="binIcon"
        width="16"
      >
    </span>
  </li>
</template>

<script>
const bin = chrome.extension.getURL('/assets/icons/bin.png');

export default {
  computed: {
    binIcon: () => bin,
  },
  methods: {
    promptDelete() {
      const prompt = confirm(`Are you sure you want to remove ${this.name}?`);
      if(prompt) {
        this.$emit('delete');
      }
    },
  },
  name: 'Product',
  props: {
    id: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    }
  }
}
</script>

<style scoped>
.bin-icon {
  cursor: pointer;
}
</style>