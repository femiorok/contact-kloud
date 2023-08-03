import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@lib/auth/keap'

// Helper function to handle the OAuth flow
async function handleOAuth(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })}

  const accessToken = await getAccessToken(code);

  return NextResponse.json({ accessToken });
}

// Route Handler for GET requests
export async function GET(request: NextRequest) {
  return handleOAuth(request);
}