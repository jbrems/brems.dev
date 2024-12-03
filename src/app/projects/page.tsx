import { Project } from "@/components/project/Project";

import styles from './page.module.css'

export const metadata = {
  title: 'Projects',
  description: 'Some side projects I have created for your pleasure and sometimes convenience.',
}

export default function ProjectsPage() {
  return <>
    <h2>Projects</h2>
    <div className={styles.projectsContainer}>
      <Project url="/projects/presentr" coverImageUrl="/presentr.jpg" title="Presentr">
        <p>Present your photos with style!</p>
        <p>Implements the Google Photos picker APIs.</p>
      </Project>
    </div>
  </>
}