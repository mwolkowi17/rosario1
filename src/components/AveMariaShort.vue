<template>
  <div class="preyer-container fade-in">
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
  background-color: #f4f5f0;
  border: solid 4px #00000063;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 11;
}

.fade-in {
  animation: fadeIn 1.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  font-family: "Lato";
}
</style>
