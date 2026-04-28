import { featuredQuote } from '@/data/quotes'

export default function QuoteCard() {
  const quote = featuredQuote

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#05070D' }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(207,174,106,0.06) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(207,174,106,0.3))' }}
          />
          <p
            className="font-cinzel text-[10px] tracking-[0.38em] uppercase"
            style={{ color: 'rgba(207,174,106,0.65)' }}
          >
            Parole qui élève
          </p>
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{ background: 'linear-gradient(90deg, rgba(207,174,106,0.3), transparent)' }}
          />
        </div>

        {/* Quote block */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Large decorative quote mark */}
          <div
            className="font-cinzel text-[7rem] leading-none mb-0 -mb-6"
            style={{
              color: 'rgba(207,174,106,0.1)',
              lineHeight: '0.7',
            }}
          >
            "
          </div>

          <blockquote
            className="font-cinzel text-[clamp(1.1rem,2.2vw,1.7rem)] font-medium leading-[1.65] mb-10"
            style={{
              color: '#E8E2D3',
              textShadow: '0 0 60px rgba(207,174,106,0.1)',
            }}
          >
            {quote.text}
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-px w-12"
              style={{ background: 'rgba(207,174,106,0.4)' }}
            />

            <div>
              <div
                className="font-cinzel text-[13px] tracking-[0.2em] font-semibold mb-1"
                style={{ color: '#CFAE6A' }}
              >
                — {quote.author}
              </div>
              {quote.source && (
                <div
                  className="font-manrope text-[12px] italic"
                  style={{ color: 'rgba(232,226,211,0.4)' }}
                >
                  {quote.source}
                  {quote.era && ` · ${quote.era}`}
                </div>
              )}
            </div>
          </div>

          {/* Decorative bottom */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div
              className="h-px w-24"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(207,174,106,0.25))',
              }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#CFAE6A',
                boxShadow: '0 0 8px rgba(207,174,106,0.5)',
              }}
            />
            <div
              className="h-px w-24"
              style={{
                background: 'linear-gradient(90deg, rgba(207,174,106,0.25), transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
