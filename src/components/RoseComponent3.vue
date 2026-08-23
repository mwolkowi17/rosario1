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
        v-if="storeRose.rosColection[4]"
        src="../assets/paciorek5.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[5]"
        src="../assets/paciorek6.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[6]"
        src="../assets/paciorek7.png"
      />
      <img
        class="paciorek1"
        v-if="storeRose.rosColection[7]"
        src="../assets/paciorek8.png"
      />
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
      <img class="paciorek1" v-if="false" src="../assets/paciorek16.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek17.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek18.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek19.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek20.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek21.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek22.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek23.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek24.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek25.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek26.png" />
      <img class="paciorek1" v-if="false" src="../assets/paciorek27.png" />
      <ion-button class="button-forward" fill="outline">Dalej</ion-button>
      <!-- <button class="button-forward-1">Dalej</button> -->
      <!-- <div class="current"></div>
          <div class="current2"></div> -->
      <!-- Twoja grafika planszy (100% szerokości i wysokości) -->
      <!-- Twoje pionki pozycjonowane procentowo (%) -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRosaStore } from "@/stores/rosaStore";
import { IonButton } from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";

const storeRose = useRosaStore();

//const board: any = document.getElementById("game-board");
const board = ref<HTMLElement | null>(null);

const BASE_WIDTH = 800;
const BASE_HEIGHT = 1400;

function resizeGame() {
  if (!board.value) return;
  //board.value = document.getElementById("game-board");
  // Pobranie aktualnych wymiarów okna (ekranu telefonu)
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Obliczenie skali dla szerokości i wysokości
  const scaleX = windowWidth / BASE_WIDTH;
  const scaleY = windowHeight / BASE_HEIGHT;

  // Wybór mniejszej skali, aby gra zmieściła się w całości (Letterboxing)
  const scale: any = Math.min(scaleX, scaleY);
  console.log(scale);
  // Zastosowanie transformacji skalowania
  //board.style.transform = `scale(${scale})`;
  board.value.style.transform = `scale(${scale})`;
}

// Wywołanie przy załadowaniu i każdej zmianie rozmiaru/orientacji ekranu
//window.addEventListener("resize", resizeGame);
window.addEventListener("DOMContentLoaded", resizeGame);
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

#game-board {
  width: 800px; /* Sztywna szerokość bazowa */
  height: 1300px; /* Sztywna wysokość bazowa */
  background-color: #f0d9b5; /* Przykładowy kolor planszy */
  position: relative;
  transform-origin: top center; /* Skalowanie od środka */
  flex-shrink: 0;
}

.paciorek1 {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

.button-forward {
  height: 5%;
  width: 20%;
  position: absolute;
  top: 88%;
  left: 72%;
}
</style>
