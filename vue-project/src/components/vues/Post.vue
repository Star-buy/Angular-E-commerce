<template>
  <article>
    <h3>{{ title }}</h3>
    <p>{{description}}</p>

    <img v-bind:src="`${image}`"/>
    <!-- <p>{{post.image}}</p> -->
  </article>
</template>
<script>
export default {
  name:"Post",
    props: ["title","description","image"]

};
</script>