<template>
  <section class="product">
    <h2 class="product-category">Selling</h2>
    <div class="product-container">
     <div  v-for="(post) in posts" :key="post.id"  class="product-card">
        <div class="product-image">
            <span class="discount-tag" v-if='post.discount' > {{post.discount}}% off</span>
            <img :src="post.image" class="product-thumb">
            <button class="card-btn" @click="showdata(post)" >add to whislist</button><br/>
        </div>
        <div class="product-info">
            <h2  class="product-brand"> {{post.title}} </h2>
            <p class="product-short-des"> {{post.description}} </p>
            <span  class="price">{{post.price}} TND </span><span class="actual-price" v-if='post.discount'  > {{ (post.price * post.discount / 100)}} TND</span>
        </div>
    </div>
</div>
<payment v-if="boolean" :msg=[index1,index2,price] />
</section>
</template>
<script>
import axios from "axios";
import payment from "./payment.vue"
export default {
  components: {
    payment
  },
  name: "Card",
    props:['msg'],
  data() {
   return{
       index1:'',
       index2:'',
       price:'',
      data:null,
      imgsrc:null,
      boolean:false,
posts:[],
   }
   },
   mounted(){
         axios.get('http://localhost:5000/admin')
         .then((result)=>{
          this.posts= result.data
             } )
             .catch((error)=>{console.log(error)})
  },
  methods: {
      showdata(post) {
          this.index1= post.title
          this.index2= post.image
          this.price= post.price-(post.price * post.discount / 100)
          this.boolean=true
      },
}
}
</script>
<style>
 section{
    background-color:#e5e8f6;
}
.product{
    position: relative;
    overflow: hidden;
    padding: 20px 0;
}
.product-category{
    text-align: center;
    color:rgb(212, 141, 141);
    padding: 0 10vw;
    font-size: 43px;
    font-weight: 500;
    margin-bottom: 40px;
    text-transform: capitalize;
}
.product-container{
    padding: 0 10vw;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
}
.product-container::-webkit-scrollbar{
    display: none;
}
.product-card{
    flex: 0 0 auto;
    width: 250px;
    height: 450px;
    margin-right: 40px;
}
.product-image{
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}
.product-thumb{
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius:16px
}
.discount-tag {
    position: absolute;
    background: #fff;
    padding: 11px;
    border-radius: 6px;
    color: #FF7D7D;
    font-size: 16px;
    right: 10px;
    top: 10px;
    text-transform: capitalize;
}
.card-btn{
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
.product-card:hover .card-btn{
    opacity: 1;
}
.card-btn:hover{
    background: #EFEFEF;
}
.product-info{
    width: 100%;
    height: 100px;
    padding-top: 10px;
}
.product-brand{
    text-transform: uppercase;
    font-size:17px
}
.product-short-des{
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    opacity: 0.7;
    font-size:12px;
    text-transform: capitalize;
    margin: 5px 0;
}
.price{
    font-weight: 900;
    font-size: 20px;
}
.actual-price{
    margin-left: 20px;
    opacity: 0.5;
    text-decoration: line-through;
        font-weight: 900;
    font-size: 20px;
    color :red;
}
</style>