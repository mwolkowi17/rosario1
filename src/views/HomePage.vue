<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Kontener gry, który zawsze idealnie wpisuje się w ekran, zachowując proporcje -->
      <div class="game-viewport">
        <!-- Tu znajduje się Twoja plansza, pionki i przyciski -->
        <div class="game-board">
          <img src="../assets/rozaniec2.png" />
          <img class="paciorek1" src="../assets/paciorek1.png" />
          <img class="paciorek1" src="../assets/paciorek2.png" />
          <img class="paciorek1" src="../assets/paciorek3.png" />
          <img class="paciorek1" src="../assets/paciorek4.png" />
          <img class="paciorek1" src="../assets/paciorek5.png" />
          <img class="paciorek1" src="../assets/paciorek6.png" />
          <img class="paciorek1" src="../assets/paciorek7.png" />
          <img class="paciorek1" src="../assets/paciorek8.png" />
          <img class="paciorek1" src="../assets/paciorek9.png" />
          <img class="paciorek1" src="../assets/paciorek10.png" />
          <img class="paciorek1" src="../assets/paciorek11.png" />
          <img class="paciorek1" src="../assets/paciorek12.png" />
          <img class="paciorek1" src="../assets/paciorek13.png" />
          <img class="paciorek1" src="../assets/paciorek14.png" />
          <img class="paciorek1" src="../assets/paciorek15.png" />
          <img class="paciorek1" src="../assets/paciorek16.png" />

          <!-- <div class="current"></div>
          <div class="current2"></div> -->
          <!-- Twoja grafika planszy (100% szerokości i wysokości) -->
          <!-- Twoje pionki pozycjonowane procentowo (%) -->
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";
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
  height: 150vmin; /* Idealny kwadrat. Jeśli plansza to prostokąt, np. width: 90vmin; height: 60vmin; */

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
</style>
