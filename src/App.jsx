import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SocialSidebar from "./components/sidebaricon/SocialSidebar";
import Services from "./components/ourservices/Services";
import JoinUs from "./components/joinus/JoinUs";
import InternshipJoin from "./components/joinus/For intership/InternshipJoin";
import Testimonial from "./components/Testonomial/Testimonial";
import Ourclient from "./components/Ourclient/Ourclient";
import HappyClient from "./components/Happyclient/HappyClient";
import ContactUs from "./components/contactUs/ContactUs";
import OurTeam from "./components/Ourteam/OurTeam";
import Hero from "./components/Circularservice/Hero";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SocialSidebar />
      <Services />
      {/* <WhoWeAre /> */}
     <Hero />
      <HappyClient />
      <Ourclient />
      {/* <JoinUs />
      <InternshipJoin /> */}
      <Testimonial />
      <ContactUs />
      <OurTeam />
    </>
  );
}

export default App;
