import RootLayout from "./layouts/RootLayout";
import { Switch, Match } from "solid-js";
import { useNav, NavPage } from "./context/NavContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "./app.css";

export default function App() {
  const { page } = useNav();

  return (
    <RootLayout>
      <Switch fallback={<div>Not Found</div>}>
        <Match when={page() === NavPage.Home}>
          <Home />
        </Match>
        <Match when={page() === NavPage.Contact}>
          <Contact />
        </Match>
        <Match when={page() === NavPage.Portfolio}>
          <Portfolio />
        </Match>
      </Switch>
    </RootLayout>
  );
}
