/* eslint-disable @typescript-eslint/no-explicit-any */
import { FirebaseService } from "@/services/FirebaseService";
import { useSessionStore } from "@/stores/session";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { User } from "./User";

/**
 * Default class to handle admins within the app
 *
 * the Admin can:
 *
 * - createUsers
 * - createAuthCredentials
 */
export class Admin extends User {
  /**
   *
   * @param user the user's information to store in **firestore**
   * @param password the user's password to create Auth credentials
   * @throws error if the admin doesn't have the authorization or failed to create AuthCredentials
   */
  async createUser(user: User, password: string): Promise<string> {
    try {
      if (!useSessionStore().isAdmin)
        throw new Error("No tienes permisos para realizar esta acción.");

      const uid = await this.#createAuthCredentials(user.email, password);
      const userDocRef = doc(FirebaseService.db, "users", uid);

      await setDoc(userDocRef, user);

      return "Nuevo miembro registrado correctamente";
    } catch (error: any) {
      throw new Error("No se pudo crear el miembro debido a: " + error);
    }
  }

  /**
   * Creates the auth credentials of a user.
   * @param email the user's email
   * @param password the user's password
   * @returns the credential uid
   * @throws error if the email is already in use or unknown error
   */
  async #createAuthCredentials(
    email: string,
    password: string
  ): Promise<string> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FirebaseService.auth,
        email,
        password
      );
      return userCredential.user.uid;
    } catch (error: any) {
      let errorMessage: string;

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "El correo ya está registrado.";
          break;
        default:
          errorMessage = "Ocurrió un error inesperado. Intenta nuevamente.";
      }

      throw new Error(
        "No se pudo crear el usuario y contraseña" + errorMessage
      );
    }
  }
}
