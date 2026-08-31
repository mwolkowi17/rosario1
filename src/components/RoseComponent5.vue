<template>
  <div id="game-container">
    <!-- BINDING: Przypisujemy obliczony styl (:style="gameStyle") do planszy -->
    <div id="game-board" :style="gameStyle">
      <!-- Obrazek tła planszy zajmuje teraz dokładnie 100% jej obszaru -->
      <img src="../assets/rozaniec2.png" class="board-bg" />

      <!-- Paciorki nakładane na planszę -->
      <img
        v-if="storeRose.rosColection[0]"
        class="paciorek1"
        src="../assets/paciorek1.png"
      />
      <img
        v-if="storeRose.rosColection[1]"
        class="paciorek1"
        src="../assets/paciorek2.png"
      />
      <img
        v-if="storeRose.rosColection[2]"
        class="paciorek1"
        src="../assets/paciorek3.png"
      />
      <img
        v-if="storeRose.rosColection[3]"
        class="paciorek1"
        src="../assets/paciorek4.png"
      />
      <img
        v-if="storeRose.rosColection[4]"
        class="paciorek1"
        src="../assets/paciorek5.png"
      />
      <img
        v-if="storeRose.rosColection[5]"
        class="paciorek1"
        src="../assets/paciorek6.png"
      />
      <img
        v-if="storeRose.rosColection[6]"
        class="paciorek1"
        src="../assets/paciorek7.png"
      />
      <img
        v-if="storeRose.rosColection[7]"
        class="paciorek1"
        src="../assets/paciorek9.png"
      />
      <img
        v-if="storeRose.rosColection[8]"
        class="paciorek1"
        src="../assets/paciorek10.png"
      />
      <img
        v-if="storeRose.rosColection[9]"
        class="paciorek1"
        src="../assets/paciorek11.png"
      />
      <img
        v-if="storeRose.rosColection[10]"
        class="paciorek1"
        src="../assets/paciorek12.png"
      />
      <img
        v-if="storeRose.rosColection[11]"
        class="paciorek1"
        src="../assets/paciorek13.png"
      />
      <img
        v-if="storeRose.rosColection[12]"
        class="paciorek1"
        src="../assets/paciorek14.png"
      />
      <img
        v-if="storeRose.rosColection[13]"
        class="paciorek1"
        src="../assets/paciorek15.png"
      />
      <img
        v-if="storeRose.rosColection[14]"
        class="paciorek1"
        src="../assets/paciorek16.png"
      />
      <img
        v-if="storeRose.rosColection[15]"
        class="paciorek1"
        src="../assets/paciorek17.png"
      />
      <img
        v-if="storeRose.rosColection[16]"
        class="paciorek1"
        src="../assets/paciorek18.png"
      />
      <img
        v-if="storeRose.rosColection[17]"
        class="paciorek1"
        src="../assets/paciorek19.png"
      />
      <img
        v-if="storeRose.rosColection[18]"
        class="paciorek1"
        src="../assets/paciorek20.png"
      />
      <img
        v-if="storeRose.rosColection[19]"
        class="paciorek1"
        src="../assets/paciorek21.png"
      />
      <img
        v-if="storeRose.rosColection[20]"
        class="paciorek1"
        src="../assets/paciorek22.png"
      />
      <img
        v-if="storeRose.rosColection[21]"
        class="paciorek1"
        src="../assets/paciorek23.png"
      />
      <img
        v-if="storeRose.rosColection[22]"
        class="paciorek1"
        src="../assets/paciorek24.png"
      />
      <img
        v-if="storeRose.rosColection[23]"
        class="paciorek1"
        src="../assets/paciorek25.png"
      />
      <img
        v-if="storeRose.rosColection[24]"
        class="paciorek1"
        src="../assets/paciorek26.png"
      />
      <img
        v-if="storeRose.rosColection[25]"
        class="paciorek1"
        src="../assets/paciorek27.png"
      />
    </div>

    <!-- Przyciski wyciągnięte poza planszę logiczną (Responsive UI) -->
    <div class="button-container">
      <ion-button class="game-button" fill="outline" @click="storeRose.reset()">
        Reset
      </ion-button>
      <ion-button class="game-button" fill="outline" @click="storeRose.next()">
        Dalej
      </ion-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRosaStore } from "@/stores/rosaStore";
import { IonButton } from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";
const storeRose = useRosaStore();
const gameStyle = ref({ width: "0px", height: "0px" });

const resizeGame = () => {
  const targetRatio = 9 / 16;
  const windowWidth = window.innerWidth;
  // Odejmujemy margines na dolny panel z przyciskami (np. 100px), aby plansza nie wchodziła pod nie
  const windowHeight = window.innerHeight - 100;
  const currentRatio = windowWidth / windowHeight;

  if (currentRatio > targetRatio) {
    const height = windowHeight;
    const width = height * targetRatio;
    gameStyle.value = { width: `${width}px`, height: `${height}px` };
  } else {
    const width = windowWidth;
    const height = width / targetRatio;
    gameStyle.value = { width: `${width}px`, height: `${height}px` };
  }
};

onMounted(() => {
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
  display: flex;
  flex-direction: column; /* Układ pionowy: plansza na górze, przyciski na dole */
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  background-color: #121212;
  overflow: hidden;
  /* Zabezpieczenie przed notchem u góry i paskiem domowym u dołu w iOS */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

#game-board {
  position: relative;
  background-color: #2a2a2a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Opcjonalnie: estetyczny cień wokół planszy */
}

.board-bg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Paciorki pozycjonujesz w % względem #game-board, np. top: 12%; left: 45%; */
.paciorek1 {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

/* Kontener przycisków zawsze zakotwiczony na dole z uwzględnieniem bezpiecznej strefy */
.button-container {
  width: 100%;
  max-width: 400px; /* Aby przyciski na tabletach nie były za szerokie */
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
}

.game-button {
  flex: 1; /* Przyciski podzielą przestrzeń po równo */
  height: 48px; /* Standardowa, wygodna wysokość pod kciuk mobilny */
}
</style>
