export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'LUMEN — Passage du sanctuaire',
            description: "Passage unique. Profondeur des chambres, Bibliothèque complète, chambres futures.",
          },
          unit_amount: 19000,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/entrer/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/entrer`,
  })

  return NextResponse.redirect(session.url!, 303)
}
