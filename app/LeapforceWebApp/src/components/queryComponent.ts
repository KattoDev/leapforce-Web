const BASE_URL: string = 'http://localhost:4444'

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

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
