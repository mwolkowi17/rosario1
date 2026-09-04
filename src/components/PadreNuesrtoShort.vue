<template>
  <div class="preyer-container">
    <p class="main-text">{{ prayer.Ojcze_Nasz }}</p>
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
  background-color: #f4f5f0;
  border: solid 4px #00000063;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /*dla porównania nieco mocniejszy shadow*/
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
