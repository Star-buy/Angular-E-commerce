<template>
<div>
  <div>
    <div class="side-menu">
      <div class="brand-name">
        <h1>Admin Side-Bar</h1>
      </div>
      <div class="img-case">
        <img src="/images/admin.png" alt="" class="imaget-t" />
      </div>
      <ul>
        <li>
          <img src="/images/dashboard.png" alt="" />&nbsp;
          <span>Dashboard</span>
        </li>
        <li>
          <img src="" alt="" />&nbsp;
          <router-link
            href="#order"
            to="/AdminProducts"
            style="color: aliceblue"
            >Add Product</router-link
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="continer">
    <div class="left-le"></div>
    <div class="right-re">
      <h1 style="color: rgb(252 189 57)">Add Product</h1>
      <br />
      <div>
        <p>Title</p>
        <input type="text" name="title" v-model="title" class="nwme-ne" placeholder="Product name..."/>
        <p>Price</p>
        <input type="text" name="desc" v-model="price" class="nwme-ne" placeholder="Product Price..."/>
<p>discount</p>

                    <input type="text" placeholder='discount'  class="nwme-ne"  v-model="discount" /><br/>

        <p>Description</p>

        <textarea type="text" name="desc" v-model="description"  style="width: 100%" placeholder="Product description...">
        </textarea>

        <input />
        <br />
        <div v-if="!image">
          <h2 class="textoo-o">Select your image</h2>
          <input type="file" @change="onFileChange" class="files" />
          
        </div>
        
        <div v-else>
          <img :src="image" class="imaget-t" />
        </div><br/>
          <select  @change="change($event)"  name="gender">
	<option value="none" selected>Gender</option>
	<option  value="male">Male</option>
	<option  value="female">Female</option>
	<option  value="kids">kids</option>
</select>
        <button @click="post" class="btna">Add</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
data() {
   return{
   
      data:null,
      imgsrc:null,
      boolean:false,
title:'',
description:'',
image:'',
price:'',
discount:'',
gender:''
   }
},
methods: {
  change(e){
    var g = e.target.value
    this.gender = g
  },
   post(){
     if(this.title && this.description && this.image && this.price){
   axios.post('http://localhost:5000/admin',{  
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
      if (!files.length)
        return;
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
      this.image = '';
    }}
}

</script>

<style>
.continer {
  width: 950px;
  height: 974px;
  margin: 90px auto;
  box-sizing: border-box;
  background-color: #e9e9f3;
  padding: 162px 22px;
  box-shadow: 0px 8px 16px grey;
}
.left-le {
  width: 50%;
  height: 650px;
  float: left;
  background: url("https://www.kindpng.com/picc/m/368-3685978_admin-icon-gray-hd-png-download.png");
  background-size: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.right-re {
  width: 50%;
  height: 650px;
  float: left;
  background: #f7f7f7;
  border-top-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: -1 30px;
  text-align: center;
}
.nwme-ne {
  width: 82%;
  height: 53px;
  border: 1px solid #ccc;
  border-radius: 11px;
  margin-bottom: 16px;
  padding-left: 18px;
  font-size: x-large;
}
.btna {
  width: 130px;
  padding: 7px;
  background-color: #b64b20;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.btna:hover {
  background-color: #181925;
}
.textoo-o {
  text-align: center;
  color: #fcbd39;
}
.files {
  color: white;
}
.imaget-t {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  /* border-radius: 50%; */
  width: 2cm;
  height: 2cm;
}
</style>
