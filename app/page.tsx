import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { Work } from '@/components/work'
import { Testimonials } from '@/components/testimonials'
import { BusinessHours } from '@/components/business-hours'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <Work />
        <Testimonials />
        <BusinessHours />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
