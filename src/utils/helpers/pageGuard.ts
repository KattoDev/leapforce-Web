import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
/**
 * Method for check the sessionStorage
 *
 * if the session doesn't exist the router pushes to login
 */
/* export function sessionGuard(): void {
  if (!SESSION) {
    router.push('/')
  }
} */

/* export function loginGuard(): void {
  if (SESSION) {
    router.push('dashboard')
  }
} */

/* async function userAuth(): Promise<User | null> {
  return await new Promise((resolve) => {
    onAuthStateChanged(leapforceLibs.auth, (user) => resolve(user));
  });
} */

/* async function isAdmin(): Promise<boolean> {
  try {
    const user = await userAuth();

    if (!user) return false;

    const docSnap = await getDoc(
      doc(leapforceLibs.firestoreDatabase, "users", user.uid)
    );

    return docSnap.exists() ? docSnap.data().isAdmin === true : false;
  } catch (error) {
    console.error("error al verificar el permiso: ", error);

    return false;
  }
}
 */
