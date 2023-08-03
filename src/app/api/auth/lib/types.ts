import { OAuthUserConfig } from "next-auth/providers/oauth"

export type KeapUser = {
    name?: string
    email?: string
}

export interface KeapOptions extends OAuthUserConfig<KeapUser> {
    clientId: string,
    clientSecret: string,
    code: string,
    debug: boolean,
}