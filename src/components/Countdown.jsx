import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

const WEDDING_DATE = new Date('2026-12-23T11:00:00+05:30').getTime()

function getTimeLeft() {
  const diff = WEDDING_DATE - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [ref, visible] = useReveal()
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section section--wide countdown" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Counting down to</p>
        <h2 className="section-title">The big day</h2>

        {timeLeft ? (
          <div className="countdown-grid">
            <Unit value={timeLeft.days} label="Days" />
            <Unit value={timeLeft.hours} label="Hours" />
            <Unit value={timeLeft.minutes} label="Minutes" />
            <Unit value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <p className="countdown-complete">With gratitude, we are married ✦</p>
        )}
      </div>
    </section>
  )
}

function Unit({ value, label }) {
  return (
    <div className="countdown-unit">
      <div className="countdown-unit__value">{String(value).padStart(2, '0')}</div>
      <div className="countdown-unit__label">{label}</div>
    </div>
  )
}
