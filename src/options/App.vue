<template>
  <div class="card">
    <h3 class="pl-3 pt-3 py-0">Product list</h3>
    <div class="card-body">
      <ul
        class="list-group"
        :key="index"
        v-for="(product, index) in products"
      >
        <product
          :id="'1'"
          :name="product"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import { get, save } from 'src/storage/index';

export default {
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  methods: {
  },
  async mounted() {
    try {
      const d = await get('names');
      this.products = d.names;
    } catch (error) {
      
      console.log(error);
    }
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
  width: 400px !important;
}
p {
  color: #212529;
  font-size: 14px;
}
</style>