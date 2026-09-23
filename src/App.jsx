import { useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import Hero from './components/Hero.jsx'
import Invitation from './components/Invitation.jsx'
import Couple from './components/Couple.jsx'
import Countdown from './components/Countdown.jsx'
import WeddingDetails from './components/WeddingDetails.jsx'
import Venue from './components/Venue.jsx'
import Family from './components/Family.jsx'
import Closing from './components/Closing.jsx'
import Footer from './components/Footer.jsx'
import MusicToggle from './components/MusicToggle.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="invitation">
      <OpeningGate open={entered} onEnter={() => setEntered(true)} />

      <Hero />
      <Invitation />
      <Couple />
      <Countdown />
      <WeddingDetails />
      <Venue />
      <Family />
      <Closing />
      <Footer />

      {entered && <MusicToggle />}
    </div>
  )
}
