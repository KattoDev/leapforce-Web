import { Team } from "@/models/Team";
import { User } from "@/models/User";
import { defineStore } from "pinia";

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

    logout() {
      this.$reset();
    },
  },

  persist: true,
});
