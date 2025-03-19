function createUserWithEmailAndPassword(code: string) {
  switch (code) {
    case 'auth/email-already-in-use':
      alert('El correo ya está registrado.')
      break
    case 'auth/invalid-email':
      alert('El formato del correo es inválido.')
      break
    case 'auth/weak-password':
      alert('La contraseña debe tener al menos 6 caracteres.')
      break
    case 'auth/operation-not-allowed':
      alert('El registro de usuarios con email y contraseña está deshabilitado.')
      break
    default:
      alert('Ocurrió un error inesperado. Intenta nuevamente.')
  }
}

export default { createUserWithEmailAndPassword }
