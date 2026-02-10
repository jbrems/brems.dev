import { Project } from '@/components/project/Project'

import styles from './page.module.css'

export const metadata = {
  title: 'Projects',
  description: 'Some side projects I have created for your pleasure and sometimes convenience.',
}

export default function ProjectsPage() {
  return <>
    <h1>Projects</h1>
    <div className={styles.projectsContainer}>
      <Project path="/projects/national-registration-generation" title="National Registration Generation">
        <p>Generates and completes Belgian national registration numbers.</p>
      </Project>
      <Project path="/projects/base64-encoder" title="Base64 encoder">
        <p>A simple client side tool to encode and decode Base64 values.</p>
        <p>Also supports Base64url encoding.</p>
      </Project>
      <Project path="/projects/whos-that-pocemon" title="Who's that POCemon?">
        <p>What started as a proof of concept about Next.js caching turned into a standalone project.</p>
        <p>Test your generation 1 POCemon knowledge with this fun little game.</p>
      </Project>
      <Project path="/projects/smileybook" title="Smileybook">
        <p>Smileybook is a collection of all emojis in the Unicode standard.</p>
        <p>Currently contains all v17.0 emojis.</p>
      </Project>
      <Project path="/projects/form-validation" title="Form validation">
        <p>A proof of concept project that implements Angular style form validation in React.</p>
      </Project>
      <Project path="/projects/presentr" title="Presentr">
        <p>A proof of concept project to support the Dev meeting on OAuth at De Lijn.</p>
        <p>Implements the Google Photos picker API.</p>
      </Project>
      <Project path="/projects/ssr" title="Server Side Rendering">
        <p>Server Side Rendering examples showing server components, the Suspense element, and the use hook.</p>
      </Project>
    </div>
  </>
}