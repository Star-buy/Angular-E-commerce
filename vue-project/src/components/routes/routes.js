import { createWebHistory, createRouter } from "vue-router";

import UnderNav from "../vues/UnderNav.vue";
import Review from "../vues/Review.vue";
import Footer from "../vues/Footer.vue";
import Signup from "../vues/Signup.vue";
import Signin from "../vues/Signin.vue";
import AdminPart from "../vues/AdminPart.vue";
// import Post from "../vues/Post.vue";
import AdminProducts from "../vues/AdminProducts.vue";
import AdminData from "../vues/AdminData.vue";
import Male from "../vues/Male.vue";
import Female from "../vues/Female.vue";
import Kids from "../vues/Kids.vue";
import Home from "../vues/Home.vue";
const routes = [
  {
    path: "/UnderNav",
    name: "UnderNav",
    component: UnderNav,
  },
  {
    path: "/Male",
    name: "Male",
    component: Male,
  },  {
    path: "/Female",
    name: "Female",
    component: Female,
  },  {
    path: "/Kids",
    name: "Kids",
    component: Kids,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/Review",
    name: "Review",
    component: Review,
  },
{
  path: "/AdminData",
  name: "AdminData",
  component: AdminData,
},
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/AdminPart",
    name: "AdminPart",
    component: AdminPart,
  },
  {
    path: "/AdminProducts",
    name: "AdminProducts",
    component: AdminProducts,
  },
  {
    path: "/Home",
    name: "Home",
    component:Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
