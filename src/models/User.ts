import { FirebaseService } from "@/services/FirebaseService";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

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
}
