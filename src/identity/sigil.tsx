type SigilProps = {
  size?: number
  color?: string
}

export default function Sigil({ size = 64, color = 'currentColor' }: SigilProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * (88 / 64))}
      viewBox="0 0 64 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="16" y1="8"  x2="16" y2="80" stroke={color} strokeWidth="2.5" strokeLinecap="square"/>
      <line x1="16" y1="38" x2="34" y2="38" stroke={color} strokeWidth="1.5" strokeLinecap="square"/>
      <line x1="16" y1="80" x2="56" y2="80" stroke={color} strokeWidth="2.5" strokeLinecap="square"/>
    </svg>
  )
}
