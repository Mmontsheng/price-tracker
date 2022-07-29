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
          @delete="deleteProduct(product)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Product from './components/Product.vue';
import { get, save, remove } from 'src/storage/index';

export default {
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    deleteProduct(id) {
      console.log(id);
    },
  },
  async mounted() {
    try {
      const d = await get('names');
      this.products = d.names;
      console.log(d);
    } catch (error) {
      
      console.log(error);
    }
  },
  name: 'App',
};
</script>

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