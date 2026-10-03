import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.rozaniec_na_codzien",
  appName: "różaniec na codzień",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // Wyłącza automatyczny timer oparty na sztywnym czasie
      launchAutoHide: false, // KLUCZOWE: Splash screen nie zniknie sam
      backgroundColor: "#ffffff", // Ustaw kolor zgodny z tłem Twojego splash/aplikacji
      androidScaleType: "CENTER_CROP",
    },
  },
};

export default config;
