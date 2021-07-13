<template>
  <div>
    <h6>Price Tracker</h6>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
    </p>
    <p>
      Price Tracker keeps track of your saved products by occasionally loading their webpages in the background while Firefox is open.
    </p>


    <div class="action">
      <button
        @click="watchClicked"
        class="btn btn-primary btn-block"
      >
        Watch this product
      </button>
    </div>
  </div>
</template>

<script>
import { get, save } from 'src/storage/index';

export default {
  data() {
    return {
      num : 0,
    };
  },
  methods: {
    async watchClicked() {
      chrome.notifications.create({
        type: 'basic',
        title: 'Price Tracker',
        message: 'Product added to watch list',
        iconUrl: chrome.extension.getURL('/assets/icons/512.png')
      });
      //  browser.storage.local.clear();
      try {
        const t = await get('names');
        console.log('saved data', t);
      }catch(e) {
        console.log(e);
      }
      const data = [];
      for (let i =0; i<4;i++) {
        this.num = this.num + 1;
        data.push(`mmontsheng maoto ${this.num}`);
      }
      
        save({
          key: 'names',
          data,
        })
      // this.test({key: 'name', value: `mmontsheng maoto ${this.num}`});
    },
  },
  name: 'Watch',
};
</script>

<style scoped>
h6 {
  font-weight: bold;
}
</style>