import NextAuth from "next-auth"
import { KeapProvider } from '../lib/providers'
import GithubProvider from "next-auth/providers/github"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from 'next/server'
import { request } from "http";


export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = req?.url ?? ''
  const code = new URL(url).searchParams.get('code') ?? ''
  
  const options = {
    providers: [
      KeapProvider({
        clientId: process.env.KEAP_CLIENT_ID ?? '',
        clientSecret: process.env.KEAP_CLIENT_SECRET ?? '',
        code: code,
        debug: true,
      }),
    ],
  };



  return await NextAuth(req, res, options);
}


export { handler as GET, handler as POST }