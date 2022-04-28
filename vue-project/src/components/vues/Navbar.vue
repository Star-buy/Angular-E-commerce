<template>
  <div>
    <header>
      <a href="#" class="logo" ><i class="fas fa-utensils"></i>Star-buy</a>

      <div id="menu-bar" class="fas fa-bars"></div>

      <nav class="navbar">
        <router-link class="nav-link" to="/Home">Home</router-link>
        <router-link class="nav-link" to="/UnderNav">Products</router-link>
        <router-link class="nav-link" to="/Review">Review</router-link>
        <router-link href="#order" to="/Signin">Login</router-link>
        <router-link href="#order" to="/AdminPart">Admin</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap");

:root {
  --red: #ff3838;
}

* {
  font-family: "Nunito", sans-serif;
  /* margin: 0;
  padding: 0; */
  /* box-sizing: border-box; */
  outline: none;
  border: none;
  text-decoration: none;
  /* text-transform: capitalize; */
  /* transition: all 0.2s linear; */
}

*::selection {
  background: var(--red);
  color: #fff;
}

body {
  background: #f7f7f7;
}

.heading {
  text-align: center;
  font-size: 3.5rem;
  padding: 1rem;
  color: #666;
}

.heading span {
  color: var(--red);
}

.btn {
  display: inline-block;
  padding: 0.8rem 3rem;
  border: 0.2rem solid var(--red);
  color: var(--red);
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  margin-top: 1rem;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0%;
  height: 100%;
  background: var(--red);
  transition: 0.3s linear;
  z-index: -1;
}

.btn:hover::before {
  width: 100%;
  left: 0;
}

.btn:hover {
  color: #fff;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181925;
  padding: 1.5rem 9%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

header .logo {
  font-size: 2.5rem;
  font-weight: bolder;
  color:#ff621e
}

header .logo i {
  padding-right: 0.5rem;
  color: var(--red);
}

header .navbar a {
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #fefefe;
}

header .navbar a:hover {
  color: var(--red);
}
</style>
