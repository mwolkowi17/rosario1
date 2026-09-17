<template>
  <ion-page>
    <ion-menu side="end" content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="menu-item ion-padding menu-blok" @click="goToHome">
          <span class="menu-napis">Home</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToRosario">
          <span class="menu-napis">Różaniec</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToTajemnice">
          <span class="menu-napis">Tajemnice Różańca</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToORozancu">
          <span class="menu-napis">O Różańcu</span>
        </div>
      </ion-content>
    </ion-menu>

    <ion-header :translucent="true">
      <ion-toolbar class="blok-gorny">
        <ion-title>Różaniec na codzień</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button style="font-size: 32px"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content id="main-content" :fullscreen="true" class="ion-no-scroll">
      <div id="container">
        <ion-grid class="full-grid">
          <ion-row class="my-row">
            <ion-col class="timer-block custom-card" @click="goToRosario">
              <img class="card-icon" src="../assets/rosario1.png" />
              <h6 class="card-label">Różaniec</h6>
            </ion-col>
          </ion-row>
          <ion-row class="my-row">
            <ion-col class="czytanie-block custom-card" @click="goToTajemnice">
              <img class="card-icon" src="../assets/mysterios1.png" />
              <h6 class="card-label">Tajemnice Różańca</h6>
            </ion-col>
          </ion-row>
          <ion-row class="my-row">
            <ion-col class="grupy-block custom-card" @click="goToORozancu">
              <img class="card-icon" src="../assets/o_modlitwie2.png" />
              <h6 class="card-label">O Różańcu</h6>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonMenu,
  IonButtons,
  IonMenuButton,
  menuController,
  onIonViewWillEnter,
  onIonViewWillLeave,
} from "@ionic/vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

onIonViewWillEnter(() => {
  document.documentElement.style.fontSize = "100%";
});

onIonViewWillLeave(() => {
  const savedSize = localStorage.getItem("user-font-size");
  if (savedSize) {
    const size = parseFloat(savedSize);
    document.documentElement.style.fontSize = `${size * 100}%`;
  }
});

const router = useRouter();

async function goToHome() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/home");
}

async function goToRosario() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/rosario");
}

async function goToTajemnice() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("./mysterios");
}

async function goToUstawienia() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("./settings");
}

async function goToORozancu() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/about_rosario");
}
</script>

<style scoped>
.menu-blok {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.menu-napis {
  margin-left: 10px;
}
.blok-gorny {
  background-color: #f2ead8 !important;
}

/* Zapobiegamy pojawianiu się paska przewijania */
ion-content.ion-no-scroll {
  --overflow: hidden;
}

#container {
  height: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: border-box;
}

.full-grid {
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
}

.my-row {
  flex: 1;
  min-height: 0; /* Kluczowe dla flexboxa, aby wiersze mogły się zmniejszać */
  padding: 4px 0;
}

.custom-card {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 16px;
  background-color: #e2e5d8;
  border: solid 1px #aea9a0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0 !important;
}

.card-icon {
  margin-top: 10px; /* Dostosuj tę wartość, aby podnieść/opuścić obrazek */
  max-height: calc(100% - 40px); /* 100% minus szacowana wysokość tekstu */

  width: auto; /* Pozwalamy szerokości dopasować się proporcjonalnie */
  object-fit: contain; /* Zmieniamy na contain, aby cały obrazek był widoczny */
  border-radius: 16px;
}

/* Jednolity, pozycjonowany styl dla podpisu pod kafelkiem */
.card-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 6px 4px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #1a221c;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2px);
}
</style>
