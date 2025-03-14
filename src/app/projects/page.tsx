import { Project } from '@/components/project/Project'

import styles from './page.module.css'
import { screenCaptureSize } from '@/lib/puppeteer.service'

export const metadata = {
  title: 'Projects',
  description: 'Some side projects I have created for your pleasure and sometimes convenience.',
  openGraph: {
    title: 'Projects',
    description: 'Some side projects I have created for your pleasure and sometimes convenience.',
    images: [{
      url: 'https://brems.dev/api/screen-captures/projects?size=openGraph',
      type: 'image/jpeg',
      width: screenCaptureSize.openGraph.width,
      height: screenCaptureSize.openGraph.height,
      alt: 'Screen capture of the projects page',
    }],
  },
}

export default function ProjectsPage() {
  return <>
    <h2>Projects</h2>
    <div className={styles.projectsContainer}>
      <Project path="/projects/national-registration-generation" title="National Registration Generation">
        <p>Generates and completes Belgian national registration numbers.</p>
      </Project>
      <Project path="/projects/base64-encoder" title="Base64 encoder">
        <p>A simple client side tool to encode and decode Base64 values.</p>
        <p>Also supports Base64url encoding.</p>
      </Project>
      <Project path="/projects/form-validation" title="Form validation">
        <p>A proof of concept project that implements Angular style form validation in React.</p>
      </Project>
      <Project path="/projects/presentr" title="Presentr">
        <p>A proof of concept project to support the Dev meeting on OAuth at De Lijn.</p>
        <p>Implements the Google Photos picker API.</p>
      </Project>
      <Project path="/projects/whos-that-pocemon" title="Who's that POCemon?">
        <p>What started as a proof of concept about Next.js caching turned into a standalone project.</p>
        <p>Have you figured out why the POCemon Pidgeot, Kabuto, and Mew will never show up in this quiz?</p>
      </Project>
    </div>
  </>
}