<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
          <!-- <ion-button @click="goBack">Back</ion-button> -->
        </ion-buttons>
        <ion-title>O Różańcu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" id="jak-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">O Różańcu</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="main-container">
        <!-- <h5>Instrukacja medytacji:</h5> -->
        <!-- <p v-html="ewangeliaDzis"></p> -->
        <!-- <h5>Jak medytować</h5> -->
        <h1>O modlitwie różańcowej</h1>
        <h2>Czym jest różaniec?</h2>
        <p>
          Różaniec to jedna z najbardziej znanych modlitw chrześcijańskich. Jest
          modlitwą maryjną, ale jej centrum stanowi Jezus Chrystus i rozważanie
          najważniejszych wydarzeń z Jego życia.
        </p>
        <p>
          Odmawiając różaniec, powtarzamy modlitwy Ojcze nasz, Zdrowaś Maryjo i
          Chwała Ojcu, jednocześnie rozważając kolejne tajemnice różańcowe.
          Powtarzanie modlitw pomaga wyciszyć się, skupić myśli i otworzyć serce
          na obecność Boga. Różaniec można odmawiać w kościele, w domu, podczas
          spaceru, podróży, a także w chwilach codziennego odpoczynku. Można
          modlić się samemu lub wspólnie z innymi.
        </p>
        <h2>Historia różańca</h2>
        <p>
          Modlitwa różańcowa rozwijała się stopniowo przez wiele wieków. Jej
          korzenie sięgają tradycji pierwszych chrześcijan, którzy często
          powtarzali modlitwy i psalmy. W średniowieczu popularne stało się
          wielokrotne odmawianie modlitwy Zdrowaś Maryjo. Osoby, które nie
          potrafiły czytać lub nie znały całego Pisma Świętego, mogły w ten
          sposób modlić się, rozważając tajemnice wiary.
        </p>
        <p>
          Z czasem modlitwa została uporządkowana w dziesiątki Zdrowaś Maryjo
          poprzedzone modlitwą Ojcze nasz. Do ich liczenia zaczęto używać
          sznurów z paciorkami – różańców. Tradycja szczególnie łączy rozwój
          różańca ze św. Dominikiem i zakonem dominikańskim. W kolejnych wiekach
          modlitwa rozpowszechniła się w całym Kościele.
        </p>
        <p>
          W 1917 roku, podczas objawień w Fatimie, Matka Boża zachęcała do
          codziennego odmawiania różańca. W 2002 roku papież Jan Paweł II
          wprowadził do tradycyjnego układu różańca tajemnice światła, dzięki
          czemu różaniec obejmuje obecnie cztery części: radosną, światła,
          bolesną i chwalebną.
        </p>
        <h2>Jak odmawiać różaniec?</h2>
        <p>
          Różaniec składa się z pięciu dziesiątek. Każda dziesiątka obejmuje
          jedną tajemnicę – wydarzenie z życia Jezusa i Maryi.
        </p>
        <ul>
          <li>Tajemnice radosne – poniedziałek i sobota</li>
          <li>Tajemnice światła – czwartek</li>
          <li>Tajemnice bolesne – wtorek i piątek</li>
          <li>Tajemnice chwalebne – środa i niedziela</li>
        </ul>
        <h4>Początek różańca:</h4>
        <ol>
          <li>"W imię Ojca i Syna, i Ducha Świętego. Amen."</li>
          <li>Odmów Skład Apostolski.</li>
          <li>Na pierwszym dużym paciorku odmów modlitwę Ojcze nasz.</li>
          <li>
            Na trzech kolejnych małych paciorkach odmów trzy razy Zdrowaś
            Maryjo. Możesz ofiarować te modlitwy w intencji wzrostu wiary,
            nadziei i miłości.
          </li>
          <li>
            Na kolejnym paciorku odmów: Chwała Ojcu i Synowi, i Duchowi
            Świętemu. Jak była na początku, teraz i zawsze, i na wieki wieków.
            Amen.
          </li>
        </ol>
        <h4>Teraz rozpoczyna się pięć dziesiątek.</h4>
        <h5>Dziesiątka różańca</h5>
        <ol>
          <li>
            Najpierw zapowiedz pierwszą tajemnicę, np.: Pierwsza tajemnica
            radosna – Zwiastowanie Najświętszej Maryi Pannie. Warto przez chwilę
            zatrzymać się nad jej znaczeniem i pomyśleć o wydarzeniu, które
            będziesz rozważać.
          </li>
          <li>Na dużym paciorku odmów Ojcze nasz.</li>
          <li>
            Na dziesięciu małych paciorkach odmów dziesięć razy Zdrowaś Maryjo.
            W czasie tych modlitw staraj się rozważać zapowiedzianą tajemnicę.
          </li>
          <li>Po dziesięciu Zdrowaś Maryjo odmów Chwała Ojcu.</li>
        </ol>
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
  padding-bottom: env(safe-area-inset-bottom);
  /* margin-right: 10px; */
  background-color: #f4eee2;
  color: #000000;
}
.loading-spinner {
  display: flex;
  justify-content: center;
}
</style>
