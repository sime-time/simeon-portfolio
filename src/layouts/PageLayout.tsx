import { JSX } from "solid-js"
import Nav from "../components/Nav";

interface PageLayoutProps {
  title: string;
  children?: JSX.Element;
}

export default function PageLayout(props: PageLayoutProps) {
  return (
    <section class="glass-container w-full p-7 flex flex-col gap-5">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl md:text-4xl font-semibold">{props.title}</h1>
        <Nav />
      </div>
      {props.children}
    </section>
  );
}
