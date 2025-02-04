import { For } from "solid-js";

interface Skill {
  name: string;
  href: string;
  imgSrc: string;
}

const skills: Skill[] = [
  {
    name: "expo",
    href: "https://expo.dev/",
    imgSrc: "/images/skills/0_expo.png"
  },
  {
    name: "react",
    href: "https://react.dev/",
    imgSrc: "/images/skills/1_react.png"
  },
  {
    name: "typescript",
    href: "https://www.typescriptlang.org/",
    imgSrc: "/images/skills/2_typescript.png"
  },
  {
    name: "tailwind",
    href: "https://tailwindcss.com/",
    imgSrc: "/images/skills/3_tailwind.png"
  },
  {
    name: "postgreSQL",
    href: "https://www.postgresql.org/",
    imgSrc: "/images/skills/4_postgres.png"
  },
  {
    name: "solid-js",
    href: "https://www.solidjs.com/",
    imgSrc: "/images/skills/5_solid-js.png"
  },
]

export default function Skills() {
  return (
    <section class="flex flex-col gap-3">
      <h2 class="text-2xl font-semibold">Skills & Tools</h2>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-5">
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
