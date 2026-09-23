import useReveal from '../hooks/useReveal'

export default function Closing() {
  const [ref, visible] = useReveal()

  return (
    <section className="section closing" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <div className="divider">
          <span className="divider__line" />
          <span className="divider__mark" />
          <span className="divider__line" />
        </div>
        <h2 className="section-title">We can't wait to celebrate with you</h2>
        <p className="body-copy">
          Your presence would make our day complete. We look forward to
          seeing you there.
        </p>
      </div>
    </section>
  )
}
