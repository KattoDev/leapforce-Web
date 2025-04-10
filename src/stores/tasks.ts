import { FirebaseService } from "@/services/FirebaseService";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Array<{
      name: string;
      description: string;
      endDate: Timestamp;
      responsible: string;
      project: string;
      isFinished: boolean;
    }>,
  }),

  actions: {
    async getTasks(userUid: string) {
      try {
        const colRef = collection(FirebaseService.db, "tasks");
        const q = query(colRef, where("responsible", "==", userUid));
        const snapshot = await getDocs(q);

        this.tasks = snapshot.docs.map((task) => ({
          name: task.data().name,
          description: task.data().description,
          endDate: task.data().endDate,
          responsible: task.data().responsible,
          project: task.data().project,
          isFinished: task.data().isFinished,
        }));
      } catch (error) {
        throw new Error("no se pudieron obtener las tareas: " + error);
      }
    },

    clearTasks() {
      this.$reset();
    },
  },
  persist: true,
});
