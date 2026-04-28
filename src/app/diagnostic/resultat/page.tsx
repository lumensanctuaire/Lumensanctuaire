import DiagnosticResultat from '@/components/diagnostic/DiagnosticResultat'

interface Props {
  searchParams: Promise<{ type?: string }>
}

export default async function ResultatPage({ searchParams }: Props) {
  const params = await searchParams
  const type = params.type ?? 'illusion_de_stabilite'

  return (
    <main style={{ background: '#02040A' }}>
      <DiagnosticResultat type={type} />
    </main>
  )
}