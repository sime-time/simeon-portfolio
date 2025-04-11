import { For } from "solid-js";

interface Skill {
  name: string;
  href: string;
  imgSrc: string;
}

const skills: Skill[] = [
  {
    name: "node.js",
    href: "https://nodejs.org/en",
    imgSrc: "/images/skills/nodejs.png"
  },
  {
    name: "typescript",
    href: "https://www.typescriptlang.org/",
    imgSrc: "/images/skills/typescript.png"
  },
  {
    name: "sql",
    href: "https://www.postgresql.org/",
    imgSrc: "/images/skills/postgres.png"
  },
  {
    name: "css",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    imgSrc: "/images/skills/css.png"
  },
  {
    name: "html",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    imgSrc: "/images/skills/html.png"
  },
]

export default function Skills() {
  return (
    <section class="flex flex-col gap-3">
      <h2 class="text-2xl font-semibold">Languages</h2>
      <div class="grid grid-cols-3 md:grid-cols-5 gap-3">
        <For each={skills}>
          {(skill) => (
            <div class="flex flex-col gap-2 items-center justify-center w-fit cursor-pointer">
              <a href={skill.href} target="_blank">
                <img src={skill.imgSrc} class="transition-transform duration-300 hover:scale-110" height={128} width={128} alt={skill.name} />
              </a>
              <p class="opacity-70">{skill.name}</p>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
