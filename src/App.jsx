import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialSidebar from './components/sidebaricon/SocialSidebar'
import Services from './components/ourservices/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SocialSidebar />
      <Services />
      <h1>hello</h1>
      
    </>
  )
}

export default App
