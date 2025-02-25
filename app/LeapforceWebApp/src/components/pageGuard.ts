import router from '@/router'

/**
 * Method for check the sessionStorage
 *
 * if the session doesn't exist the router pushes to login
 */
export function sessionGuard() {
  if (!localStorage.getItem('session')) {
    router.push('/')
  }
}
