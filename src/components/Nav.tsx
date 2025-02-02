import { useNav, NavPage } from "../context/NavContext";

interface NavItemProps {
  label: string;
  navPage: NavPage;
}

function NavItem(props: NavItemProps) {
  const { page, setPage } = useNav();

  const active = (path: NavPage) =>
    path == page() ? "border-yellow-300" : "border-transparent hover:border-yellow-300";

  return (
    <li class={`border-b-2 ${active(props.navPage)} mx-1.5 sm:mx-6`}>
      <button onClick={() => setPage(props.navPage)} class="cursor-pointer">
        {props.label}
      </button>
    </li>
  );
}

export default function Nav() {
  return (
    <nav class="z-30 border border-slate-100/20 bg-slate-900 rounded-2xl p-1 fixed bottom-3 left-3 right-3 md:bottom-auto md:left-auto md:absolute md:top-3 md:right-3">
      <ul class="container flex items-center justify-center p-3">
        <NavItem label="About" navPage={NavPage.About} />
        <NavItem label="Resume" navPage={NavPage.Resume} />
        <NavItem label="Portfolio" navPage={NavPage.Portfolio} />
        <NavItem label="Contact" navPage={NavPage.Contact} />
      </ul>
    </nav>
  );
}
