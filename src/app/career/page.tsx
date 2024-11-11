import { Timeline } from "@/components/timeline/Timeline";
import styles from './page.module.css'
import { CareerBlock } from "@/components/career-block/CareerBlock";

export default function CareerPage() {
  return <>
    <h2>My career</h2>
    <div className={styles.careerTimeline}>
      <Timeline />
      <div className={styles.career}>
        <CareerBlock title="Web developer - De Lijn" period={['November 2023', 'now']} technologies={['Next.js', 'Azure', 'Docusaurus']} className={styles.deLijn}>
          <p>At De Lijn I'm currently working as part of the web team, extending and improving the company's website and public facing applications.</p>
        </CareerBlock>
        <article className={styles.thailand}></article>
        <CareerBlock title="Web developer - Customs4Trade" period={['April 2022', 'October 2023']} technologies={['Angular', 'Cypress', 'Storybook', 'Azure']} className={styles.c4t}>
          <p>At Custums4Trade I spearheaded the front end development for the company's SAAS application in a vast team of backend developers.</p>
          <p>As the only front-end developer my responsibilities included managing the Angular code base and teaching my colleagues some web application development.</p>
        </CareerBlock>
        <CareerBlock title="Web developer - Christelijke Mutualiteiten" period={['May 2017', 'April 2022']} technologies={['Angular', 'Node.js', 'MongoDB', 'OAuth', 'Jest', 'Cypress']} className={styles.cmWeb}>
          <p>After 5 years of Java development I joined CM's web team as a junior,
self-taught Angular and Nodejs
developer and contributed to making
web applications to be embedded in the company's website.</p>
          <p>Through the years I became the most experienced member of the
team where I supported my colleagues and tackled the most
challenging tasks as a senior developer and solution architect.</p>
        </CareerBlock>
        <CareerBlock title="Java developer - Christelijke Mutualiteiten" period={['April 2012', 'May 2017']} technologies={['Java EE', 'Struts']} className={styles.cmJava}>
          <p>At CM I gained my first professional software development
experience while being part of various experienced teams creating
Java backends and internal web applications for processes within CM.</p>
        </CareerBlock>
      </div>
    </div>
  </>
}