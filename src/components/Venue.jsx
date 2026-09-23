import useReveal from '../hooks/useReveal'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Bianco+Castle%2C+Tirur'

function MapPinIcon() {
  return (
    <svg className="venue-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21C16 17.5 20 14 20 9.5C20 5.36 16.42 2 12 2C7.58 2 4 5.36 4 9.5C4 14 8 17.5 12 21Z" />
      <circle cx="12" cy="9.5" r="3" />
    </svg>
  )
}

export default function Venue() {
  const [ref, visible] = useReveal()

  return (
    <section className="section" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Join us at</p>
        <h2 className="section-title">Bianco Castle, Tirur</h2>
        <p className="body-copy">
          A celebration awaits amid its elegant halls. We look forward to
          welcoming you and sharing this joyous evening together.
        </p>

        <div className="venue-card">
          <MapPinIcon />
          <span className="venue-card__title">Bianco Castle</span>
          <span className="venue-card__sub">Tirur, Kerala</span>
        </div>

        <a className="cta-button" href={MAPS_URL} target="_blank" rel="noreferrer">
          View Location on Google Maps
        </a>
      </div>
    </section>
  )
}

