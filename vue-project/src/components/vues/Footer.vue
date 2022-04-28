<template>
<footer>
    <div class="footer-content">
        <img src="/images/store.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Online shopping, clothes at low prices, discounts of up to 50%. That's all Star-Buy.com!
                    We take care to always offer you varied and trendy offers.
                    1040 E. Indian School Rd. Phoenix, AZ 85014
                    602.931.0090 / 602.430.2032
                    Mon - Sat, 10am - 5pm
                    Sun CLOSED</p>
    <p class="info">support emails - starbuybuisness@gmail.com</p>
    <p class="info">Phone -+216 27758151 </p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Star-buy Best Online Store</p>
</footer>
</template>

<script>
export default {
    name:"Footer",


}
</script>

<style>
footer{
    position: relative;
    width: 100%;
    padding: 40px 10vw;
    padding-bottom: 80px;
    background: #131313;
}

.footer-content{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.footer-content .logo{
       height: 170px;
}

.footer-ul-container{
    width: 45%;
    display: flex;
    justify-content: space-between;
}

.category{
    width: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    list-style: none;
}

.category-title{
    grid-column: span 2;
    text-transform: capitalize;
    color: #fff;
    font-size: 26px;
    margin-bottom: 20px;
}

.category .footer-link{
    text-decoration: none;
    text-transform: capitalize;
    font-size:16px;
    color: rgba(255, 255, 255, 0.75);
}

.footer-link:hover{
    color: rgb(255, 0, 0);
}
.footer-title, .info{
    color: rgba(255, 255, 255, 0.75);
    margin: 20px 0;
    text-transform: capitalize;
    font-size:20px
}

.footer-title{
    margin-top: 80px;
    color: #fff;
}

.footer-social-container{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.social-link{
    color: #fff;
    margin-left: 20px;
    text-transform: capitalize;
    font-size:20px;
}

.social-link:nth-child(1){
    margin-left: 0;
}

.footer-credit{
    width: 100%;
    padding: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    background: rgb(16, 15, 15);
}
</style>