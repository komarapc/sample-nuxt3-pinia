import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment(payload: number) {
      this.count += payload;
    },
    decrement(payload: number) {
      this.count -= payload;
    },
    reset() {
      this.count = 0;
    },
  },
});
