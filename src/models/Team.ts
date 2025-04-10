import { FirebaseService } from "@/services/FirebaseService";
import { useSessionStore } from "@/stores/session";
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  type DocumentData,
} from "firebase/firestore";

/**
 * Default class to handle teams within the app
 *
 * the team can:
 *
 * - create teams
 * - get team name
 */
export class Team {
  name: string;
  #collection: CollectionReference<DocumentData, DocumentData>;

  constructor(name?: string) {
    this.name = name ?? "";
    this.#collection = collection(FirebaseService.db, "teams");
  }

  /**
   * Creates a new team in **firestore**
   * @returns a string with success message
   * @throws a string with error message if isn't authorized to create teams or unknown error
   */
  async create(): Promise<string> {
    try {
      if (useSessionStore().isAdmin)
        throw new Error("No tienes permisos para realizar esta acción.");

      await addDoc(this.#collection, this);

      return "se ha creado el equipo con exito";
    } catch (error) {
      throw new Error("No se pudo crear el equipo debido a: " + error);
    }
  }

  /**
   * Queries a team name in **firestore**
   * @param teamID the team ID to query in **firestore**
   * @returns the team's name that matches the teamID
   * @throws a string with the error message
   */
  async getTeamName(teamID: string): Promise<string> {
    try {
      const teamRef = doc(FirebaseService.db, "teams", teamID);
      const teamSnap = await getDoc(teamRef);

      if (!teamSnap.exists()) {
        throw new Error("El equipo no existe.");
      }

      return teamSnap.data().name;
    } catch (error) {
      throw new Error("No se pudo buscar el equipo: " + error);
    }
  }

  async getTeams() {
    const col = collection(FirebaseService.db, "teams");

    const snapshot = await getDocs(col);

    return snapshot.docs;
  }

  async getUsersInTeam(teamUID: string) {
    const col = collection(FirebaseService.db, "users");

    const q = query(col, where("team", "==", teamUID));
    return await getDocs(q);
  }
}
