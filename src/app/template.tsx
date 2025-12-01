import { Footer } from "@/components/footer/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import { SkipToMainContent } from "@/components/skip-to-main-content/SkipToMainContent";
import { StarrySky } from "@/components/starry-sky/StarrySky";
import { Analytics } from "@vercel/analytics/next";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (<>
    <StarrySky />
    <section className="relative z-1">
      <SkipToMainContent />
      <Navigation />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </section>
    <Analytics />
  </>
  )
}