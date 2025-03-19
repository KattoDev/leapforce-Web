import { signInWithEmailAndPassword } from 'firebase/auth'
import leapforceLibs from '../firebase/leapforceLibs'

export class User {
  UID: string = ''
  name: string = ''
  phone: number = 3000000000
  email: string = ''
  team: number = 0
  password: string = ''
  isAdmin: boolean = false
  _collection = 'users'

  async Login() {
    try {
      await signInWithEmailAndPassword(leapforceLibs.auth, this.email, this.password).then(
        (authorizedUser) => {
          sessionStorage.setItem('session', authorizedUser.user.uid)
        },
      )
    } catch (error) {
      alert('No se pudo realizar el login')
      console.error('ERROR AL INICIAR SESIÓN', error)
    }
  }
}
