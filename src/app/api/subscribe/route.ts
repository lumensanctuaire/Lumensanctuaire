import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Configuration serveur manquante.' },
      { status: 500 }
    );
  }

  let body: { prenom?: string; email?: string; source?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Corps de la requête invalide.' },
      { status: 400 }
    );
  }

  const { prenom, email, source } = body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Adresse email invalide ou manquante.' },
      { status: 400 }
    );
  }

  const payload: Record<string, unknown> = {
    email,
    listIds: [2],
    updateEnabled: true,
    attributes: {} as Record<string, string>,
  };

  if (prenom) (payload.attributes as Record<string, string>).PRENOM = prenom;
  if (source) (payload.attributes as Record<string, string>).SOURCE = source;

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!brevoRes.ok) {
      const detail = await brevoRes.text();
      console.error('[subscribe] Erreur Brevo:', brevoRes.status, detail);
      return NextResponse.json(
        { error: "Échec de l'inscription. Veuillez réessayer." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[subscribe] Erreur réseau:', err);
    return NextResponse.json(
      { error: 'Erreur réseau. Veuillez réessayer.' },
      { status: 503 }
    );
  }
}
