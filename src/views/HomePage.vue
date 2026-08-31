<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" :scroll-y="false">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <!-- <RoseComponent /> -->
      <!-- <RoseComponent2 /> -->
      <!-- <RoseComponent3 /> -->
      <rose-component4 />
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
import { useRosaStore } from "@/stores/rosaStore";
import RoseComponent from "@/components/RoseComponent.vue";
import RoseComponent2 from "@/components/RoseComponent2.vue";
import RoseComponent3 from "@/components/RoseComponent3.vue";
import RoseComponent4 from "@/components/RoseComponent4.vue";

const storeRose = useRosaStore();
</script>

<style scoped>
ion-content {
  --overflow: hidden;
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
</style>
