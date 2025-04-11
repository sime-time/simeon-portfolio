import { createEffect, onCleanup } from "solid-js";
import { useNav, NavPage } from "../context/NavContext";

export default function TidyCal() {
  const { page } = useNav();

  createEffect(() => {
    const script = document.createElement("script");
    console.log("PAGE:", page());
    if (page() === NavPage.Contact) {
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
    onCleanup(() => {
      if (script) {
        script.remove();
      }
    });
  });

  return (
    <div>
      <div class="tidycal-embed" data-path="simedunn01/15-minute-meeting" />
    </div>
  );
}
