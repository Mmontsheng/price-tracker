<template>
  <div class="card">
    <div class="card-body">
      <h6 class="font-weight-bold">No product detected</h6>
      <p>Looks like you have opened a page with no product.</p>
      <small
        class="text-muted mt-5"
        style="font-size:11px"
      >
        {{ supportedText }}
      </small>
    </div>
  </div>
</template>

<script>
import { DOMAINS as TRACKED_DOMAINS } from 'src/tracker/domains';

export default {
  computed: {
    supportedText() {
      const pages = TRACKED_DOMAINS.toString();
      return `Tracked page(s) are: ${pages}`;
    },
  },
};
</script>

<style scoped>
  .card-body {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 90%;
  }
</style>