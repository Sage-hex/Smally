// import React from 'react'
// import Header from '../components/Header'

// const Home = () => {
//   return (
//     <div>
//       <Header/>
//     </div>
//   )
// }

// export default Home


// import Header from "@/components/Header";
import { UrlForm } from "../components/UrlForm";
import ShortenedLinkTable from "../components/ShortenedLinkTable.jsx";
// import Footer from "@/components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  const sampleLinks = [
    {
      shortUrl: "https://linkly.com/Bn14aCOlnxj",
      originalUrl: "https://www.twitter.com/tweets/@BerelCoihu/",
      qrCode: "qr1",
      clicks: 1313,
      status: "Active",
      date: "Oct - 10 -2023"
    },
    {
      shortUrl: "https://linkly.com/Bn14aCOlnxj",
      originalUrl: "https://www.youtube.com/watch?v=8J7zmH0KUk",
      qrCode: "qr2",
      clicks: 4313,
      status: "Inactive",
      date: "Oct - 08 -2023"
    },
    {
      shortUrl: "https://linkly.com/Bn14aCOlnxj",
      originalUrl: "https://www.adventuresinwanderlust.com/",
      qrCode: "qr3",
      clicks: 1013,
      status: "Active",
      date: "Oct - 01 -2023"
    },
    {
      shortUrl: "https://linkly.com/Bn14aCOlnxj",
      originalUrl: "https://vimeo.com/625257654",
      qrCode: "qr4",
      clicks: 1313,
      status: "Active",
      date: "Sep - 20 -2023"
    },
    {
      shortUrl: "https://linkly.com/Bn14aCOlnxj",
      originalUrl: "https://unsplash.com/photos/2KjNwOzFfVQ",
      qrCode: "qr5",
      clicks: 1423,
      status: "Active",
      date: "Sep - 18 -2023"
    }
  ];

  return (
    <main className={`min-h-screen px-4 pb-10 ${isDark ? "bg-[#0E0E1C] text-white" : "bg-white text-black"}`}>
      <Header/>
      <UrlForm />
      <SocialMediaIcons />
      <ShortenedLinkTable links={sampleLinks} />
      <Footer />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </main>
  );
}
