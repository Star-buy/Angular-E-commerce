<template>
  <section class="product">
    <h2 class="product-category">Selling</h2>
    <payment v-if="boolean" :msg=[index1,index2,price] />
    <signin :mesage='hahahahah' />
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
            <span  class="price">${{post.price}} TND </span><span class="actual-price" v-if='post.discount'  > {{ (post.price * post.discount / 100)}} TND</span>
        </div> 
    </div>
    <signin msg='lol' />
</div>

</section>
</template>

<script>
import payment from "./payment.vue"
import axios from "axios"
export default {
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
   components:{
payment
   },
   mounted(){
         axios.get('http://localhost:5000/kids')
         .then((result)=>{
          this.posts= result.data
             } )
             .catch((error)=>{console.log(error)})
  },
}

</script>
