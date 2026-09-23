import useReveal from '../hooks/useReveal'

export default function WeddingDetails() {
  const [ref, visible] = useReveal()

  return (
    <section className="section" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Save the date</p>
        <h2 className="section-title">Wedding Details</h2>

        <div className="details-card">
          <div className="details-row">
            <span className="details-row__label">Date</span>
            <span className="details-row__value">Wednesday, 23rd December 2026</span>
          </div>
          <div className="details-row">
            <span className="details-row__label">Venue</span>
            <span className="details-row__value">Bianco Castle, Tirur</span>
          </div>
        </div>
      </div>
    </section>
  )
}
