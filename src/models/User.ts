import { FirebaseService } from "@/services/FirebaseService";
import {
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

/**
 * Default class to handle users within the app
 *
 * the user can:
 *
 * - Login
 * - GetUserInfo
 */
export class User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  team: string;
  isAdmin: boolean;

  constructor(userInfo?: Partial<User>) {
    this.uid = userInfo?.uid ?? "";
    this.name = userInfo?.name ?? "";
    this.email = userInfo?.email ?? "";
    this.phone = userInfo?.phone ?? "";
    this.team = userInfo?.team ?? "";
    this.isAdmin = userInfo?.isAdmin ?? false;
  }

  /**
   * Log-in a user within the app using **Firebase - Auth service**
   * @param password the user password
   * @returns a string with success message
   * @throws a string with error type
   */
  async Login(password: string): Promise<string> {
    try {
      const authorizedUser = await signInWithEmailAndPassword(
        FirebaseService.auth,
        this.email,
        password
      );

      this.uid = authorizedUser.user.uid;

      return "Inicio de sesión exitoso";
    } catch (error) {
      console.error(error);
      throw new Error("comprueba las credenciales");
    }
  }

  /**
   * Gets a user info using **Firebase - firestore service**
   * @returns the user data stored in **firestore**
   * @throws string with the reason of the error
   */
  async getUserInfo(): Promise<User> {
    try {
      if (this.uid === "") throw new Error("No hay un uid especificado.");

      const userRef = doc(FirebaseService.db, "users", this.uid);
      const userSnapshot = await getDoc(userRef);

      return userSnapshot.data() as User;
    } catch (error) {
      throw new Error("Error al buscar la información del usuario: " + error);
    }
  }

  async updateUserInfo(password: string): Promise<string> {
    try {
      if (!this.uid) throw new Error("No hay ningun usuario seleccionado.");

      await this.updateCredentials(password);

      const userRef = doc(FirebaseService.db, "users", this.uid);
      await updateDoc(userRef, {
        name: this.name,
        email: this.email,
        phone: this.phone,
        team: this.team,
        isAdmin: this.isAdmin,
      });

      return "Información actualizada";
    } catch (error) {
      throw new Error("No se pudo actualizar la información: " + error);
    }
  }

  async updateCredentials(password: string): Promise<string> {
    try {
      const user = FirebaseService.auth.currentUser;
      if (user) {
        await updatePassword(user, password);
        await updateEmail(user, this.email);
      }
      return "email y contraseña actualizados";
    } catch (error) {
      throw new Error("no se pudo actualizar el correo y contraseña: " + error);
    }
  }
}
