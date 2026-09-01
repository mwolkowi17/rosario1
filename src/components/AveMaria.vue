<template>
  <div class="preyer-container">
    <h1 class="main-title">Hail Mary</h1>
    <p class="main-text">{{ prayer.Hail_Mary }}</p>
  </div>
</template>
<script setup lang="ts">
import prayer from "../lib/preyers.json";
</script>
<style scoped>
.preyer-container {
  position: absolute;
  width: 700px;
  height: 400px;
  left: 50px;
  top: 50px;
  background-color: #ffffff;
  border: solid 2px #000000;
  padding: 20px;
  z-index: 11;
}
.main-title {
  color: #000000;
  font-size: 44px;
  text-align: center;
  font-weight: bold;
}
.main-text {
  color: #000000;
  font-size: 30px;
}
</style>
