import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialSidebar from './components/sidebaricon/SocialSidebar'
import Services from './components/ourservices/Services'
import JoinUs from './components/joinus/JoinUs'
import InternshipJoin from './components/joinus/For intership/InternshipJoin'
import Testimonial from './components/Testonomial/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SocialSidebar />
      <Services />
      {/* <JoinUs />
      <InternshipJoin /> */}
      <Testimonial />
      
    </>
  )
}

export default App
