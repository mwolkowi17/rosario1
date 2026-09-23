<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
          <!-- <ion-button @click="goBack">Back</ion-button> -->
        </ion-buttons>
        <ion-title>Ustawienia</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" id="jak-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ustawienia</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="main-container">
        <h1>Ustawienia</h1>
        <div class="small-container">
          <div class="gong-toggle">
            <p class="toggle-tekst">dźwięk gongu</p>
            <span>O</span>

            <ion-toggle
              @ionChange="toggleTest"
              :checked="ifGongPlay"
            ></ion-toggle>

            <span>I</span>
          </div>
        </div>
        <div class="small-container">
          <div>
            <ion-range class="volume-level">
              <div slot="label">Głośność gongu</div>
            </ion-range>
          </div>
        </div>
        <div class="small-container">
          <ion-select
            label="Wielkość czcionki"
            label-placement="floating"
            fill="outline"
            @ionChange="handleChange($event)"
            @ionCancel="handleCancel()"
            @ionDismiss="handleDismiss()"
          >
            <ion-select-option :value="1.2">Duża</ion-select-option>
            <ion-select-option :value="1.0">Średnia</ion-select-option>
            <ion-select-option :value="0.8">Mała</ion-select-option>
          </ion-select>
        </div>
        <div class="small-container">
          <p>wersja: 1.0</p>
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
  IonRange,
  IonSelect,
  IonToggle,
  IonSelectOption,
} from "@ionic/vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useRouter } from "vue-router";
import { useRosaStore } from "@/stores/rosaStore";

const storeRose = useRosaStore();
const router = useRouter();

const handleChange = (event: CustomEvent<{ value: any }>): void => {
  console.log("ionChange fired with value: " + event.detail.value);
  applyFontSize(event.detail.value);
  localStorage.setItem("user-font-size", event.detail.value.toString());
};

const handleCancel = () => {
  console.log("ionCancel fired");
};

const handleDismiss = () => {
  console.log("ionDismiss fired");
};

const applyFontSize = (size: number) => {
  // Przeliczamy np. 1.2 na "120%"
  document.documentElement.style.fontSize = `${size * 100}%`;
};

const ifGongPlay = ref(true);

const toggleTest = () => {
  if (ifGongPlay.value) {
    storeRose.muteGong();
    ifGongPlay.value = false;
    console.log("muteGong");
  } else if (!ifGongPlay.value) {
    storeRose.playGong();
    ifGongPlay.value = true;
    console.log("playGong");
  }
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
}

.logo-upper-container {
  display: flex;
  flex-direction: row !important;
}

.logo-upper-img {
  margin-top: 6px;
}

.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  /* margin-left: 10px; */
  padding-left: 16px;
  padding-right: 16px;
  /* margin-right: 10px; */
  background-color: #f4eee2;
  color: #000000;
}

.small-container {
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.volume-level {
  flex: 0 0 auto;
  height: 48px !important;
  margin-top: -10px;
}

.gong-toggle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 0px;
}

.gong-toggle span {
  width: 5px;
  text-align: center;
  font-weight: 600;
}
.toggle-tekst {
  margin-right: 35px;
}

.wyglad-text {
  margin-bottom: 20px;
}
h6 {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
