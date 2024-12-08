import { CareerBlock } from "./CareerBlock";

export default {
  component: CareerBlock,
}

export const DeLijn = {
  args: {
    title: 'Web developer - De Lijn',
    period: ['November 2023', 'current'],
    technologies: ['Next.js', 'Azure', 'Docusaurus'],
    children: <p>At De Lijn I&apos;m currently working as part of an experienced web team, expanding and improving the company&apos;s website and public facing applications.</p>,
  }
}

export const C4T = {
  args: {
    title: 'Web developer - Customs4Trade',
    period: ['April 2022', 'October 2023'],
    technologies: ['Angular', 'Cypress', 'Storybook', 'Azure'],
    children: <><p>At Customs4Trade I spearheaded the front end development for the company&apos;s SAAS application in a vast team of backend developers.</p>
    <p>As the only front-end developer my responsibilities included managing the Angular code base and teaching my colleagues some web application development.</p></>,
  }
}

export const CMWeb = {
  args: {
    title: 'Web developer - CM',
    period: ['May 2017', 'April 2022'],
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'OAuth', 'Jest', 'REST', 'Docker'],
    children: <><p>After 5 years of Java development I joined CM&apos;s web team as a junior,
    self-taught Angular and Nodejs
    developer and contributed to making
    web applications to be embedded in the company&apos;s website.</p>
    <p>Through the years I became the most experienced member of the
    team where I supported my colleagues and tackled the most
    challenging tasks as a senior developer and solution architect.</p></>
  }
}

export const CMJava = {
  args: {
    title: 'Java developer - CM', 
    period: ['April 2012', 'May 2017'],
    technologies: ['Java EE', 'Struts', 'REST', 'SOAP'],
    children: <p>At CM I gained my first professional software development
    experience while being part of various experienced teams creating
    Java backends and internal web applications for processes within CM.</p>,
  }
}