import { Team } from "@/models/Team";
import { User } from "@/models/User";
import { FirebaseService } from "@/services/FirebaseService";
import routeRedirect from "@/utils/helpers/routeRedirect";
import { signOut } from "firebase/auth";
import { defineStore } from "pinia";
import { useTaskStore } from "./tasks";

export const useSessionStore = defineStore("session", {
  state: () => ({
    uid: "",
    name: "",
    email: "",
    phone: "",
    teamId: "",
    teamName: "",
    isAdmin: false,
  }),

  actions: {
    async getAndSetUser(userUid: string) {
      const userInfo: User = await new User({ uid: userUid }).getUserInfo();
      this.uid = userUid;
      this.name = userInfo.name;
      this.email = userInfo.email;
      this.phone = userInfo.phone;
      this.teamId = userInfo.team;
      this.teamName = await new Team().getTeamName(this.teamId);
      this.isAdmin = userInfo.isAdmin;
    },

    async logout() {
      try {
        await signOut(FirebaseService.auth);
        this.$reset();
        useTaskStore().clearTasks();
        routeRedirect.goTo("/");
      } catch (error) {
        throw new Error("No se pudo cerrar sesión: " + error);
      }
    },
  },

  persist: true,
});
