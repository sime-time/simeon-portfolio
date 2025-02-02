import { ParentProps } from "solid-js";
import PersonalCard from "../components/PersonalCard";

export default function RootLayout(props: ParentProps) {
  return (
    <main class=" flex flex-col md:flex-row gap-5 md:gap-8 max-w-7xl py-8 mb-14 px-4 md:px-0 m-auto">
      <PersonalCard />
      {props.children}
    </main>
  );
}
