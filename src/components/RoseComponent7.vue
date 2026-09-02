<template>
  <div id="game-container">
    <div id="game-board">
      <img src="../assets/rozaniec2.png" />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[0]"
        src="../assets/paciorek1.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[1]"
        src="../assets/paciorek2.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[2]"
        src="../assets/paciorek3.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[3]"
        src="../assets/paciorek4.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[5]"
        src="../assets/paciorek5.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[6]"
        src="../assets/paciorek6.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[7]"
        src="../assets/paciorek7.png"
      />
      <!-- <img
        class="paciorek1"
        v-if="storeRose.rosColection[7]"
        src="../assets/paciorek8.png"
      /> -->
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[8]"
        src="../assets/paciorek9.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[9]"
        src="../assets/paciorek10.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[10]"
        src="../assets/paciorek11.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[11]"
        src="../assets/paciorek12.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[12]"
        src="../assets/paciorek13.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[13]"
        src="../assets/paciorek14.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[14]"
        src="../assets/paciorek15.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[15]"
        src="../assets/paciorek16.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[17]"
        src="../assets/paciorek17.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[18]"
        src="../assets/paciorek18.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[19]"
        src="../assets/paciorek19.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[20]"
        src="../assets/paciorek20.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[21]"
        src="../assets/paciorek21.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[22]"
        src="../assets/paciorek22.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[23]"
        src="../assets/paciorek23.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[24]"
        src="../assets/paciorek24.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[25]"
        src="../assets/paciorek25.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[26]"
        src="../assets/paciorek26.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[27]"
        src="../assets/paciorek27.png"
      />
      <PadreNuestro v-if="storeRose.ifPadre()" />
      <AveMaria v-if="storeRose.ifAve()" />
      <Gloria v-if="storeRose.ifGloria()" />
      <ion-button
        class="button-reset"
        fill="outline"
        @click="storeRose.reset()"
      >
        Reset
      </ion-button>
      <ion-button
        class="button-forward"
        fill="outline"
        @click="storeRose.next()"
        >Dalej</ion-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRosaStore } from "@/stores/rosaStore";
import { IonButton } from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";
import PadreNuestro from "./PadreNuestro.vue";
import AveMaria from "./AveMaria.vue";
import Gloria from "./Gloria.vue";

const storeRose = useRosaStore();

//const board: any = document.getElementById("game-board");
const board = ref<HTMLElement | null>(null);

const BASE_WIDTH = 800;
const BASE_HEIGHT = 1400;

function resizeGame() {
  if (!board.value) return;

  const windowWidth = window.innerWidth;
  const SYSTEM_BAR_BUFFER = 90;
  const windowHeight = window.innerHeight - SYSTEM_BAR_BUFFER;

  const scaleX = windowWidth / BASE_WIDTH;
  const scaleY = windowHeight / BASE_HEIGHT;

  const scale = Math.min(scaleX, scaleY);

  // wysokość planszy po skalowaniu
  const scaledHeight = BASE_HEIGHT * scale;

  // pionowe wycentrowanie
  const top = (windowHeight - scaledHeight) / 2;

  board.value.style.transform = `translateX(-50%) scale(${scale})`;
  board.value.style.top = `${top}px`;
}

// Wywołanie przy załadowaniu i każdej zmianie rozmiaru/orientacji ekranu
//window.addEventListener("resize", resizeGame);
// window.addEventListener("DOMContentLoaded", resizeGame);
onMounted(() => {
  board.value = document.getElementById("game-board");
  resizeGame();
  window.addEventListener("resize", resizeGame);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeGame);
});
</script>
<style scoped>
* {
  box-sizing: border-box;
}

/* body {
  margin: 0;
  padding: 0;
  background-color: #1a1a1a;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
} */

#game-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #f0d9b5;
}

#game-board {
  width: 800px;
  height: 1400px;
  background-color: #f0d9b5;
  position: absolute;

  /* najważniejsze */
  top: 0;
  left: 50%;

  transform-origin: top center;

  flex-shrink: 0;
}

.paciorek1 {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

.button-forward {
  height: 150px;
  width: 150px;
  position: absolute;
  top: 1200px;
  right: 40px;
  z-index: 10;
  font-size: 40px;
}

.button-reset {
  height: 150px;
  width: 150px;
  position: absolute;
  top: 1200px;
  left: 40px;
  z-index: 10;
  font-size: 40px;
}

.button-container {
  position: absolute;
  width: 100%;
  /* bottom: 180px; */
  bottom: calc(160px + env(safe-area-inset-bottom));
}
</style>
