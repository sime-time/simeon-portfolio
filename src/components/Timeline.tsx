import { FaSolidCircleCheck } from 'solid-icons/fa'
import { For, JSX } from 'solid-js'

interface JobEvent {
  title: string;
  employer: string;
  description: JSX.Element;
  date: string;
}

const jobs: JobEvent[] = [
  {
    title: "Web App Developer",
    employer: "Indy Boxing and Grappling",
    description: (<>
      <li>Designed and implemented a website and gym management system, enabling efficient member subscriptions and attendance tracking.</li>
      <li>Developed secure backend services in Golang, including integration with Stripe's API to automate subscription management.</li>
      <li>Built a responsive, mobile-friendly interface optimized for iPads and smartphones, ensuring seamless usability for both staff and members.</li>
      <li>Used technologies: HTML, CSS, Typescript, Stripe API, Golang, SQLite</li>
    </>),
    date: "Aug 2024 - Present"
  },
  {
    title: "Website Developer",
    employer: "College Carry",
    description: (<>
      <li>Leveraged AWS Lambda to automate customer email workflows, reducing manual tasks and improving communication efficiency.</li>
      <li>Developed a dynamic JavaScript pricing calculator to enhance user experience and streamline the order process.</li>
      <li>Modernized and optimized front-end designs for responsiveness across devices, resulting in improved user engagement.</li>
      <li>Used technologies: HTML, CSS, Javascript, AWS Lambda, Stripe</li>
    </>),
    date: "Nov 2023 - Apr 2024",
  },
  {
    title: "Data Engineering Intern",
    employer: "ShipSigma",
    description: (<>
      <li>Processed large datasets by building Python scripts and utilizing AWS Glue for scalable ETL operations.</li>
      <li>Queried and optimized Microsoft Azure SQL databases to support data visualization on Tableau dashboards, aiding decision-making processes.</li>
      <li>Enhanced data workflows by automating complex transformations, improving speed and accuracy for end-users.</li>
    </>),
    date: "June 2022 - May 2023",
  },
  {
    title: "Education",
    employer: "Purdue University - Indianapolis",
    description: (<>
      <li>Computer Science B.S.</li>
      <li>Mathematics Minor</li>
      <li>GPA: 3.7</li>
    </>),
    date: "Aug 2019 - May 2023"
  },
];

export default function Timeline() {
  return (
    <div class="flex items-center justify-start px-6">
      <div class="space-y-6 border-l-2 border-dashed border-yellow-600">
        <For each={jobs}>
          {(job) => (
            <div class="relative w-full">
              <FaSolidCircleCheck class="absolute top-0 z-10 -ml-3.5 h-7 w-7 rounded-full text-yellow-300 size-32 bg-slate-900" />
              <div class="ml-6">
                <h3 class="font-bold text-yellow-300 text-lg">{job.title}</h3>
                <h4 class="opacity-60 text-md">{job.employer}</h4>
                <span class="mt-1 block text-sm font-semibold text-yellow-300">{job.date}</span>
                <div class="mt-2 max-w-screen-md text-sm">
                  <ul class="list-disc flex flex-col gap-2 ml-4">
                    {job.description}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
