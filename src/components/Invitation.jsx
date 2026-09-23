import useReveal from '../hooks/useReveal'

export default function Invitation() {
  const [ref, visible] = useReveal()

  return (
    <section className="section" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">With hearts full of joy</p>
        <h2 className="section-title">We're getting married</h2>
        <p className="body-copy">
          We would be honoured to have you join us as we begin this new
          chapter, surrounded by the people we love most. Your presence
          and prayers would mean the world to us.
        </p>
      </div>
    </section>
  )
}
