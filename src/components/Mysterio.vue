<template>
  <div class="mysterio-container">
    <div class="main-title">
      {{
        mysterio.radosne[rosaStore.nrOfMysterio(rosaStore.counter)].tajemnica
      }}
    </div>
    <div class="main-text">
      {{
        mysterio.radosne[rosaStore.nrOfMysterio(rosaStore.counter)].komentarz
      }}
    </div>
    <button class="button-mysterio" @click="rosaStore.next()">Dalej</button>
  </div>
</template>
<script setup lang="ts">
import mysterio from "../lib/mysteries.json";
import { useRosaStore } from "@/stores/rosaStore";

const rosaStore = useRosaStore();
const currentMysteryIndex =
  typeof rosaStore.nrOfMysterio === "number" ? rosaStore.nrOfMysterio : 0;
</script>
<style scoped>
.mysterio-container {
  position: absolute;
  width: 600px;
  height: 800px;
  left: 90px;
  top: 160px;
  background-color: #f4f5f0;
  border: solid 4px #00000063;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /*dla porównania nieco mocniejszy shadow*/
  padding: 30px;
  z-index: 12;
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
  width: 300px;
  height: 100px;
  background-color: #3b5732;
  left: 150px;
  bottom: 30px;
  font-size: 40px;
  font-family: "Lato";
  border-radius: 20px;
  border: solid 2px #000000;
}
</style>
