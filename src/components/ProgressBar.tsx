
import './ProgressBar.css'

type Props = {
  value: number // 0–100
  label?: string
  size?: number // px del círculo
  trackColor?: string
  progressColor?: string
  textColor?: string
}

export default function ProgressBar({
  value,
  size = 140,
  trackColor = '#e6e6e6',
  progressColor = '#1FA15A', // verde del mock
  textColor = '#ffffff',
}: Props) {
  const clamped = Math.max(0, Math.min(100, value))
  const strokeWidth = 12
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  const dash = (clamped / 100) * c

  return (
    <div className="progress-card" role="group" aria-label="Progreso de cursos">
      <div
        className="progress-circle"
        style={{ width: size, height: size }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        role="progressbar"
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* fondo */}
          <circle
            className="track"
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          {/* progreso (arranca arriba, sentido horario) */}
          <circle
            className="progress"
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${dash} ${c - dash}`}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          {/* porcentaje */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="percent"
            fill={textColor}
          >
            {clamped}%
          </text>
        </svg>
      </div>

      <p className="progress-label" style={{ color: textColor }}>
        <strong>De los cursos de la</strong>
        <br />
        <strong>plataforma realizados</strong>
      </p>
    </div>
  )
}
