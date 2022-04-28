<template>
 <div class="collection-container">
    <a href="#" class="collection">
        <img src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" alt="">
        <p class="collection-title">women <br> accessories</p>
    </a>
    <a href="#" class="collection">
        <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/man-serious-portrait-1296x728-header.jpg?w=1155&h=1528" alt="">
        <p class="collection-title">men <br> accessories</p>
    </a>
</div>
</template>

<script>
export default {
    name:"Accessories",

}
</script>

<style>
 .collection-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}

.collection{
    position: relative;
}

.collection img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.collection p {
    position: absolute;
    top: 87%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #000;
    font-size: 50px;
    text-transform: capitalize;
}

.collection:nth-child(3){
    grid-column: span 2;
    margin-bottom: 10px;
} 
</style>