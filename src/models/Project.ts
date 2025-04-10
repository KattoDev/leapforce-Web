import { FirebaseService } from "@/services/FirebaseService";
import { useSessionStore } from "@/stores/session";
import {
  addDoc,
  collection,
  CollectionReference,
  getDocs,
  query,
  Timestamp,
  where,
  type DocumentData,
} from "firebase/firestore";

/**
 * Default class to handle projects within the app
 *
 * the projects can:
 *
 * - create projects
 */
export class Project {
  name: string;
  description: string;
  endDate: Timestamp;
  team: string;
  isFinished: boolean;
  #collection: CollectionReference<DocumentData, DocumentData>;

  constructor(projectInfo?: Partial<Project>) {
    this.name = projectInfo?.name ?? "";
    this.description = projectInfo?.description ?? "";
    this.endDate = projectInfo?.endDate ?? Timestamp.fromDate(new Date());
    this.team = projectInfo?.team ?? "";
    this.isFinished = projectInfo?.isFinished ?? false;
    this.#collection = collection(FirebaseService.db, "projects");
  }

  /**
   * Creates a new project in **firestore**
   * @returns a string with success message
   * @throws a string with error message if isn't authorized to create project or unknown error
   */
  async create(): Promise<string> {
    try {
      if (useSessionStore().isAdmin)
        throw new Error("No tienes permisos para realizar esta acción.");

      await addDoc(this.#collection, this);

      return "se ha creado el proyecto con exito";
    } catch (error) {
      throw new Error("No se pudo crear el proyecto debido a: " + error);
    }
  }

  async getPendingProjects(teamUID: string) {
    const col = collection(FirebaseService.db, "projects");

    const q = query(
      col,
      where("team", "==", teamUID),
      where("isFinished", "==", false)
    );

    return await getDocs(q);
  }
}
