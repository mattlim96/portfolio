import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Projects } from "@/components/sections/projects"
// import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Main content sections */}
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        {/* <Contact /> */}
      </main>
    </>
  )
}

