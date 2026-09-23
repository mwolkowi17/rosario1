<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { onMounted } from "vue";
import { SplashScreen } from "@capacitor/splash-screen";

onMounted(async () => {
  // Wykonaj tutaj ewentualne szybkie operacje startowe, np. sprawdzenie tokenu auth.
  const savedSize = localStorage.getItem("user-font-size");
  if (savedSize) {
    const size = parseFloat(savedSize);
    document.documentElement.style.fontSize = `${size * 100}%`;
  } else {
    document.documentElement.style.fontSize = "100%";
  }
  // Następnie płynnie ukryj natywny ekran powitalny:
  await SplashScreen.hide({
    fadeOutDuration: 300, // Czas trwania animacji zanikania w milisekundach
  });
});
</script>
