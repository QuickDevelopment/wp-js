<script setup lang="ts">
import { PostDataType, Post } from "@quickdevelopment/wp-js";
import {ref} from "vue";
const posts = new Post();
const allPosts = ref<PostDataType[]>()

posts.fetchMany().then((data: PostDataType[]) => {
  allPosts.value = data;
});
</script>

<template>
  <div>
    <a v-for="post in allPosts" :href="post.link">
      <h2>{{ post.title.rendered }}</h2>
      <img width="300" :src="post.jetpack_featured_media_url" :alt="post.title.rendered"/>
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
