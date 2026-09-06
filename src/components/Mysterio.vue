<template>
  <div class="mysterio-container">
    <div class="main-title">
      {{ mysterio.radosne[4].tajemnica }}
    </div>
    <div class="main-text">
      {{ mysterio.radosne[4].komentarz }}
    </div>
    <button class="button-mysterio">Dalej</button>
  </div>
</template>
<script setup lang="ts">
import mysterio from "../lib/mysteries.json";
</script>
<style scoped>
.mysterio-container {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 90px;
  top: 160px;
  background-color: #f4f5f0;
  border: solid 4px #00000063;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /*dla porównania nieco mocniejszy shadow*/
  padding: 30px;
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
  font-family: "Lato";
  margin-top: 20px;
}

.button-mysterio {
  position: absolute;
  width: 250px;
  height: 70px;
  background-color: green;
  left: 170px;
  bottom: 30px;
  font-size: 40px;
  font-family: "Lato";
  border-radius: 20px;
  border: solid 2px #000000;
}
</style>
