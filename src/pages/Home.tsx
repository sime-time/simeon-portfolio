import PageLayout from "../layouts/PageLayout";
import WhatIDo from "../components/WhatIDo";
import Skills from "../components/Skills";
import { useNav, NavPage } from "../context/NavContext";
import { IoDesktopOutline } from 'solid-icons/io'
import { BsRobot } from 'solid-icons/bs'
import { FaSolidCode } from 'solid-icons/fa'
import { IoCalendar } from 'solid-icons/io'
import { BiSolidDoorOpen } from 'solid-icons/bi'

export default function Home() {
  const { setPage } = useNav();

  return (
    <PageLayout title="About Me">
      <div class="flex flex-col gap-8">
        <ul class="ml-4 list-disc flex flex-col gap-3">
          <li>I am a full stack developer familiar with Typescript/Javascript and SQL databases.</li>
          <li>I currently serve local businesses by building websites and full stack applications.</li>
          <li>I am open to full time opportunities in web development, on-site or remote.</li>
          <li><button onClick={() => setPage(NavPage.Contact)} class="underline text-yellow-300 cursor-pointer">Contact me</button> if interested in freelance, contract, or full-time development work for your company.</li>
        </ul>

        <section class="flex flex-col gap-4">
          <h2 class="text-2xl font-semibold">What I Do</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
            <WhatIDo
              title="Full Stack Development"
              icon={<IoDesktopOutline size={48} />}
              description=""
            />
            <WhatIDo
              title="AI Agents/Chatbots"
              icon={<BsRobot size={48} />}
              description=""
            />
            <WhatIDo
              title="Customer Portals"
              icon={<BiSolidDoorOpen size={48} />}
              description=""
            />
            <WhatIDo
              title="Appointment Booking Websites"
              icon={<IoCalendar size={48} />}
              description=""
            />
          </div>
          <div class="mt-2">
            <button onClick={() => setPage(NavPage.Contact)} class="p-3 rounded-lg w-full bg-amber-400 text-slate-900 font-semibold cursor-pointer">Let's Talk</button>
          </div>
        </section>

        <Skills />

      </div>
    </PageLayout>
  );
}
