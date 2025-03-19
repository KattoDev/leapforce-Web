import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import leapforceLibs from '../firebase/leapforceLibs'
import firebaseErrors from '../helpers/firebaseErrors'
import type { UserData } from '../interfaces/Firestore'
import { User } from './User'

export class Admin extends User {
  async createUser(user: User) {
    try {
      if (await this._checkAdminPermissions(sessionStorage.getItem('session'))) {
        user.UID = await this._createAuthCredentials(user)

        await setDoc(
          doc(leapforceLibs.firestoreDatabase, this._collection, user.UID),
          this._createUserData(user),
        )
      }
    } catch (error: any) {
      alert('error al crear el usuario')
      console.log(error.message)
    }
  }

  async _createAuthCredentials(user: User): Promise<string> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        leapforceLibs.auth,
        user.email,
        user.password,
      )
      return userCredential.user.uid
    } catch (error: any) {
      firebaseErrors.createUserWithEmailAndPassword(error.code)
      throw new Error(`Error al crear el usuario y contraseña\n${error.message}`)
    }
  }

  _createUserData(user: User): UserData {
    return {
      name: user.name,
      email: user.email,
      phone: user.phone,
      team: user.team,
      isAdmin: user.isAdmin,
    }
  }

  async _checkAdminPermissions(session: string | null): Promise<boolean> {
    if (!session) {
      throw new Error('No hay una sesión autenticada para realizar esta operación')
    }

    const userDocSnap = await getDoc(doc(leapforceLibs.firestoreDatabase, 'users', session))

    if (userDocSnap.exists() && userDocSnap.data().isAdmin !== true) {
      throw new Error('No tienes permisos para realizar esta acción')
    } else {
      return true
    }
  }
}
