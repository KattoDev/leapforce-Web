import router from '@/router'

function logout() {
  sessionStorage.clear()
  router.push('/')
  window.location.reload()
}

export default { logout }
