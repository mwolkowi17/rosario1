import { defineStore } from "pinia";
import { f } from "vue-router/dist/router-CWoNjPRp.mjs";
import { ref } from "vue";

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
    false, //3 Zdrowaś 3 tu trzeba dołożyć chwała ojcu i synowi
    false, //1 Ojcze 4
    false, //1 Zdrowaś 5
    false, //2 Zdrowaś 6
    false, //3 Zdrowaś 7
    false, //4 Zdrowaś 8
    false, //5 Zdrowaś 9
    false, //6 Zdrowaś 10
    false, //7 Zdrowaś 11
    false, //8 Zdrowaś 12
    false, //9 Zdrowaś 13
    false, //10 Zdrowaś 14 tu trzeba dołożyć chwała ojcu i synowi
    false, //1 Ojcze 15
    false, //2 Zdrowaś 16
    false, //3 Zdrowaś 17
    false, //4 Zdrowaś 18
    false, //5 Zdrowaś 19
    false, //6 Zdrowaś 20
    false, //7 Zdrowaś 21
    false, //8 Zdrowaś 22
    false, //9 Zdrowaś 23
    false, //10 Zdrowaś 24 tu trzeba dołożyć chwała ojcu i synowi
  ]);

  function next() {
    rosColection.value[counter.value] = true;
    counter.value++;
    console.log(counter.value);
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
    } else if (counter.value === 5) return true;
    else if (counter.value === 16) return true;
    else if (counter.value === 27) return true;
  }

  function ifAve() {
    if (counter.value > 1 && counter.value < 5) return true;
    else if (counter.value > 5 && counter.value < 16) return true;
  }

  return { counter, rosDict, rosColection, next, reset, ifPadre, ifAve };
});
