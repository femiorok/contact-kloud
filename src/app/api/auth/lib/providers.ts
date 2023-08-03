import { OAuthConfig, OAuthProvider, Provider } from "next-auth/providers/index"
import { KeapOptions, KeapUser } from "./types"

export const KeapProvider = (options: KeapOptions): OAuthConfig<KeapUser> => {
return {
    id: 'keap',
    name: 'Keap',
    type: 'oauth',
    authorization: {
       url: 'https://accounts.infusionsoft.com/app/oauth/authorize',
       params: {
        scope: 'full',
        response_type: 'code',
        client_id: options.clientId,
        redirect_uri: 'https://localhost:3002/api/auth/callback/keap/',
        },
    },
    token: { 
        url: 'https://api.infusionsoft.com/token',
        params: {
            client_id: options.clientId,
            client_secret: options.clientSecret,
            code: options.code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://localhost:3002/api/auth/callback/keap/',
        }
    },
    userinfo: 'https://api.infusionsoft.com/crm/rest/v1/account/profile',
    profile: (profile: any) => {
        return {
        name: profile.name,
        email: profile.email,
        id: profile.email,
        }
    },
    options 
    }
}

