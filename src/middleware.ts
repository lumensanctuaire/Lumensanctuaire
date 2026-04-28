import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('lumen_token')?.value
  const payload = token ? await verifyToken(token) : null
  const isMember = payload?.member === true

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-lumen-member', isMember ? '1' : '0')

  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: ['/chambres/:path+', '/bibliotheque', '/figures', '/sanctuaire'],
}
