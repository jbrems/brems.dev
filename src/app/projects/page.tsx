import { Project } from "@/components/project/Project";

import styles from './page.module.css'

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