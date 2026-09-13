<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
          <!-- <ion-button @click="goBack">Back</ion-button> -->
        </ion-buttons>
        <ion-title>Tajemnice Różańca</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" id="jak-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tajemnice Różańca</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="main-container">
        <!-- <h5>Instrukacja medytacji:</h5> -->
        <!-- <p v-html="ewangeliaDzis"></p> -->
        <!-- <h5>Jak medytować</h5> -->
        <h2>Tajemnice różańca</h2>

        <h3>Tajemnice radosne</h3>

        <h4>1. Zwiastowanie Najświętszej Maryi Pannie</h4>
        <p>Maryja przyjmuje wiadomość, że zostanie Matką Syna Bożego.</p>

        <h4>2. Nawiedzenie św. Elżbiety</h4>
        <p>
          Maryja odwiedza swoją krewną Elżbietę i niesie jej radość oraz pomoc.
        </p>

        <h4>3. Narodzenie Pana Jezusa</h4>
        <p>Jezus rodzi się w Betlejem i przychodzi na świat jako Zbawiciel.</p>

        <h4>4. Ofiarowanie Pana Jezusa w świątyni</h4>
        <p>
          Maryja i Józef przynoszą Jezusa do świątyni, aby ofiarować Go Bogu.
        </p>

        <h4>5. Odnalezienie Pana Jezusa w świątyni</h4>
        <p>
          Maryja i Józef odnajdują dwunastoletniego Jezusa w świątyni
          jerozolimskiej.
        </p>

        <hr />

        <h3>Tajemnice światła</h3>

        <h4>1. Chrzest Pana Jezusa w Jordanie</h4>
        <p>Jezus rozpoczyna swoją publiczną działalność.</p>

        <h4>2. Objawienie się Jezusa na weselu w Kanie Galilejskiej</h4>
        <p>Jezus dokonuje pierwszego znaku, przemieniając wodę w wino.</p>

        <h4>3. Głoszenie Królestwa Bożego i wzywanie do nawrócenia</h4>
        <p>Jezus głosi Ewangelię i zaprasza człowieka do przemiany życia.</p>

        <h4>4. Przemienienie na górze Tabor</h4>
        <p>Jezus objawia uczniom swoją chwałę.</p>

        <h4>5. Ustanowienie Eucharystii</h4>
        <p>
          Jezus daje ludziom siebie w Eucharystii i ustanawia sakrament swojego
          Ciała i Krwi.
        </p>

        <hr />

        <h3>Tajemnice bolesne</h3>

        <h4>1. Modlitwa Pana Jezusa w Ogrójcu</h4>
        <p>Jezus modli się przed swoją męką i przyjmuje wolę Ojca.</p>

        <h4>2. Biczowanie Pana Jezusa</h4>
        <p>Jezus cierpi i zostaje poddany okrutnej karze.</p>

        <h4>3. Cierniem ukoronowanie Pana Jezusa</h4>
        <p>Jezus zostaje wyszydzony i ukoronowany cierniem.</p>

        <h4>4. Dźwiganie krzyża na Kalwarię</h4>
        <p>Jezus niesie krzyż w drodze na miejsce swojej śmierci.</p>

        <h4>5. Ukrzyżowanie i śmierć Pana Jezusa</h4>
        <p>Jezus umiera na krzyżu, oddając swoje życie za ludzi.</p>

        <hr />

        <h3>Tajemnice chwalebne</h3>

        <h4>1. Zmartwychwstanie Pana Jezusa</h4>
        <p>Jezus zwycięża śmierć i zmartwychwstaje.</p>

        <h4>2. Wniebowstąpienie Pana Jezusa</h4>
        <p>Jezus powraca do Ojca.</p>

        <h4>3. Zesłanie Ducha Świętego</h4>
        <p>Duch Święty zstępuje na Maryję i Apostołów.</p>

        <h4>4. Wniebowzięcie Najświętszej Maryi Panny</h4>
        <p>Maryja zostaje z duszą i ciałem wzięta do nieba.</p>

        <h4>5. Ukoronowanie Maryi na Królową nieba i ziemi</h4>
        <p>Maryja zostaje otoczona chwałą jako Królowa wszystkich świętych.</p>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  IonButton,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonMenu,
  IonMenuButton,
  menuController,
} from "@ionic/vue";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useRouter } from "vue-router";

const router = useRouter();

async function goToHome() {
  Haptics.impact({ style: ImpactStyle.Light });
  menuController.close();
  router.push("/home");
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
.loading-spinner {
  display: flex;
  justify-content: center;
}
</style>
