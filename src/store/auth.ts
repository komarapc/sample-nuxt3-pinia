import { UserProps } from "./../interface/user";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {} as UserProps,
  }),
  actions: {
    login(user: UserProps) {
      this.user = user;
      this.isAuthenticated = true;
    },
    logout() {
      this.user = {} as UserProps;
      this.isAuthenticated = false;
    },
  },
});
