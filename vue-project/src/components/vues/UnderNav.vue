<template>

<div>
  <div >
    <nav class="tapnavv">
      <div class="tapi">
        <img src="/images/sale.png" class="brandis" alt="" />
        <div class="nav-ii">
          <div class="sear">
            <input
              type="text"
              class="search-b"
              placeholder="search brand/Product"
            />
            <button class="search-bt">Search</button>
          </div>
          <a href="#"><img src="/images/user.png" /></a>
          <a href="#"><img src="/images/cart.png" /></a>
        </div>
      </div>
      <ul class="lin-container">
        <li class="li-item"><router-link class="li" href="#order" to="/Male" >man</router-link></li>
        <li class="li-item"><router-link class="li" href="#order" to="/Female" >woman</router-link></li>
        <li class="li-item"><router-link class="li" href="#order" to="/Kids" >Kids</router-link></li>
        <li class="li-item"><a href="#" class="li">Accessories</a></li>
      </ul>
    </nav>
  </div>
  <Card/>
  <Accessories/>
  </div>
</template>

<script>

import Card from "./Card.vue";
import Accessories from "./Accessories.vue";
import axios from "axios";
export default{
  components:{
    Card,
     Accessories
  },
    name:"UnderNav", 
 
}
</script>
<style>
.tapnavv {
  margin-top: 84px;
  left: 0;
  width: 100%;
  background-color: #bcbfe4;
  z-index: 9;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-bottom:0.5px ;
  
}
.tapi {
  top: 10px;
  padding: 10px 10vw;
  display: flex;
  justify-content: space-between;
}
.brandis {
  height: 127px;
}
.nav-ii {
  display: flex;
  align-items: center;
}
.sear {
  width: 500px;
  display: flex;
}
.search-b {
  width: 75%;
  height: 8px;
  padding: 24px;
  border-top-left-radius: 15px;
  border: 1px solid #000000;
  text-transform: capitalize;
  font-size: x-large;
  background: none;
  color: #181925;
  outline: none;
}
.search-bt {
  width: 20%;
  height: 50px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #181925;
  color: #fff;
  text-transform: capitalize;
  font-size: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.nav-ii a {
  margin-left: 20px;
}
.nav-ii a img {
  width: 30px;
}
.lin-container {
  width: 78%;
  display: flex;
  padding: 10px 10vw;
  justify-content: center;
  list-style: none;
  border-top: 1px solid #d1d1d1;
}
.li {
  padding: 8px 16px;
  margin: 11px 0px;
  font-size: 22px;
  text-decoration: none;
  color: #000000;
  opacity: 14.5;
  transition: 0.5s;
}
.li:hover {
  color: red;
  opacity: 1;
}
.hero-section {
  width: 111%;
  height: calc(100vh - 120px);
  background-image: url("/images/cart_8.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 
.hero-section .logo{
    height: 150px;
    display: block;
    margin: auto;
}
.hero-section .sub-heading{
    margin-top: 10px;
    text-align: center;
    color: rgb(0, 0, 0);
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 300;
}  */
</style>