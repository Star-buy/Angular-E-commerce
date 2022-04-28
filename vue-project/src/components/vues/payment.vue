<template>
  <div class="product">
    <h1 style="text-align: center" class="payment-title">Payment</h1>
    <img :src="image" class="product-img" />
    <div>
        <h4 class="pass" style="text-align: center" >Product Name</h4>
      <input
        v-model="title"
        readonly="readonly"
        placeholder="title"
        class="inpat-e"
      /><br />
      <h4 class="pass" style="text-align: center" >Product Price</h4>
      <input
        v-model="price"
        readonly="readonly"
        placeholder="price"
        class="inpat-e"
      /><br />
      <h4 class="pass" style="text-align: center" >Product Quantity</h4>
      <input
        v-model="quantity"
        type="number"
        placeholder="quantity"
        class="inpat-e"
      /><br />
      
      <button @click="post" :name="btnName" type="submit" class="button-three">Pay</button>
      {{ index }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "payment",
  props: { msg: Object },

  data() {
    return {
      title: this.msg[0],
      image: this.msg[1],
      price: this.msg[2],
      quantity: "",
    };
  },

  methods: {
    post() {
      if (this.title && this.price && this.quantity && this.image) {
        axios
          .post("http://localhost:5000/pay", {
            title: this.title,
            price: this.price,
            image: this.image,
            quantity: this.quantity,
          })
          .then((response) => {
            window.location.href = response.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("fill all the fields");
      }
    },
    clg() {
      console.log(this.props);
    },
  },
};
</script>
<style>
section {
  background-color: #e5e8f6;
}
.payment-title {
  text-align: center;
  color: rgb(212, 141, 141);
  padding: 0 10vw vw;
  font-size: 43px;
  font-weight: 500;
  margin-bottom: 40px;
  text-transform: capitalize;
  font-style: italic;
}
.product {
  position: relative;
  overflow: hidden;
  padding: 20px 0;
}
.product-category {
  text-align: center;
  color: rgb(212, 141, 141);
  padding: 0 10vw;
  font-size: 43px;
  font-weight: 500;
  margin-bottom: 40px;
  text-transform: capitalize;
}
.product-container {
  padding: 0 10vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}
.product-container::-webkit-scrollbar {
  display: none;
}
.product-card {
  flex: 0 0 auto;
  width: 250px;
  height: 450px;
  margin-right: 40px;
}
.inpat-e {
    display: block;
    width: 100%;
    display: block;
    width: 49%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: #ECF0F3;
    padding: 10px;
    padding-left: 17px;
    height: 75px;
    font-size: 22px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    margin-left: 494px;
    margin-top: 26px;
}


.product-img {
  width: 38%;
  height: 359px;
  object-fit: cover;
  border-radius: 16px;
  margin-left: 580px;
}
.product-thumb {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
}
.discount-tag {
  position: absolute;
  background: #fff;
  padding: 11px;
  border-radius: 6px;
  color: #ff7d7d;
  font-size: 16px;
  right: 10px;
  top: 10px;
  text-transform: capitalize;
}
.card-btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  width: 90%;
  text-transform: capitalize;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  opacity: 0;
}
.product-card:hover .card-btn {
  opacity: 1;
}
.card-btn:hover {
  background: #efefef;
}
.product-info {
  width: 100%;
  height: 100px;
  padding-top: 10px;
}
.product-brand {
  text-transform: uppercase;
  font-size: 17px;
}
.product-short-des {
  width: 100%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  opacity: 0.7;
  font-size: 12px;
  text-transform: capitalize;
  margin: 5px 0;
}
.price {
  font-weight: 900;
  font-size: 20px;
}
.actual-price {
  margin-left: 20px;
  opacity: 0.5;
  text-decoration: line-through;
  font-weight: 900;
  font-size: 20px;
  color: red;
}
.button-three {
    position: relative;
    background-color: #f39c12;
    border: none;
    padding: 20px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
}

.button-three:hover{
   background:#fff;
   box-shadow:0px 2px 10px 5px #97B1BF;
   color:#000;
}

.button-three:after {
    content: "";
    background: #f1c40f;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.button-three:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
 .button-three{
  text-align: center;
  cursor: pointer;
  font-size:24px;
  margin: 0 0 0 850px;
  border-radius: 13px;
}
</style>
