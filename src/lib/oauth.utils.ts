const clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID || ''
const clientSecret = process.env.OAUTH_CLIENT_SECRET || ''

const redirectUri = `${process.env.NEXT_PUBLIC_URL}/oauth/callback`

export type State = {
  redirectTo: string,
}

export function getAuthUrl(scopes: string[], state: State) {
  return 'https://accounts.google.com/o/oauth2/v2/auth' +
    `?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}` +
    '&response_type=code' +
    `&scope=${scopes.join(' ')}` +
    `&state=${base64urlEncode(JSON.stringify(state))}` +
    '&prompt=consent'
}

export type TokenResponse = {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

export async function getTokens(authorizationCode: string): Promise<TokenResponse> {
  const formData = new FormData()
  formData.append('code', authorizationCode)
  formData.append('client_id', clientId)
  formData.append('client_secret', clientSecret)
  formData.append('redirect_uri', redirectUri)
  formData.append('grant_type', 'authorization_code')

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: formData,
  })

  console.log(response.status, response.statusText)

  return response.json()
}

function base64urlEncode(data: string): string {
  return btoa(data).replace(/\./g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function decodeState(state: string): State {
  return JSON.parse(atob(state.replace(/-/g, '.').replace(/_/g, '/')))
}
