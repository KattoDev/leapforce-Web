import router from '@/router'

const BASE_URL: string = 'http://localhost:4444'
const HEADERS = {
  'Content-Type': 'application/json',
}

export async function LoginUser(email: string, password: string): Promise<boolean> {
  try {
    const url: URL = new URL(`${BASE_URL}/users/login`)
    url.searchParams.append('email', email)
    url.searchParams.append('password', password)

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })

    if (!response.ok) {
      throw new Error('Error al comunicarse con la base de datos')
    }

    const data = await response.json()

    if (Object.keys(data.body).length === 0) {
      throw new Error('Datos incorrectos')
    } else {
      const user = data.body[0]

      const session: object = {
        UID: user.UID,
        name: user.name,
        phone: user.phone,
        email: user.email,
        team: user.team,
        password: user.password,
        isAdmin: user.isAdmin,
      }

      alert(`¡Bienvenido ${user.name}!`)

      sessionStorage.setItem('ACTUAL_USER', JSON.stringify(session))

      router.push('dashboard')
      window.location.reload()
      return true
    }
  } catch (error) {
    alert(error)
    return false
  }
}

/**
 * Method for quickly build fetch via GET method within the app
 *
 * @param resource the resource to get
 *
 * `Ex: users/id`
 * @returns the backend response
 */
export async function getMethod(resource: string) {
  const url: URL = new URL(`${BASE_URL}/${resource}`)

  try {
    const response: Response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })

    if (!response.ok) {
      throw new Error(`${response}`)
    }

    return await response.json()
  } catch (error: any) {
    alert('Ha ocurrido un error inesperado en la aplicación')
    console.error(error)
  }
}

export async function patchMethod(resource: string, body: JSON) {
  const url: URL = new URL(`${BASE_URL}/${resource}`)

  try {
    if (!body) {
      throw new Error('FORBIDEN')
    }

    const response: Response = await fetch(url, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`${response}`)
    }
    alert('se ha actualizado la información')
    return await response.json()
  } catch (error) {
    alert(`No se puede actualizar la información, debido a un error de la aplicación`)
    console.error(error)
  }
}
