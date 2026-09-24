<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
          <!-- <ion-button @click="goBack">Back</ion-button> -->
        </ion-buttons>
        <ion-title>O Aplikacji</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" id="jak-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">O Aplikacji</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="main-container">
        <h1>Informacje</h1>
        <p>
          "Różaniec na codzień" powstał jako prosta aplikacja będąca pomocą w
          odmawianiu modlitwy różańcowej. Czasami nie jest możliwe używanie
          tradycyjnego różańca, i naprzeciw takiej sytuacji wychodzi niniejsza
          aplikacja. Na ekranie przedstawiającym różaniec, użytkownik porusza
          się za pomocą dwóch zielonych klawiszy ze strzałkami. Tajemnice
          różańca wyświetlają się automatycznie zgdonie z dniem tygodnia, według
          przyjętego porządku (poniedziałek, sobota - Tajemnice Radosne; wtorek,
          piątek - Tajemnice Bolesne; środa, niedziala - Tajemnice Chwalebne;
          czwartek - Tajemnice Światła). Początek każdej tajemnicy podkreśla
          sygnał gongu, który można wyłączyć w Ustawieniach.
        </p>
        <h2 class="cross">&#9769</h2>
        <div class="app-info">
        <h5>Projekt i wykonianie aplikacji:</h5>
        <h5><a href="https://web-workshop.eu/">web-workshop.eu</a></h5>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  /* margin-left: 10px; */
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: env(safe-area-inset-bottom);
  /* margin-right: 10px; */
  background-color: #e2e5d8;
  color: #000000;
}
.loading-spinner {
  display: flex;
  justify-content: center;
}
.cross{
 display: flex;
justify-content: center;
}
.app-info{
 display: flex;
 flex-direction: column;
 align-items: center;
}
</style>
