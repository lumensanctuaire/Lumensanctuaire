import Header from '@/components/Header'
import VestibuleHero from '@/components/vestibule/VestibuleHero'
import VestibuleProbleme from '@/components/vestibule/VestibuleProbleme'
import VestibuleDefinition from '@/components/vestibule/VestibuleDefinition'
import VestibulePreuve from '@/components/vestibule/VestibulePreuve'
import VestibuleDiagnosticCTA from '@/components/vestibule/VestibuleDiagnosticCTA'

export default function VestibulePage() {
  return (
    <main className="min-h-screen" style={{ background: '#02040A' }}>
      <Header />
      <VestibuleHero />
      <VestibuleProbleme />
      <VestibuleDefinition />
      <VestibulePreuve />
      <VestibuleDiagnosticCTA />
    </main>
  )
}
