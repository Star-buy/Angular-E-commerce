<template>
   <div>
    <h1>admin</h1>
    <input type="text" placeholder="title" name="title" v-model="title" /><br/>
    <input type="text" placeholder='description' name="desc" v-model="description" /><br/>
    <input type="text" placeholder='price' name="desc" v-model="price" /><br/>
    <input type="text" placeholder='discount' name="desc" v-model="discount" /><br/>
    <select  @change="change($event)"  name="gender">
	<option value="none" selected>Gender</option>
	<option  value="male">Male</option>
	<option  value="female">Female</option>
	<option  value="kids">kids</option>
</select>
  {{data}}
<div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <img :src="image" />
    <button @click="removeImage">Remove image</button>
  </div> 
      <button @click="post">post item</button>
  </div>
</template>

<style>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
    width: 2cm;
    height: 2cm;
}

</style>