import { Timeline } from '@/components/timeline/Timeline'
import styles from './page.module.css'
import { CareerBlock } from '@/components/career-block/CareerBlock'
import { LinkedinIcon } from '@/components/icons/linkedin-icon/LinkedinIcon'
import Link from 'next/link'
import { DeLijnBlock } from './DeLijnBlock'
import { C4TLogo } from '@/components/logos/c4t-logo/C4TLogo'
import { CmLogo } from '@/components/logos/cm-logo/CmLogo'
import { screenCaptureSize } from '@/lib/puppeteer.service'

export const metadata = {
  title: 'My  career',
  description: 'A quick overview of my web developer career. For more details, see my Linkedin profile.',
  openGraph: {
    title: 'My career',
    description: 'A quick overview of my web developer career. For more details, see my Linkedin profile.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/career?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the career page',
    }],
  },
}

export default function CareerPage() {
  return <>
    <div className={styles.title}>
      <h2>My career</h2>
      <Link href="https://www.linkedin.com/in/jonas-brems-a2022b2a/" target="_blank" aria-label="My linkedin profile"><LinkedinIcon /></Link>
    </div>
    <p>Here follows a short account of my career up to now. For more details, see <Link href="https://www.linkedin.com/in/jonas-brems-a2022b2a/" target="_blank">my Linkedin profile</Link>.</p>
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
    <C4TLogo />
    <p>At Customs4Trade I spearheaded the front end development for the company&apos;s SAAS application in a vast team of backend developers.</p>
    <p>As the only front-end developer my responsibilities included managing the Angular code base and teaching my colleagues some web application development.</p>
  </CareerBlock>
}

function CmWebBlock() {
  return <CareerBlock title="Web developer - CM" period={['May 2017', 'April 2022']} technologies={['Angular', 'Node.js', 'MongoDB', 'Express.js', 'OAuth', 'Jest', 'REST', 'Docker']} className={styles.cmWeb}>
    <CmLogo />
    <p>In CM&apos;s web team I taught myself Angular and Nodejs development and contributed to making web applications to be embedded in the company&apos;s website and client portal (<a href="https://cm.be" target="_blank">cm.be</a>).</p>
    <p>Through the years I became the most experienced member of the team in which I tackled the most challenging tasks and supported my colleagues as an senior developer and solution architect.</p>
    <p>I am proud to have taken part in transitioning from a mono-repository architecture to a fast and scalable micro-frontend and -backend capable of handling traffic from the 1.5 million registered client accounts and over 1000 new account creations per day.</p>
    <p>I was responsible for creating, maintaining and expanding the multi channel OAuth authentication framework allowing a secure and user friendly single sign on session on CM&apos;s mobile app, website and affiliated websites as well as the integration with the government&apos;s authentication platform (CSAM) using eID or ItsMe.</p>
  </CareerBlock>
}

function CmJavaBlock() {
  return <CareerBlock title="Java developer - CM" period={['April 2012', 'May 2017']} technologies={['Java EE', 'Struts', 'REST', 'SOAP']} className={styles.cmJava}>
    <CmLogo />
    <p>At CM I gained my first professional software development experience while being part of various experienced teams creating Java backends and internal web applications for processes within CM.</p>
    <p>During this time I discovered my love for frontend development which eventually led me to join CM’s web team as a full stack javascript developer while maintaining the Java backend service.</p>
  </CareerBlock>
}