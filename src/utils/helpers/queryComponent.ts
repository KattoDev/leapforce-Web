import router from '@/router'

const database: string = import.meta.env.VITE_BACKEND

const HEADERS = {
  'Content-Type': 'application/json',
}

export async function patchMethod(resource: string, body: JSON) {
  const url: URL = new URL(`${database}/${resource}`)

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
