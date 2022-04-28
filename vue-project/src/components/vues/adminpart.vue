<template>
  <body>
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
          <router-link href="#order" to="/AdminProducts" style="color:aliceblue">Add Product</router-link>
        </li>
        <li>
          <img src="" alt="" />&nbsp;
          <router-link href="#order" to="/AdminData"  style="color:aliceblue" >admin data</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="content">
        <div class="cards">
          <div class="card">
            <div class="box">
              <h1>150</h1>
              <h3>Customers</h3>
            </div>
            <div class="icon-case">
              <img src="" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h1>15</h1>
              <h3>Investors</h3>
            </div>
            <div class="icon-case">
              <img src="" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h1>5</h1>
              <h3>Stores</h3>
            </div>
            <div class="icon-case">
              <img src="" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="box">
              <h1>350000</h1>
              <h3>Income</h3>
            </div>
            <div class="icon-case">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div class="content-2">
          <div class="recent-payments">
            <div class="title">
              <h2>Recent Payments</h2>
              <a href="#" class="btn">View All</a>
            </div>
            <table>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Amount</th>
                <th>Option</th>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Massoudi</td>
                <td>120 TND</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>Omar</td>
                <td>Massoudi</td>
                <td>150 TND</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>Amir</td>
                <td>Abid</td>
                <td>1200 TND</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>Sami</td>
                <td>Mansour</td>
                <td>60 TND</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>Ghassen</td>
                <td>Rgig</td>
                <td>120 TND</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
              <tr>
                <td>Wassim</td>
                <td>Falleh</td>
                <td>70 TND</td>
                <td><a href="#" class="btn">View</a></td>
              </tr>
            </table>
          </div>
          <div class="new-students">
            <div class="title">
              <h2>New Customers</h2>
              <a href="#" class="btn">View All</a>
            </div>
            <table>
              <tr>
                <th>Gender</th>
                <th>Name</th>
                <th>Photo</th>
              </tr>
              <tr>
                <td>Man</td>
                <td>Steve Joe</td>
                <td><img src="https://toyfairny.com/App_Themes/toyfair/images/promo/jeremy-gutsche710x444.jpg" alt="" /></td>
              </tr>
              <tr>
                <td>Man</td>
                <td>Lotfi bouchnak</td>
                <td><img src="https://besthqwallpapers.com/Uploads/29-7-2017/17291/thumb2-4k-martin-garrix-portrait-guys-dj.jpg" alt="" /></td>
              </tr>
              <tr>
                <td>Female</td>
                <td>Malek boughatas</td>
                <td><img src="https://c4.wallpaperflare.com/wallpaper/833/263/589/emma-watson-444-hd-wallpaper-preview.jpg" alt="" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: "AdminPart",
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100vh;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
h1,
h2 {
  color: #FF621E;
}
h3 {
  color: #999;
}
.btn {
  background: #FF621E;
  color: white;
  padding: 5px 10px;
  text-align: center;
}
.btn:hover {
  color: #FF621E;
  background: white;
  padding: 3px 8px;
  border: 2px solid #F05462;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 10px;
  border-bottom: 2px solid #999;
}
table {
  padding: 10px;
}
th,
td {
  text-align: left;
  padding: 8px;
}
.side-menu {
  position: fixed;
  background: #181925;
  width: 20vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.side-menu .brand-name {
  height: 29vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.side-menu li {
  font-size: 24px;
  padding: 10px 40px;
  color: white;
  display: flex;
  align-items: center;
}
.side-menu li:hover {
  background: white;
  color: #FF621E;
}
.container {
  position: absolute;
  right: 0;
  width: 80vw;
  height: 100vh;
  background: #F1F1F1;
}
.container .header {
  position: fixed;
  top: 0;
  right: 0;
  width: 80vw;
  height: 10vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.container .header .nav {
  width: 90%;
  display: flex;
  align-items: center;
}
.container .header .nav .search {
  flex: 3;
  display: flex;
  justify-content: center;
}
.container .header .nav .search input[type="text"] {
  border: none;
  background: #F1F1F1;
  padding: 10px;
  width: 50%;
}
.container .header .nav .search button {
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .header .nav .search button img {
  width: 30px;
  height: 30px;
}
.container .header .nav .user {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container .header .nav .user img {
  width: 40px;
  height: 40px;
}
.container .header .nav .user .img-case {
  position: relative;
  width: 50px;
  height: 50px;
}
.container .header .nav .user .img-case img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.container .content {
  position: relative;
  margin-top: 10vh;
  min-height: 90vh;
  background: #F1F1F1;
}
.container .content .cards {
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.container .content .cards .card {
  width: 250px;
  height: 150px;
  background: white;
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.container .content .content-2 {
  min-height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
.container .content .content-2 .recent-payments {
  min-height: 50vh;
  flex: 5;
  background: white;
  margin: 0 25px 25px 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
}
.container .content .content-2 .new-students {
  flex: 2;
  background: white;
  min-height: 50vh;
  margin: 0 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
}
.container .content .content-2 .new-students table td:nth-child(1) img {
  height: 40px;
  width: 40px;
}
@media screen and (max-width: 1050px) {
  .side-menu li {
    font-size: 18px;
  }
}
@media screen and (max-width: 940px) {
  .side-menu li span {
    display: none;
  }
  .side-menu {
    align-items: center;
  }
  .side-menu li img {
    width: 40px;
    height: 40px;
  }
  .side-menu li:hover {
    background: #FF621E;
    padding: 8px 38px;
    border: 2px solid white;
  }
}
@media screen and (max-width: 536px) {
  .brand-name h1 {
    font-size: 16px;
  }
  .container .content .cards {
    justify-content: center;
  }
  .side-menu li img {
    width: 30px;
    height: 30px;
  }
  .container .content .content-2 .recent-payments table th:nth-child(2),
  .container .content .content-2 .recent-payments table td:nth-child(2) {
    display: none;
  }
}
.imaget-t {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 43px;
  border-radius: 50%;
  width: 5cm;
  height: 4cm;
}
</style>