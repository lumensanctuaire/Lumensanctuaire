'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DiagnosticIntro from './DiagnosticIntro'
import DiagnosticQuestion from './DiagnosticQuestion'

type ResultType =
  | 'structure_absente'
  | 'vision_sans_execution'
  | 'execution_sans_vision'
  | 'illusion_de_stabilite'

interface Question {
  id: number
  text: string
  choices: string[]
  map: ResultType[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "Quand tu regardes ta vie actuelle, que vois-tu réellement ?",
    choices: [
      "Rien de précis, mais quelque chose sonne faux",
      "Je vois clairement ce qui ne fonctionne pas, mais ça n'avance pas",
      "J'agis, mais je ne sais pas vraiment où je vais",
      "Rien ne me semble vraiment problématique",
    ],
    map: ['structure_absente', 'vision_sans_execution', 'execution_sans_vision', 'illusion_de_stabilite'],
  },
  {
    id: 2,
    text: "Quand une situation résiste, quel est ton premier mouvement ?",
    choices: [
      "Je réagis rapidement pour corriger",
      "Je cherche à comprendre ce qui se joue réellement",
      "J'évite ou je reporte",
      "Je m'adapte sans vraiment analyser",
    ],
    map: ['execution_sans_vision', 'vision_sans_execution', 'structure_absente', 'illusion_de_stabilite'],
  },
  {
    id: 3,
    text: "Quand tu apprends quelque chose, que se passe-t-il ensuite ?",
    choices: [
      "J'accumule sans structurer",
      "Je relie à d'autres idées, je construis une vision",
      "J'applique directement",
      "J'oublie rapidement",
    ],
    map: ['structure_absente', 'vision_sans_execution', 'execution_sans_vision', 'illusion_de_stabilite'],
  },
  {
    id: 4,
    text: "Quand une décision importante arrive :",
    choices: [
      "Je décide vite pour avancer",
      "J'hésite longtemps, je tourne en rond",
      "Je prends le temps de voir, mais je n'avance pas",
      "Je suis ce qui est déjà tracé",
    ],
    map: ['execution_sans_vision', 'structure_absente', 'vision_sans_execution', 'illusion_de_stabilite'],
  },
  {
    id: 5,
    text: "Ce qui te décrit le mieux aujourd'hui :",
    choices: [
      "Je comprends plus que je n'arrive à appliquer",
      "J'agis beaucoup mais sans clarté",
      "Je suis perdu sans savoir pourquoi",
      "Rien ne me semble problématique",
    ],
    map: ['vision_sans_execution', 'execution_sans_vision', 'structure_absente', 'illusion_de_stabilite'],
  },
]

// Q1 et Q5 pondérées 1.5× — positions de révélation structurelle
const WEIGHTS = [1.5, 1.0, 1.0, 1.0, 1.5]

function computeResult(answers: number[]): ResultType {
  const scores: Record<ResultType, number> = {
    structure_absente: 0,
    vision_sans_execution: 0,
    execution_sans_vision: 0,
    illusion_de_stabilite: 0,
  }
  answers.forEach((choiceIndex, questionIndex) => {
    const type = questions[questionIndex].map[choiceIndex]
    scores[type] += WEIGHTS[questionIndex]
  })
  return (Object.entries(scores) as [ResultType, number][])
    .sort((a, b) => b[1] - a[1])[0][0]
}

export default function DiagnosticShell() {
  const router = useRouter()
  const [phase, setPhase] = useState<'intro' | 'question'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [visible, setVisible] = useState(true)

  function startDiagnostic() {
    setVisible(false)
    setTimeout(() => {
      setPhase('question')
      setVisible(true)
    }, 1200)
  }

  function handleAnswer(choiceIndex: number) {
    const nextAnswers = [...answers, choiceIndex]
    setVisible(false)

    setTimeout(() => {
      if (current < questions.length - 1) {
        setAnswers(nextAnswers)
        setCurrent((c) => c + 1)
        setVisible(true)
      } else {
        const result = computeResult(nextAnswers)
        router.push(`/diagnostic/resultat?type=${result}`)
      }
    }, 1200)
  }

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.2s ease',
        minHeight: '100vh',
        background: '#02040A',
      }}
    >
      {phase === 'intro' && (
        <DiagnosticIntro onDemarrer={startDiagnostic} />
      )}
      {phase === 'question' && (
        <DiagnosticQuestion
          key={current}
          question={questions[current]}
          onRepondre={handleAnswer}
        />
      )}
    </div>
  )
}