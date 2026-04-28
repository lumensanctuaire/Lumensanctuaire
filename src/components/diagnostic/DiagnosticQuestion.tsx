'use client'

import { useState } from 'react'

interface Question {
  id: number
  text: string
  choices: string[]
}

interface Props {
  question: Question
  onRepondre: (choiceIndex: number) => void
}

export default function DiagnosticQuestion({ question, onRepondre }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  function handleContinue() {
    if (selected === null) return
    onRepondre(selected)
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: '#02040A' }}
    >
      <div style={{ maxWidth: '560px', width: '100%' }}>

        <h2
          className="font-cinzel text-center"
          style={{
            fontSize: 'clamp(1rem, 1.9vw, 1.35rem)',
            color: '#E8E2D3',
            lineHeight: 1.65,
            marginBottom: '3.5rem',
          }}
        >
          {question.text}
        </h2>

        <div className="flex flex-col gap-3" style={{ marginBottom: '3.5rem' }}>
          {question.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="text-left w-full"
              style={{
                background: selected === i ? 'rgba(207,174,106,0.05)' : 'transparent',
                border: selected === i
                  ? '1px solid rgba(207,174,106,0.28)'
                  : '1px solid rgba(232,226,211,0.07)',
                padding: '1.25rem 1.5rem',
                transition: 'background 0.6s ease, border-color 0.6s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
              }}
            >
              <span
                className="font-cinzel shrink-0"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: selected === i ? 'rgba(207,174,106,0.6)' : 'rgba(207,174,106,0.18)',
                  marginTop: '3px',
                  transition: 'color 0.6s ease',
                }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <p
                className="font-manrope"
                style={{
                  fontSize: '14px',
                  color: selected === i ? 'rgba(232,226,211,0.8)' : 'rgba(232,226,211,0.42)',
                  lineHeight: 1.75,
                  transition: 'color 0.6s ease',
                }}
              >
                {choice}
              </p>
            </button>
          ))}
        </div>

        {/* Confirmation — apparaît uniquement après sélection */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            opacity: selected !== null ? 1 : 0,
            transition: 'opacity 0.9s ease',
            pointerEvents: selected !== null ? 'auto' : 'none',
          }}
        >
          <button
            onClick={handleContinue}
            className="font-cinzel"
            style={{
              fontSize: '10px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(207,174,106,0.55)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.75rem 2rem',
              transition: 'color 0.4s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#CFAE6A' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(207,174,106,0.55)' }}
          >
            Continuer →
          </button>
        </div>

      </div>
    </div>
  )
}