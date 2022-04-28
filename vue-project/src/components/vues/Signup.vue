<template>
  <div class="conti">
    <div class="left"></div>
    <div class="right">
    <h1 style="color:#b64b20">Registration</h1><br/>
    <div>
      <p>Fill your name</p>
      <input type="text" placeholder="Your Name..." class="nwme" name="name" v-model="name" >
      <p>Email</p>
      <input type="email" placeholder="@gmail.com" class="nwme" name="email" v-model="email">
      <p>Password</p>
      <input type="password" placeholder="Your Password..." class="nwme" name="password" v-model="password">
      <p>Confirm Passwordd</p>
      <input type="password" placeholder="Your Password..." class="nwme"><br/>
    <select class="nwme" @change="change($event)" name="gender" style="align-items: center">
      <option value="none" selected>Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="kids">kids</option>
    </select>
          <div v-if="!image">
            <h2 class="textoo">Select your image</h2>
            <input type="file" @change="onFileChange" class="files"/>
          </div>
          <div v-else>
            <img :src="image" class="imaget" />
          </div>
      <button @click="register" class="btna">registrer</button>
    </div>
    <span class="span-span"
                >login
                <router-link href="" class="a-a" to="/Signin"
                  >login</router-link
                ></span
              >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    name: "Signup",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      image: "",
    };
  },
  methods: {
    register() {
              if(this.name && this.email && this.password ){

      if(this.image){
      axios
        .post("http://localhost:5000/signup", {
          username: this.name,
          email: this.email,
          image: this.image,
          password: this.password,
        })
        .then((result) => {
          alert(result.data)
          if(result.data === "signup successful"){
          // window.location.href = 'http://localhost:5000/Signin'
          }
        })
        .catch((err) => {
          console.log(err);
          alert('registrer failed')
        })}else{
          axios
        .post("http://localhost:5000/signup", {
          username: this.name,
          email: this.email,
          password: this.password,
        })
        .then((result) => {
            alert(result.data)
          if(result.data === "signup successful"){
          // window.location.href = 'http://localhost:5000/Signin'
          }
        })
        .catch((err) => {
          console.log(err);
          alert('registrer failed')
        })
        }}else{
          alert('fill all the fields')
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
.conti {
  width: 900px;
  height: 700px;
  margin: 93px auto;
  box-sizing:border-box;
  background-color: #181925;
  padding: 25px 100px;
  box-shadow: 0px 8px 16px gray;
}
.left {
  width: 50%;
  height: 650px;
  float: left;
  background: url("https://www.forbes.com/advisor/wp-content/uploads/2021/04/featured-image-pack-clothes.jpeg.jpg");
  background-size: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
}
.right {
  width: 50%;
  height: 650px;
  float: left;
  background: #f7f7f7;
  border-top-right-radius: 10px;
  border-top-right-radius: 10px;
  padding:-1 30px;
  text-align: center;
  
  
}
.nwme {
    width: 82%;
    height: 53px;
    border: 1px solid #ccc;
    border-radius: 11px;
    margin-bottom: 16px;
    padding-left: 18px;
}
.btna{
  width:130px;
  padding:7px;
  background-color:#b64b20;
  color:white;
  font-size:20px;
  border:none;
  border-radius:10px;
  margin-top:10px;
  cursor: pointer;
}
.btna:hover{
  background-color:#181925;
}
.textoo {
  text-align: center;
  color: #b64b20;
} 
.files{
  color:white
}
</style>
