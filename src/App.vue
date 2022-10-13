<template>
  <div style="display: flex">
    <div class="container atry">
      <shopping-cart></shopping-cart>
      <div class="row g-2">
        <div class="col-lg-auto animate__animated animate__fadeInUp "
             v-for="product in products ">
          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div>
              <img style="width: 200px" :src="product.image">
            </div>
            <h6 style="color: blue">{{ product.description }}</h6>
            <div><span><strong>{{ product.price }} $</strong></span></div>
            <br>
            <div>
              <button type="button" class="btn btn-primary" @click="addProductToCart(product)">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/Vuex/store";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  components: {
    ShoppingCart
  },
  computed: {
    products() {
      return store.state.products
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    }
  }
}
</script>

<style scoped>

div.Product {
  width: 250px;

}

div.atry {
  text-align: center;
  padding-left: 100px;
  margin-top: 150px;
}
</style>
