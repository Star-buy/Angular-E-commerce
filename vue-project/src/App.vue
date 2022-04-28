<template>
<div>
  <div>
   <main><Navbar /></main> 
    <router-view/>
  </div>
  <div> 
    <AdminPart/>
  </div>
  <div>
    <UnderNav/>
  </div>
  </div>
</template>

<script>
                                                    
// import UnderNav from "./components/UnderNav.vue";
 import Footer from "./components/vues/Footer.vue";
 import Navbar from "./components/vues/Navbar.vue"
 import Post from "./components/vues/Post.vue"
 import UnderNav from "./components/vues/UnderNav.vue"
export default {
  name: "App",
  components: {
     Navbar,
     
},
};
</script>

<style></style>
