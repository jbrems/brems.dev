import { CareerBlock } from "@/components/career-block/CareerBlock";
import styles from './DeLijnBlock.module.css'

export function DeLijnBlock() {
  return <CareerBlock title="Web developer - De Lijn" period={['November 2023', 'current']} technologies={['Next.js', 'Azure', 'Docusaurus']} className={styles.deLijn}>
    <p>At De Lijn I&apos;m currently working as part of the web team, extending and improving the company&apos;s website functionalities and public facing applications.</p>
  </CareerBlock>
}