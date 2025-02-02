import RootLayout from "./layouts/RootLayout";
import { Switch, Match } from "solid-js";
import { useNav, NavPage } from "./context/NavContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./app.css";

export default function App() {
  const { page } = useNav();

  return (
    <RootLayout>
      <Switch fallback={<div>Not Found</div>}>
        <Match when={page() === NavPage.About}>
          <About />
        </Match>
        <Match when={page() === NavPage.Contact}>
          <Contact />
        </Match>
        <Match when={page() === NavPage.Portfolio}>
          <Portfolio />
        </Match>
        <Match when={page() === NavPage.Resume}>
          <Resume />
        </Match>
      </Switch>
    </RootLayout>
  );
}
