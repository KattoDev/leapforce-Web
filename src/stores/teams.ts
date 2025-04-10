import { Project } from "@/models/Project";
import { Team } from "@/models/Team";
import { defineStore } from "pinia";

export const useTeamsStore = defineStore("teams", {
  state: () => ({
    teams: [] as Array<{
      name: string;
      projects: number;
      users: number;
    }>,
  }),

  actions: {
    async getTasks() {
      try {
        const team = new Team();
        const project = new Project();
        const teamsSnapshot = await team.getTeams();

        this.teams = await Promise.all(
          teamsSnapshot.map(async (teamLoc) => ({
            name: teamLoc.data().name,
            projects: (await project.getPendingProjects(teamLoc.id)).docs
              .length,
            users: (await team.getUsersInTeam(teamLoc.id)).docs.length,
          }))
        );

        this.teams.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        alert("ha ocurrido un error al buscar los equipos.");
        console.error(error);
      }
    },

    clearTasks() {
      this.$reset();
    },
  },
  persist: true,
});
