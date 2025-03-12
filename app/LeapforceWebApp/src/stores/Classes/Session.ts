import { User } from './User'

const DEFAULT_USER = [
  { UID: 0, name: '', phone: 3000000000, email: '', team: 0, password: '', isAdmin: false },
]

const DEFAULT_USER_JSON = JSON.stringify(DEFAULT_USER)

export class Session extends User {
  UID: number = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).UID
  name: string = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).name
  phone: number = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).phone
  email: string = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).email
  team: number = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).team
  password: string = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).password
  isAdmin: boolean = JSON.parse(sessionStorage.getItem('ACTUAL_USER') || DEFAULT_USER_JSON).isAdmin
}
