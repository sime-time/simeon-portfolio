import PageLayout from "../layouts/PageLayout";
import WhatIDo from "../components/WhatIDo";
import { IoDesktopOutline } from 'solid-icons/io'
import { IoPhonePortraitOutline } from 'solid-icons/io'
import { For } from "solid-js";
import { useNav, NavPage } from "../context/NavContext";

export default function About() {
  const { setPage } = useNav();

  // make an array to hold all the file names in the /public/skills folder
  const skillFiles = import.meta.glob("/public/skills/*.{png,jpg,svg}");
  const skillPaths = Object.keys(skillFiles).map(path =>
    // Remove the /public prefix from the path
    path.replace("/public", "")
  );

  const extractName = (input: string): string => {
    const match = input.match(/_(.+?)\./);
    return match ? match[1] : '';
  }

  return (
    <PageLayout title="About Me">
      <div class="flex flex-col gap-8">
        <ul class="ml-4 list-disc flex flex-col gap-3">
          <li>I am a full stack developer familiar with Typescript/Javascript and SQL databases.</li>
          <li>I currently serve local businesses by building websites and full stack applications.</li>
          <li>I am open to full time opportunities in web & mobile development, on-site or remote.</li>
          <li><button onClick={() => setPage(NavPage.Contact)} class="underline text-yellow-300 cursor-pointer">Contact me</button> if interested in freelance, contract, or full-time development work for your company.</li>
        </ul>

        <section class="flex flex-col gap-3">
          <h2 class="text-2xl font-semibold">What I Do</h2>
          <div class="flex flex-col md:flex-row justify-between gap-4">
            <WhatIDo
              title="Web Development"
              icon={<IoDesktopOutline size={48} />}
              description="Solution-focused web applications and websites."
            />
            <WhatIDo
              title="Mobile Apps"
              icon={<IoPhonePortraitOutline size={48} />}
              description="High-quality applications for Android and iOS."
            />
          </div>
        </section>

        <section class="flex flex-col gap-3">
          <h2 class="text-2xl font-semibold">Skills & Tools</h2>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-5">
            <For each={skillPaths}>{(path) => (
              <div class="flex flex-col gap-2 items-center justify-center w-fit">
                <img src={path} height={128} width={128} alt={extractName(path)} />
                <p>{extractName(path)}</p>
              </div>
            )}</For>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
