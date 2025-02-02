import PageLayout from "../layouts/PageLayout";
import { For } from "solid-js";

interface PortfolioItem {
  title: string;
  type: string;
  imgSrc: string;
  href: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Indy Boxing and Grappling",
    type: "Web App",
    imgSrc: "/images/ibg-logo.png",
    href: "https://indyboxingandgrappling.com",
  },
  {
    title: "College Carry",
    type: "Website",
    imgSrc: "/images/collegecarry.png",
    href: "https://collegecarry.com",
  },
  {
    title: "Fake Estate",
    type: "Mobile App",
    imgSrc: "/images/fake-estate.png",
    href: "https://github.com/sime-time/FakeEstate",
  },
];

export default function Portfolio() {
  return (
    <PageLayout title="Portfolio">
      <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <For each={portfolioItems}>
          {(item) => (
            <div class="flex flex-col gap-3">
              <a href={item.href} target="_blank" class="cursor-pointer border border-slate-100/20 rounded-2xl bg-white flex justify-center overflow-hidden">
                <img src={item.imgSrc} alt={item.title} class="w-fit rounded-2xl transition-transform duration-300 hover:scale-125 touch:active:scale-125" height={100} width={100} />
              </a>
              <div>
                <h3 class="text-lg">{item.title}</h3>
                <p class="text-md opacity-60">{item.type}</p>
              </div>
            </div>
          )}
        </For>
      </section>
    </PageLayout>
  );
}
