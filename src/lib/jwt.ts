import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export interface MemberPayload {
  member: boolean
  email?: string
}

export async function signToken(payload: MemberPayload): Promise<string> {
  return new SignJWT(payload as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10y')
    .sign(secret)
}

export async function verifyToken(token: string): Promise<MemberPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as unknown as MemberPayload
  } catch {
    return null
  }
}
