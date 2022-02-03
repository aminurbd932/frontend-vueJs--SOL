<template>
  <div class="home">
    <h1>Card List({{totalCard}} items, {{totalAmount}} Tk)</h1>
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Current Price</th>
        <th scope="col">Qantity</th>
        <th scope="col">Sub Amount</th>
        <th scope="col">--</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, key) in cards" :key="key">
        <th scope="row">{{key+1}}</th>
        <td>{{row['productName']}}</td>
        <td>{{row['currentSalePrice']}}</td>
        <td><input type="text" class="form-control" @keyup="updateCard" v-model="row['qty']" /></td>
    
        <td>{{row['currentSalePrice'] * row['qty']}}</td>
        <td><button type="button" class="btn btn-danger btn-small" @click="deleteCard(key)">Delete</button></td>
      </tr>
      </tbody>
      <thead>
        <tr>
          <th colspan="6"><button type="button" class="btn btn-info btn-small" @click="checkout()">Checkout</button></th>
        </tr>
      </thead>
    </table>
    <h1>Product List</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Actual Price</th>
        <th scope="col">Current Price</th>
        <th scope="col">Qantity</th>
        <th scope="col">--</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, key) in products" :key="key">
        <th scope="row">{{key+1}}</th>
        <td>{{row['productName']}}</td>
        <td>{{row['actualPrice']}}</td>
        <td>{{row['currentSalePrice']}}</td>
        <td>1</td>
        <td><button type="button" class="btn btn-success btn-small" @click="addCard(row)">Buy</button></td>
      </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
const axios = require('axios')
export default {
  name: 'Home',
  data() {
      return {
        products:[],
        products1:[],
        isLoad:false,
        cards:[],
        totalCard:0,
        totalAmount:0
      }
  },
  mounted() {
      this.loadData();
    },
    methods: {
      loadData: function() {
        this.$store.dispatch('product/getProducts').then((res) => {
          let products = res.data.items;
          if(products.length > 0) {
            for(let key in products) {
              products[key].qty = 1;
              this.products.push(products[key]);
            }
          }
           this.isLoad = true;
        })
        this.updateCard();
    },
    addCard: function(row) {
      this.$store.dispatch('card/cardAdd', row);
      this.updateCard();
    },
    updateCard: function() {
      this.cards = this.$store.getters['card/cardInfo'];
      this.$store.dispatch('card/cardUpdate');
      this.totalAmount = this.$store.getters['card/totalAmount'];
      this.totalCard = this.$store.getters['card/totalCard'];
    },
    deleteCard: function(key) {
      this.$store.dispatch('card/cardDelete', key);
      this.updateCard();
    },
    checkout: function() {
      this.$router.push('/checkout')
      
    }
}
}
</script>
