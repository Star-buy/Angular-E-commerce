<template>

<div>
  <div class="rev-section">
    <h2 class="title">Our Custumers Love Us</h2>
    <p class="note">
      Your Feedback helps us improve our service and support . Please take a minute to rate your exprecice with our representative today!
    </p>
    <div class="con">
      <div class="brandi"></div>
      <div class="brandtitle">Give as a review</div>
      <form >
        <div class="inputsss">
          <label class="pass" for="name">NAME</label>
          <input
            type="texte"
            class="inpat"
            placeholder="Put your name ..."
            v-model="name"
          />
          <label class="pass" for="location">LOCATION</label>
          <input
            type="texte"
            class="inpat"
            placeholder="Put your Location ..."
            v-model="location"
          />
          <label class="pass" for="image">ADD YOUR IMAGE</label>
          <div v-if="!image">
            <h2 class="texto">Select your image</h2>
            <input type="file" @change="onFileChange" />
          </div>
          <div v-else>
            <img :src="image" class="imaget" />
          </div>
          <label class="passs">DESCRIPTION</label>
          <textarea type="description" v-model="description" />
          <button type="submit" class="log" @click="postReview">Send</button>
        </div>
      </form>
    </div>
  </div>
  <ReviewList/>

</div>
</template>
<script>
import ReviewList from "./ReviewList.vue"
import axios from "axios";
export default {
  name: "Review",
  components: {
    ReviewList,
  },
  data() {
    return {
        name: "",
        image: "",
        location: "",
        description: "",
    };
  },
  methods: {
    postReview() {
      axios
        .post("/test", {name:this.name, image:this.image,location:this.location,description:this.description})
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
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
  },
};
</script>
<style>
 .con {
  position: relative;
  width: 456px;
  height: 527px px;
  border-radius: 23px;
  padding: 40px;
  margin: 44px auto;
  box-sizing: border-box;
  background: #ECF0F3;
  box-shadow: 14px 14px 20px #CBCED1, -14px -14px 20px white;
}
.brandi {
  height: 100px;
  width: 100px;
  background: url("https://img.icons8.com/color/100/000000/clothes--v2.png");
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #CBCED1, -7px -7px 10px white;
}
.brandtitle {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #1DA1F2;
  letter-spacing: 1px;
}
.inputsss {
  text-align: left;
  margin-top: 30px;
}
.pass,
.inpat,
.log {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-top: 12px;
}
.pass {
  margin-bottom: 4px;
}
.pass:nth-of-type(2) {
  margin-top: 12px;
}
.pass::placeholder {
  color: gray;
}
  .inpat {
    background: #ECF0F3;
    padding: 13px;
    padding-left: 24px;
    height: 62px;
    font-size: 18px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #CBCED1, inset -6px -6px 6px white;
}
.inpatt {
  background: #ECF0F3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #CBCED1, inset -6px -6px 6px white;
}
.pass,
.inpatt,
.log {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.log {
  color: rgb(255 255 255);
  margin-top: 23px;
  background: #1DA1F2;
  height: 47px;
  border-radius: 11px;
  cursor: pointer;
  font-weight: 950;
  box-shadow: 6px 6px 6px #CBCED1, -6px -6px 6px white;
  transition: 0.5s;
}
.log:hover {
  box-shadow: none;
}
.tati {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}
textarea {
  display: block;
  width: 100%;
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
.imaget {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
  width: 2cm;
  height: 2cm;
}
.texto {
  text-align: center;
  color: #1DA1F2;
}
.title{
  color:#ff621e;
}
</style>