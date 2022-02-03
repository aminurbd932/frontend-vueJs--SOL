<template>
  <div class="home">
    <h1>Invoice</h1>
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Current Price</th>
        <th scope="col">Qantity</th>
        <th scope="col">Sub Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, key) in cards" :key="key">
        <th scope="row">{{key+1}}</th>
        <td>{{row['productName']}}</td>
        <td>{{row['currentSalePrice']}}</td>
        <td>{{row['qty']}}</td>
    
        <td>{{row['currentSalePrice'] * row['qty']}}</td>
      </tr>
      </tbody>
      <thead>
        <tr>
          <th>{{totalCard}}</button></th>
          <th>{{totalAmount}}Tk</button></th>
        </tr>
      </thead>
    </table>
    <h2>Shipping Info</h2>
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">shipping Name</th>
        <th scope="col">shipping PhoneNo</th>
        <th scope="col">shipping Address</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" class="form-control" v-model="shippingInfo['shippingName']" /></td>
          <td><input type="text" class="form-control" v-model="shippingInfo['shippingPhoneNo']" /></td>
          <td><input type="text" class="form-control" v-model="shippingInfo['shippingAddress']" /></td>
        </tr>
      </tbody>
    </table>
    <div><button type="button" class="btn btn-info btn-small" @click="payment()">Payment</button></div>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
        isLoad:false,
        cards:[],
        totalCard:0,
        totalAmount:0,
        shippingInfo:{
          shippingName:'',
          shippingPhoneNo:'',
          shippingAddress:''
        }
      }
  },
  mounted() {
      this.loadData();
    },
    methods: {
      loadData: function() {
        this.cards = this.$store.getters['card/cardInfo'];
        this.totalAmount = this.$store.getters['card/totalAmount'];
        this.totalCard = this.$store.getters['card/totalCard'];
        this.isLoad = true;
    },
    payment: function() {
      this.$store.dispatch('card/cardDestroy');
      this.$router.push('/');
    }
  }
}
</script>
