import { Project } from '@/components/project/Project'

import styles from './page.module.css'

export const metadata = {
  title: 'Projects',
  description: 'Some side projects I have created for your pleasure and sometimes convenience.',
}

export default function ProjectsPage() {
  return <>
    <h2>Projects</h2>
    <div className={styles.projectsContainer}>
      <Project path="/projects/base64-encoder" title="Base64 encoder">
        <p>A simple client side tool to encode and decode Base64 values.</p>
        <p>Also supports Base64url encoding.</p>
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