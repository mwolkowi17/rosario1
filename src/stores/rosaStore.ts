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
    false, //1 tajemnica text 5
    false, //1 Ojcze 6
    false, //1 Zdrowaś 7
    false, //2 Zdrowaś 8
    false, //3 Zdrowaś 9
    false, //4 Zdrowaś 10
    false, //5 Zdrowaś 11
    false, //6 Zdrowaś 12
    false, //7 Zdrowaś 13
    false, //8 Zdrowaś 14
    false, //9 Zdrowaś 15
    false, //10 Zdrowaś 16 tu trzeba dołożyć chwała ojcu i synowi
    false, // chwała ojcu i synowi 17
    false, //2 tajemnica text 18
    false, //1 Ojcze 19
    false, //2 Zdrowaś 20
    false, //3 Zdrowaś 21
    false, //4 Zdrowaś 22
    false, //5 Zdrowaś 23
    false, //6 Zdrowaś 24
    false, //7 Zdrowaś 25
    false, //8 Zdrowaś 26
    false, //9 Zdrowaś 27
    false, //10 Zdrowaś 28 tu trzeba dołożyć chwała ojcu i synowi
    false, //chwała ojcu i synowi 29
    false, //3 tajemnica text30
    false, //1 Ojcze 31
    false, //2 Zdrowaś 32
    false, //3 Zdrowaś 33
    false, //4 Zdrowaś 34
    false, //5 Zdrowaś 35
    false, //6 Zdrowaś 36
    false, //7 Zdrowaś 37
    false, //8 Zdrowaś 38
    false, //9 Zdrowaś 39
    false, //10 Zdrowaś 40
    false, //chwała ojcu i synowi 41
    false, //4 tajemnica text42
    false, //1 Ojcze 42
    false, //2 Zdrowaś 43
    false, //3 Zdrowaś 44
    false, //4 Zdrowaś 45
    false, //5 Zdrowaś 46
    false, //6 Zdrowaś 47
    false, //7 Zdrowaś 48
    false, //8 Zdrowaś 49
    false, //9 Zdrowaś 50
    false, //10 Zdrowaś 51
    false, //chwała ojcu i synowi 52
    false, //5 tajemnica text53
    false, //1 Ojcze 54
    false, //2 Zdrowaś 55
    false, //3 Zdrowaś 56
    false, //4 Zdrowaś 57
    false, //5 Zdrowaś 58
    false, //6 Zdrowaś 59
    false, //7 Zdrowaś 60
    false, //8 Zdrowaś 61
    false, //9 Zdrowaś 62
    false, //10 Zdrowaś 63
    false, //chwała ojcu i synowi 64
  ]);

  const ifMysterioView = ref(false);

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
    } else if (counter.value === 7) return true;
    else if (counter.value === 20) return true;
    else if (counter.value === 33) return true;
    else if (counter.value === 46) return true;
    else if (counter.value === 59) return true;
  }

  function ifAve() {
    if (counter.value > 1 && counter.value < 5) return true;
    else if (counter.value > 7 && counter.value < 18) return true;
    else if (counter.value > 20 && counter.value < 31) return true;
    else if (counter.value > 33 && counter.value < 44) return true;
    else if (counter.value > 46 && counter.value < 57) return true;
    else if (counter.value > 59 && counter.value < 70) return true;
  }

  function ifGloria() {
    if (counter.value === 5) return true;
    else if (counter.value === 18) return true;
    else if (counter.value === 31) return true;
    else if (counter.value === 44) return true;
    else if (counter.value === 57) return true;
    else if (counter.value === 70) return true;
  }

  function ifMysterio() {
    if (counter.value === 6) return true;
    else if (counter.value === 19) return true;
    else if (counter.value === 32) return true;
    else if (counter.value === 45) return true;
    else if (counter.value === 58) return true;
  }

  function nrOfMysterio(valueCounter: number) {
    if (valueCounter < 7) {
      return 0;
    } else if (valueCounter < 21) {
      return 1;
    } else if (valueCounter < 33) {
      return 2;
    } else if (valueCounter < 46) {
      return 3;
    } else {
      return 4;
    }
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
    ifMysterio,
    nrOfMysterio,
  };
});
