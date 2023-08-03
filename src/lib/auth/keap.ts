const clientId = process.env.KEAP_CLIENT_ID ?? '';
const clientSecret = process.env.KEAP_API_SECRET ?? '';
const redirectUri = '/admin/keap';
const apiUrl = 'https://api.infusionsoft.com/token';

export async function getAccessToken(code: string): Promise<string> {
    const data = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      redirect_uri: redirectUri,
    });

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });

    const tokenData = await response.json();

    return tokenData.access_token;
}

export async function refreshAccessToken(refreshToken: string): Promise<string> {
    const data = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    });
  
    const tokenData = await response.json();
    return tokenData.access_token;
  }