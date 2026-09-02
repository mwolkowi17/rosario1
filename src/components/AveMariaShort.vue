<template>
  <div class="preyer-container">
    <p class="main-text">{{ prayer.Zdrowas_Mario }}</p>
  </div>
</template>
<script setup lang="ts">
import prayer from "../lib/preyers.json";
</script>
<style scoped>
.preyer-container {
  position: absolute;
  width: 400px;
  height: 200px;
  left: 190px;
  top: 220px;
  background-color: #ffffff;
  border: solid 2px #000000;
  padding: 10px;
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
  font-size: 40px;
  text-align: center;
}
</style>
