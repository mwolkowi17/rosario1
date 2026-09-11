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
          <!-- <img src="../assets/home_ikona.png" height="20" /> -->
          <span class="menu-napis">Home</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToTimer">
          <!-- <img src="../assets/timer_new_blue.png" height="20" /> -->
          <span class="menu-napis">Timer</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToCzytanie">
          <!-- <img src="../assets/czytanie_new.png" height="12" /> -->
          <span class="menu-napis">Czytanie</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToManual">
          <!-- <img src="../assets/jak_medytowac_new_i.png" height="20" /> -->
          <span class="menu-napis">Jak medytować</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToKonferencje">
          <!-- <img src="../assets/konferencje1_blue.png" height="20" /> -->
          <span class="menu-napis">Konferencje</span>
        </div>
        <div class="menu-item ion-padding menu-blok" @click="goToGrupy">
          <!-- <img src="../assets/grupy_new_small_blue.png" height="20" /> -->
          <span class="menu-napis">Grupy medytacyjne</span>
        </div>
        <!-- <div class="menu-item ion-padding" @click="goToKalendarium">
          Kalendarium
        </div> -->
        <div class="menu-item ion-padding menu-blok" @click="goToUstawienia">
          <!-- <img src="../assets/klucz_narzedziowy.png" height="20" /> -->
          <span class="menu-napis">Ustawienia</span>
        </div>
      </ion-content>
    </ion-menu>

    <ion-header :translucent="true">
      <ion-toolbar class="blok-gorny">
        <!--Wersja z dużym kafelkiem timera-->
        <ion-title>
          <!-- <img src="../assets/logo_i_tytul.png" /> -->
        </ion-title>
        <ion-buttons slot="end">
          <ion-menu-button style="font-size: 32px"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content id="main-content" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid class="full-grid">
          <ion-row class="my-row">
            <ion-col class="timer-block custom-spacing" @click="goToRosario">
              <img
                class="rosario-icon"
                src="../assets/rosario1.png"
                height="150"
              />
              <h6 class="text-one timer-tekst">Różaniec</h6>
            </ion-col>
          </ion-row>
          <ion-row class="my-row">
            <ion-col
              class="czytanie-block custom-spacing"
              @click="goToCzytanie"
            >
              <img class="mysterios-icon" src="../assets/mysterios1.png" />
              <h6 class="text-two czytanie">Tajemnice Różańca</h6>
            </ion-col>
          </ion-row>
          <ion-row class="my-row">
            <ion-col class="grupy-block custom-spacing" @click="goToGrupy">
              <img class="mysterios-icon" src="../assets/o_modlitwie2.png" />
              <h6 class="text-one grupy">O Różańcu</h6>
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
  IonButton,
  IonToggle,
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
//import { onIonViewWillEnter } from "@ionic/vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

//operacje na czionkach tylko dla strony Home
// 1. Gdy użytkownik wchodzi na stronę Home
onIonViewWillEnter(() => {
  // Wymuszamy standardowy rozmiar czcionki (100%) na elemencie HTML
  document.documentElement.style.fontSize = "100%";
});

// 2. Gdy użytkownik opuszcza stronę Home (idzie gdzieś indziej)
onIonViewWillLeave(() => {
  // Pobieramy zapisany rozmiar z localStorage
  const savedSize = localStorage.getItem("user-font-size");

  if (savedSize) {
    // Przywracamy niestandardowy rozmiar dla reszty aplikacji
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

async function goToTimer() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/timer");
}

async function goToCzytanie() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("./czytanie");
}

async function goToUstawienia() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("./settings");
}

async function goToManual() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("./manual");
}

async function goToKonferencje() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/konferencje");
}

async function goToGrupy() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/grupy");
}

async function goToKalendarium() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/kalendarium");
}
</script>

<style scoped>
/* ion-content {
  --padding-bottom: env(safe-area-inset-bottom);
} */
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
#container {
  /* text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%); */
  height: 100%;
  padding-bottom: env(safe-area-inset-bottom);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  /* color: #8c8c8c; */

  margin: 0;
}

#container a {
  text-decoration: none;
}

.text-one {
  color: #1a221c;
}

.timer-tekst {
  position: absolute;
  text-align: center;
  margin-top: 170px;
  font-size: 21px;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.718);
  /* border-radius: 10px; */
  padding: 5px;
  width: 100%;
}

.text-two {
  text-align: center;
}

.czytanie {
  position: absolute;
  text-align: center;
  margin-top: 170px;
  font-size: 21px;
  font-weight: 400;
  color: #2e3a30;
  background-color: rgba(255, 255, 255, 0.718);
  /* border-radius: 10px; */
  padding: 5px;
  width: 100%;
}

.grupy {
  position: absolute;
  margin-top: 170px;
  font-size: 21px;
  font-weight: 400;
  text-align: center;
  color: #1a221c;
  background-color: rgba(255, 255, 255, 0.618);
  /* border-radius: 10px; */
  padding: 5px;
  width: 100%;
}

.timer-block {
  background-color: #b0bbb6;
  color: #000000;
  border-radius: 16px;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  /* background-image: url("../assets/timer_new.png"); */
  /* background-image: url("../assets/timer_2.png"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: solid 1px #aea9a0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.rosario-icon {
  margin-bottom: 50px;
  border-radius: 16px;
}

.konferencje-image {
  margin-top: 30px;
}

.czytanie-block {
  background-color: #ebe5db;
  color: #000000;
  border-radius: 16px;
  /* border: solid 1px #395d9b; */
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  /* background-image: url("../assets/czytanie-back_4.jpg"); */
  /* background-image: url("../assets/czytania_2.jpg"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: solid 1px #aea9a0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.mysterios-icon {
  margin-bottom: 50px;
  border-radius: 16px;
}

.jak-block-1 {
  background-color: #d1d3c6;
  color: #000000;
  border-radius: 16px;
  margin-top: 4px;
  margin-left: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  /* padding-top: 20px; */
  /* background-image: url("../assets/konferencje_4.jpg"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: solid 1px #aea9a0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.jak-icon {
  margin-top: 50px;
}

.grupy-block {
  background-color: #e0e0df;
  color: #000000;
  border-radius: 16px;
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 4px;
  margin-bottom: 8px;
  /* background-image: url("../assets/grupy_4.jpg"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: solid 1px #aea9a0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.kalendarium-block {
  /* background-color: #f4eee2; */
  color: #000000;
  border-radius: 16px;
  border: solid 1px #395d9b;
  margin-top: 4px;
  margin-left: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding-top: 25px !important;
}

.custom-spacing {
  padding: 5px; /* góra/dół: 8px, boki: 12px */
  /* margin: 8px; */
}

.full-grid {
  height: 100%;
  /* height: 92.4vh; */
  padding: 0;

  display: flex;
  flex-direction: column;
}

.row-first {
  height: 25%;
}
.my-row {
  /* height: 220px; */
  /* height: 25%; */
  flex: 1;
}

.my-row ion-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* ion-grid {
  --ion-grid-column-padding: 50px;
} */
.logo-grupy {
  margin-top: 40px;
}
</style>
