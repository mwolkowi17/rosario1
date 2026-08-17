<template>
  <!-- Kontener gry, który zawsze idealnie wpisuje się w ekran, zachowując proporcje -->
  <div class="game-viewport">
    <!-- Tu znajduje się Twoja plansza, pionki i przyciski -->
    <div class="game-board">
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

const storeRose = useRosaStore();
</script>
<style scoped>
/* KONTENER-WIZJER: Dynamicznie dopasowuje się do ekranu, nie pozwalając na scroll */
.game-viewport {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 56px);
}

/* PLANSZA: Zawsze przyjmuje maksymalny możliwy rozmiar,
   ale tak, by nie wyjść poza krawędzie w pionie ani w poziomie */
.game-board {
  position: relative;

  /* Użycie vmin sprawia, że jeśli ekran jest wąski - bazuje na szerokości.
     Jeśli ekran jest niski (np. niski smartfon) - bazuje na wysokości. */
  width: 90vmin;
  height: 150vmin; /*  Jeśli plansza to prostokąt, np. width: 90vmin; height: 60vmin; */

  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.current {
  background-color: turquoise;
  width: 4vw;
  height: 2vh;

  position: absolute;
  border-radius: 45px;
  top: 20%;
  left: 7%;
}

.current2 {
  background-color: turquoise;
  width: 4vw;
  height: 2vh;
  position: absolute;
  border-radius: 45px;
  top: 73%;
  left: 47%;
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
