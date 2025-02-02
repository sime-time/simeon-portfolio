import PersonalLink from "./PersonalLink";
import { createSignal } from "solid-js";
import { AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'
import { FiMail } from "solid-icons/fi";
import { IoLocationOutline } from 'solid-icons/io';
import { FaSolidAngleDown } from 'solid-icons/fa';

export default function PersonalCard() {
  const [openLinks, setOpenLinks] = createSignal(false);

  return (
    <section class="sidebar p-4 pb-0 md:px-8 md:pt-12 md:pb-3 flex flex-col gap-5 h-fit">
      <button
        onClick={() => setOpenLinks(prev => !prev)}
        class="absolute block md:hidden top-4 right-4 text-yellow-300"
      >
        <FaSolidAngleDown size={20} class={`transition-all ${openLinks() ? "rotate-180" : "rotate-0"}`} />
      </button>

      <div class="flex flex-row md:flex-col gap-5 items-center">
        <div class="flex items-center justify-center">
          <img src="/images/headshot.png" width="100" height="100" class="size-30 md:size-40 rounded-3xl border border-slate-100/20" />
        </div>
        <div class="flex flex-col gap-3 items-start md:items-center">
          <h1 class="text-2xl md:text-3xl font-semibold text-nowrap">Simeon Dunn</h1>
          <p class="bg-slate-500/40 text-gray-300 text-xs text-center p-1 px-3 rounded-lg w-fit">Full Stack Developer</p>
        </div>
      </div>

      <div
        class={`transition-all duration-300 overflow-hidden ${openLinks() ? "max-h-[500px]" : "max-h-0"} md:max-h-fit`}
      >
        <div class="flex flex-col gap-4 border-t border-slate-100/20 py-5 ">
          <PersonalLink
            title="email"
            name="1simeondunn@gmail.com"
            href="mailto:1simeondunn@gmail.com"
            icon={<FiMail size="24" />}
          />
          <PersonalLink
            title="github"
            name="sime-time"
            href="https://github.com/sime-time"
            icon={<AiFillGithub size="24" />}
          />
          <PersonalLink
            title="linkedin"
            name="Simeon Dunn"
            href="https://www.linkedin.com/in/simeondunn/"
            icon={<AiFillLinkedin size="24" />}
          />
          <PersonalLink
            title="location"
            name="Indianapolis, IN, USA"
            icon={<IoLocationOutline size="24" />}
          />
        </div>
      </div>
    </section>
  );
}
