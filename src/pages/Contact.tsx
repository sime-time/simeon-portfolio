import { createSignal, Show } from "solid-js";
import PageLayout from "../layouts/PageLayout";
import { ContactSchema, ContactType } from "../util/contactValidation";
import { phoneAutoFormat } from "../util/phoneAutoFormat";
import * as z from "zod";

export default function Contact() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [error, setError] = createSignal("");

  // convert json object to uri component for netlify form submission
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    setError("");
    try {
      const contactFormData: ContactType = ContactSchema.parse({
        name: name(),
        email: email(),
        phone: phone(),
        message: message(),
      });

      fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(contactFormData)
      })
        .then(() => alert("Successfully submitted form!"))

    } catch (err) {
      console.error(err);
      if (err instanceof z.ZodError) {
        setError(err.message);
      }
    }
  };

  return (
    <PageLayout title="Contact">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        class="grid grid-cols-1 md:grid-cols-2"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            class="border"
            value={name()}
            placeholder="Full name"
            onInput={(e) => setName(e.currentTarget.value)}
          />
        </div>

        <div>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            class="border"
            value={email()}
            placeholder="Email address"
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
        </div>

        <div>
          <label for="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            class="border"
            value={phone()}
            placeholder="Phone number"
            maxLength={14}
            onInput={(e) => {
              let phone = phoneAutoFormat(e.currentTarget.value);
              setPhone(phone);
            }}
          />
        </div>

        <div>
          <p>Type of work</p>
          <div>
            <input type="radio" id="mobile-dev" name="work-type" value="mobile-dev" />
            <label for="mobile-dev">Mobile App Development</label><br />

            <input type="radio" id="web-dev" name="work-type" value="web-dev" />
            <label for="web-dev">Web Development</label><br />
          </div>
        </div>

        <div class="col-span-2">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            class="border"
            value={message()}
            placeholder="More details..."
            onInput={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
        </div>

        <div class="col-span-2">
          <Show when={error()}>
            <p class="text-red-400 text-start w-full">{error()}</p>
          </Show>
          <button type="submit" class="border p-3 rounded-lg w-full">Send</button>
        </div>

      </form>
    </PageLayout>
  );
}
