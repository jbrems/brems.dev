import { Timeline } from "@/components/timeline/Timeline";
import styles from './page.module.css'
import { CareerBlock } from "@/components/career-block/CareerBlock";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import Link from "next/link";
import { DeLijnBlock } from "./DeLijnBlock";

export default function CareerPage() {
  return <>
    <div className={styles.title}>
      <h2>My career</h2>
      <Link href="https://www.linkedin.com/in/jonas-brems-a2022b2a/" target="_blank" aria-label="My linkedin profile"><LinkedinIcon /></Link>
    </div>
    <div className={styles.careerTimeline}>
      <Timeline />
      <div className={styles.career}>
        <DeLijnBlock className={styles.deLijn} />
        <div className={styles.thailand}></div>
        <C4TBlock />
        <CmWebBlock />
        <CmJavaBlock />
      </div>
    </div>
  </>
}

function C4TBlock() {
  return <CareerBlock title="Web developer - Customs4Trade" period={['April 2022', 'October 2023']} technologies={['Angular', 'Cypress', 'Storybook', 'Azure']} className={styles.c4t}>
    <p>At Customs4Trade I spearheaded the front end development for the company&apos;s SAAS application in a vast team of backend developers.</p>
    <p>As the only front-end developer my responsibilities included managing the Angular code base and teaching my colleagues some web application development.</p>
  </CareerBlock>
}

function CmWebBlock() {
  return <CareerBlock title="Web developer - CM" period={['May 2017', 'April 2022']} technologies={['Angular', 'Node.js', 'MongoDB', 'OAuth', 'Jest', 'Cypress']} className={styles.cmWeb}>
    <p>After 5 years of Java development I joined CM&apos;s web team as a junior,
      self-taught Angular and Nodejs
      developer and contributed to making
      web applications to be embedded in the company&apos;s website.</p>
    <p>Through the years I became the most experienced member of the
      team where I supported my colleagues and tackled the most
      challenging tasks as a senior developer and solution architect.</p>
  </CareerBlock>
}

function CmJavaBlock() {
  return <CareerBlock title="Java developer - CM" period={['April 2012', 'May 2017']} technologies={['Java EE', 'Struts']} className={styles.cmJava}>
    <p>At CM I gained my first professional software development
      experience while being part of various experienced teams creating
      Java backends and internal web applications for processes within CM.</p>
  </CareerBlock>
}