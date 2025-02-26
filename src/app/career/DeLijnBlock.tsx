import { CareerBlock } from '@/components/career-block/CareerBlock'
import { DeLijnLogo } from '@/components/logos/de-lijn-logo/DeLijnLogo'

export function DeLijnBlock({ className }: { className?: string }) {
  return <CareerBlock title="Web developer - De Lijn" period={['November 2023', 'current']} technologies={['Next.js', 'Azure', 'OAuth']} className={className}>
    <DeLijnLogo />
    <p>At De Lijn I&apos;m currently working as part of an experienced web team, expanding and improving the company&apos;s website and public facing applications.</p>
  </CareerBlock>
}