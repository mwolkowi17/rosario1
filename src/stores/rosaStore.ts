import { defineStore } from "pinia";
import { f } from "vue-router/dist/router-CWoNjPRp.mjs";
import { nextTick, ref } from "vue";

export const useRosaStore = defineStore("rosarioStore", () => {
  const rosDict: Record<string, boolean> = {
    wstepO: false,
    wstepZ1: false,
    wstepZ2: false,
    wstepZ3: false,
    Pierwsza0: false,
    PierwszaZ1: false,
    PierwszaZ2: false,
    PierwszaZ3: false,
    PierwszaZ4: false,
    PierwszaZ5: false,
    PierwszaZ6: false,
    PierwszaZ7: false,
    PierwszaZ8: false,
    PierwszaZ9: false,
    PierwszaZ10: false,
  };

  const counter = ref(0);

  const rosColection = ref([
    false, // 1 Ojcze 0
    false, //1 Zdrowaś 1
    false, //2 Zdrowaś 2
    false, //3 Zdrowaś 3 tu trzeba dołożyć
    false, //chwała ojcu i synowi 4
    false, //1 Ojcze 5
    false, //1 Zdrowaś 6
    false, //2 Zdrowaś 7
    false, //3 Zdrowaś 8
    false, //4 Zdrowaś 9
    false, //5 Zdrowaś 10
    false, //6 Zdrowaś 11
    false, //7 Zdrowaś 12
    false, //8 Zdrowaś 13
    false, //9 Zdrowaś 14
    false, //10 Zdrowaś 15 tu trzeba dołożyć chwała ojcu i synowi
    false, //tu trzeba dołożyć chwała ojcu i synowi 16
    false, //1 Ojcze 17
    false, //2 Zdrowaś 18
    false, //3 Zdrowaś 19
    false, //4 Zdrowaś 20
    false, //5 Zdrowaś 21
    false, //6 Zdrowaś 22
    false, //7 Zdrowaś 23
    false, //8 Zdrowaś 24
    false, //9 Zdrowaś 25
    false, //10 Zdrowaś 26 tu trzeba dołożyć chwała ojcu i synowi
    false, //chwała ojcu i synowi27
  ]);

  function next() {
    rosColection.value[counter.value] = true;
    counter.value++;
    console.log(counter.value);
  }

  async function previous() {
    if (counter.value != 0) {
      rosColection.value[counter.value - 1] = false;
      await nextTick();
      counter.value--;
      console.log(counter.value);
    }
  }

  function reset() {
    console.log("reset");
    rosColection.value.fill(false);
    counter.value = 0;
    console.log(rosColection.value);
  }

  function ifPadre() {
    if (counter.value === 1) {
      return true;
    } else if (counter.value === 6) return true;
    else if (counter.value === 18) return true;
    else if (counter.value === 30) return true;
  }

  function ifAve() {
    if (counter.value > 1 && counter.value < 5) return true;
    else if (counter.value > 6 && counter.value < 18) return true;
    else if (counter.value > 18 && counter.value < 29) return true;
  }

  function ifGloria() {
    if (counter.value === 5) {
      return true;
    } else if (counter.value === 17) return true;
    else if (counter.value === 29) return true;
  }

  return {
    counter,
    rosDict,
    rosColection,
    next,
    previous,
    reset,
    ifPadre,
    ifAve,
    ifGloria,
  };
});
