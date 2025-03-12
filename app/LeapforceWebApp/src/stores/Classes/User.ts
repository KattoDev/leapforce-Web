import { LoginUser } from '@/components/queryComponent'

export class User {
  UID: number = 0
  name: string = ''
  phone: number = 3000000000
  email: string = ''
  team: number = 0
  password: string = ''
  isAdmin: boolean = false

  async Login() {
    LoginUser(this.email, this.password)
  }
}
