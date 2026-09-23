import useReveal from '../hooks/useReveal'

function FloralIcon() {
  return (
    <svg className="floral-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15C50 15 54 35 70 35C86 35 85 50 85 50C85 50 65 54 65 70C65 86 50 85 50 85C50 85 46 65 30 65C14 65 15 50 15 50C15 50 35 46 35 30C35 14 50 15 50 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function PersonCard({ title, initial, name, parents, delayClass }) {
  return (
    <div className={`couple-card reveal ${delayClass}`}>
      <div className="couple-card__badge">
        <div className="couple-card__initial-ring">
          <span className="couple-card__initial">{initial}</span>
        </div>
      </div>
      <span className="couple-card__role">{title}</span>
      <h3 className="couple-card__name">{name}</h3>
      <div className="divider divider--small">
        <span className="divider__line" />
        <span className="divider__mark" />
        <span className="divider__line" />
      </div>
      <p className="couple-card__meta">{parents}</p>
    </div>
  )
}

export default function Couple() {
  const [ref, visible] = useReveal()
  const cls = visible ? 'is-visible' : ''

  return (
    <section className="section section--wide" ref={ref}>
      <p className="eyebrow">The bride &amp; groom</p>
      <h2 className="section-title">Beginning Their Journey</h2>

      <div className="couple-grid">
        <PersonCard
          title="The Bride"
          initial="S"
          name="Dr. Shiba CMP"
          parents={
            <>
              Daughter of
              <br />
              C M P Yousef &amp; Raihana Edavath
            </>
          }
          delayClass={`reveal-delay-1 ${cls}`}
        />

        <PersonCard
          title="The Groom"
          initial="A"
          name="Dr. Adheeb Mohamedali C V"
          parents={
            <>
              Son of
              <br />
              Mohamedali CV &amp; Bushara Khader
            </>
          }
          delayClass={`reveal-delay-2 ${cls}`}
        />
      </div>

      <div className={`couple-emblem reveal reveal-delay-3 ${cls}`}>
        <div className="couple-emblem__inner">
          <FloralIcon />
          <span className="couple-emblem__monogram">Shiba &amp; Adheeb</span>
          <p className="couple-emblem__subtext">Two souls, one heart</p>
        </div>
      </div>
    </section>
  )
}

