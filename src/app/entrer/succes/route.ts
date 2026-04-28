export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { signToken } from '@/lib/jwt'

export async function GET(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const sessionId = request.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.redirect(new URL('/entrer', request.url))
  }

  let session
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId)
  } catch {
    return NextResponse.redirect(new URL('/entrer', request.url))
  }

  if (session.payment_status !== 'paid') {
    return NextResponse.redirect(new URL('/entrer', request.url))
  }

  const email = session.customer_details?.email ?? undefined
  const token = await signToken({ member: true, email })

  const response = NextResponse.redirect(new URL('/sanctuaire', request.url))
  response.cookies.set('lumen_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365 * 10,
  })

  return response
}
