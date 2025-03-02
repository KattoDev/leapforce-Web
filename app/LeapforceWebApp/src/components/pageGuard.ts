import router from '@/router'

const SESSION = sessionStorage.getItem('ACTUAL_USER')

/**
 * Method for check the sessionStorage
 *
 * if the session doesn't exist the router pushes to login
 */
export function sessionGuard(): void {
  if (!SESSION) {
    router.push('/')
  }
}

export function loginGuard(): void {
  if (SESSION) {
    router.push('dashboard')
  }
}
