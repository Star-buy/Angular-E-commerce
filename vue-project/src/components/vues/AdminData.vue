<template>
<div>
  <section class="productt" >
    <h2 class="product-category">fares</h2>
    <input
      class="search"
      v-model="search"
      type="text"
      placeholder="Search Product..."
    />
    <div class="product-container">
      <div v-for="post in filteredPosts()" :key="post.id" class="product-card">
        <div class="product-image">
          <span class="discount-tag" v-if="post.discount">
            {{ post.discount }}% off</span
          >
          <img :src="post.image" class="product-thumb" />
          <button class="card-btn1" @click="updateitem(post.id)">Update</button
          ><br />
          <button class="card-btn2" @click="deleteitem(post.id)">Delete</button>
        </div>
        <div class="product-info">
          <h2 class="product-brand">{{ post.title }}</h2>
          <p class="product-short-des">{{ post.description }}</p>
          <span class="price">${{ post.price }} TND </span
          ><span class="actual-price" v-if="post.discount">
            {{ (post.price * post.discount) / 100 }} TND</span
          >
        </div>
      </div>
      <signin msg="lol" />
    </div>
  </section>
  <h1 style="text-align: center" class="update-h1">Update The Product</h1>
  <div class="omar">
    <p class="string">Title</p>
    <input
      type="text"
      name="title"
      v-model="title"
      class="nwme-me"
      placeholder="Product name..."
    />
    <p class="string">Price</p>
    <input
      type="text"
      name="desc"
      v-model="price"
      class="nwme-me"
      placeholder="Product Price..."
    />
    <p class="string">discount</p>
    <input
      type="text"
      placeholder="discount"
      class="nwme-me"
      v-model="discount"
    /><br />
    <p class="string">Select Gender</p><br/>
    <select class="nwme-me" @change="change($event)" name="gender" style="align-items: center">
      <option value="none" selected>Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="kids">kids</option>
    </select>
    <p class="string">Description</p><br/>
    <textarea
      type="text"
      name="desc"
      v-model="description"
      class="nwme-me"
      placeholder="Product description...."
    >
    </textarea>
    <br />
    <div v-if="!image">
      <h2 class="textoo-o">Select a product image</h2>
      <input type="file" @change="onFileChange" class="files" />
    </div>
    <div v-else>
      <img :src="image" class="imaget-t" />
    </div>
    <br />
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "AdminData",
  props: ["msg"],
  data() {
   return{
        data:null,
      imgsrc:null,
      boolean:false,
      posts:[],
       search: "",
title:'',
description:'',
image:'',
price:'',
discount:'',
gender:''
   }
   },
 mounted(){
         axios.get('http://localhost:5000/admin')
         .then((result)=>{
          this.posts= result.data
          this.filteredPosts()
             })
             .catch((error)=>{console.log(error)})
  },
  methods: {
          filteredPosts(){
            console.log(this.posts,'filter')
       return this.posts.filter(post =>
         post.title.toLowerCase().includes(this.search.toLowerCase())
       );
     },
     deleteitem(postId){
    axios.delete('http://localhost:5000/'+`${postId}`).then(()=>{window.location.reload()}).catch((err)=>{console.log(err)})
     },
     change(e){
    var g = e.target.value
    this.gender = g
  },
   updateitem(postId){
     if(this.title && this.description && this.image && this.price){
   axios.put('http://localhost:5000/'+`${postId}`,{
      title: this.title,
      description: this.description,
      image:this.image,
      price:this.price,
      discount:this.discount,
      gender:this.gender
   }).then((result) => {
    alert(result.data)
    window.location.reload()
    })
    .catch(err => {
        console.log(err)
    })
    }else{
      alert('please fill all the fields')
    }
     },
  onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
    },
  },
};
</script>
<style>
.productt {
  background-color: #FFEEE6;
}
.productt {
  position: relative;
  overflow: hidden;
  padding: 20px 0;
}
.update-h1{
  font-style:italic
}
.productt-category {
  text-align: center;
  color: rgb(212, 141, 141);
  padding: 0 10vw;
  font-size: 43px;
  font-weight: 500;
  margin-bottom: 40px;
  text-transform: capitalize;
}
.productt-container {
  padding: 0 10vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}
.productt-container::-webkit-scrollbar {
  display: none;
}
.productt-card {
  flex: 0 0 auto;
  width: 250px;
  height: 450px;
  margin-right: 40px;
}
.productt-image {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}
.productt-thumb {
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
  color: #FF7D7D;
  font-size: 16px;
  right: 10px;
  top: 10px;
  text-transform: capitalize;
}
.card-btn2 {
  position: absolute;
  bottom: 10px;
  left: 75%;
  transform: translateX(-50%);
  padding: 10px;
  width: 40%;
  text-transform: capitalize;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  opacity: 0;
}
.card-btn1 {
  position: absolute;
  bottom: 10px;
  right: 35%;
  transform: translateX(-50%);
  padding: 10px;
  width: 40%;
  text-transform: capitalize;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  opacity: 0;
}
.product-card:hover .card-btn2 {
  opacity: 1;
}
.product-card:hover .card-btn1 {
  opacity: 1;
}
.card-btn2:hover {
  background: #EFEFEF;
}
.card-btn1:hover {
  background: #EFEFEF;
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
.nwme-me {
  width: 43%;
  height: 53px;
  border: 1px solid #ccc;
  border-radius: 11px;
  margin-bottom: 16px;
  padding-left: 21px;
  font-size: x-large;
  text-align: inherit;
  margin-left: 17cm;
}
.seletec{
  width: 43%;
  height: 53px;
  border: 1px solid #ccc;
  border-radius: 11px;
  margin-bottom: 16px;
  padding-left: 21px;
  font-size: x-large;
  text-align: inherit;
  margin-left: 17cm;
}
.nwme-desc {
  display: block;
  width: 50%;
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ECF0F3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 22px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #CBCED1, inset -6px -6px 6px white;
}
.files {
  margin-left: 10cm;
}
.select {
  margin-left: 26cm;
}
.string {
  margin-left: 17cm;
}
.search {
  margin-left: 22cm;
  width: 513px;
  border-radius: 34px;
  display: flex;
  height: 81px;
  margin-top: 40px;
  padding-bottom: 1px;
  padding-left: 20px;
  font-size: xx-large;
}
.search-box {
  width: 80%;
  height: 50px;
  padding: 20px;
  border-top-left-radius: 17px;
  border: 1px solid #000000;
  font-size: medium;
  background: none;
  color: #000000;
  outline: none;
}
.update-h1 {
  color: #FF621E;
  margin-bottom: 52px;
}
</style>