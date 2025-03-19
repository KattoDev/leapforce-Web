const database = import.meta.env.VITE_BACKEND

const HEADERS = {
  'Content-Type': 'application/json',
}

async function get(resource: string): Promise<any> {
  try {
    const response: Response = await fetch(new URL(`${database}/${resource}`), {
      method: 'GET',
      headers: HEADERS,
    })

    if (!response.ok) {
      throw new Error(`${response}`)
    }

    const content = await response.json()

    return content.body
  } catch (error: any) {
    alert('Ha ocurrido un error inesperado en la aplicación')
    console.error(error)
  }
}

async function LoginUser(email: string, password: string): Promise<any> {
  try {
    const url: URL = new URL(`${database}/users/login`)
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

    return data
  } catch (error) {
    alert('Ha ocurrido un error inesperado en la aplicación')
    console.error(error)
  }
}

export default { get, LoginUser }
