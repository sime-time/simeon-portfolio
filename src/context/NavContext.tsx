import { createSignal, createContext, useContext, ParentProps } from "solid-js";
import type { Accessor, Setter } from "solid-js";

export enum NavPage {
  About,
  Contact,
  Portfolio,
  Resume,
}

type NavContextType = {
  page: Accessor<NavPage>;
  setPage: Setter<NavPage>;
}

const NavContext = createContext<NavContextType>();

export function NavProvider(props: ParentProps) {
  const [page, setPage] = createSignal<NavPage>(NavPage.About);

  return (
    <NavContext.Provider value={{ page, setPage }}>
      {props.children}
    </NavContext.Provider>
  );
}

export function useNav(): NavContextType {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
}
