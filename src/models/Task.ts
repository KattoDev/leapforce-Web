import { FirebaseService } from "@/services/FirebaseService";
import { useSessionStore } from "@/stores/session";
import {
  addDoc,
  collection,
  CollectionReference,
  Timestamp,
  type DocumentData,
} from "firebase/firestore";

/**
 * Default class to handle tasks within the app
 *
 * This class can:
 * - Create Tasks
 */
export class Task {
  name: string;
  description: string;
  endDate: Timestamp | Date;
  responsible: string;
  project: string;
  isFinished: boolean;
  #collection: CollectionReference<DocumentData, DocumentData>;

  constructor(taskInfo?: Partial<Task>) {
    this.name = taskInfo?.name ?? "";
    this.description = taskInfo?.description ?? "";
    this.endDate =
      taskInfo?.endDate instanceof Timestamp
        ? taskInfo.endDate
        : Timestamp.fromDate(new Date(taskInfo?.endDate ?? new Date()));
    this.responsible = taskInfo?.responsible ?? "";
    this.project = taskInfo?.project ?? "";
    this.isFinished = taskInfo?.isFinished ?? false;
    this.#collection = collection(FirebaseService.db, "tasks");
  }

  /**
   * Creates a new task in **firestore**
   * @returns a string with success message
   * @throws a string with error message if isn't authorized to create task or unknown error
   */
  async create(): Promise<string> {
    try {
      if (useSessionStore().isAdmin)
        throw new Error("No tienes permisos para realizar esta acción.");

      await addDoc(this.#collection, this);

      return "se ha creado la tarea con exito";
    } catch (error) {
      throw new Error("No se pudo crear la tarea debido a: " + error);
    }
  }
}
