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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugit quos quae enim accusantium nisi? Ab aut delectus corrupti, repellat esse illo aperiam assumenda consequatur nihil quia recusandae ex dolor!
        </CareerBlock>
        <article className={styles.thailand}></article>
        <CareerBlock title="Web developer - Customs4Trade" period={['April 2022', 'October 2023']} technologies={['Angular', 'Cypress', 'Storybook']} className={styles.c4t}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur soluta nostrum, alias ad quaerat ipsum ex commodi ullam eos, laboriosam, hic blanditiis neque exercitationem voluptatibus provident quas voluptates vitae dolores.
        </CareerBlock>
        <CareerBlock title="Web developer - Christelijke Mutualiteiten" period={['May 2017', 'April 2022']} technologies={['Angular', 'Node.js', 'MongoDB', 'OAuth', 'Jest', 'Cypress']} className={styles.cmWeb}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat corrupti hic recusandae aspernatur tempora dolore esse itaque nemo, doloribus molestiae, obcaecati, omnis beatae sequi quae voluptatibus perferendis explicabo voluptate.
        </CareerBlock>
        <CareerBlock title="Java developer - Christelijke Mutualiteiten" period={['April 2012', 'May 2017']} technologies={['Java EE', 'Struts']} className={styles.cmJava}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat excepturi repellendus perspiciatis ut soluta, nostrum sapiente modi accusamus saepe. Neque dolor, obcaecati voluptatem earum modi ex aut molestias velit? Nemo!
        </CareerBlock>
      </div>
    </div>
  </>
}