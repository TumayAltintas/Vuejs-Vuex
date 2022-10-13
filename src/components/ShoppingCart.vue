<template>
  <div>
    <button class="btn btn-primary cartButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Cart</button>

    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <div style="color: blue" v-if="!products.length">Your shopping cart is empty</div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="modal-body">
          <div>
            <ul>
              <li v-for="product in products">
                <img class="cartImage" :src="product.image">
                <h2>Qty : {{ product.quantity }}</h2>
                <br>

                <h5>{{ product.description.substring(0,55)}}</h5>
                <br>
                <h4> Price : {{ product.price * product.quantity }} $</h4>
                <hr>
              </li>
            </ul>
            <h1>Total : {{ total }} $</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Cart",
  computed: {
    products() {
      return this.$store.getters.cartProducts
    },
    total() {
      return this.$store.getters.cartTotal
    },
  },

}
</script>


<style scoped>

button.cartButton {
  margin-left: 500px;
  position: fixed;
}
img.cartImage {
  max-width: 100px;
}

</style>