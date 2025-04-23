import { createSignal, Show } from "solid-js";
import PageLayout from "../layouts/PageLayout";
import { ContactSchema, ContactType } from "../util/contactValidation";
//import { phoneAutoFormat } from "../util/phoneAutoFormat";
import * as z from "zod";

export default function Contact() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  //const [phone, setPhone] = createSignal("");
  //const [workType, setWorkType] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [error, setError] = createSignal("");
  const [successMsg, setSuccessMsg] = createSignal("");

  // convert json object to uri component for netlify form submission
  const encode = (data: any) => {
    const encodedURL = Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
    console.log(encodedURL);
    return encodedURL;
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    setError("");

    // do input validation with zod before sending to netlify forms
    try {
      const contactFormData: ContactType = ContactSchema.parse({
        name: name(),
        email: email(),
        //phone: phone(),
        //workType: workType(),
        message: message(),
      });

      fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...contactFormData })
      })
        .then(() => setSuccessMsg("Successfully submitted form!"))


    } catch (err) {
      console.error(err);
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
      }
    }
  };

  return (
    <PageLayout title="Let's Talk">
      <form
        name="contact"
        method="post"
        onSubmit={handleSubmit}
        class="flex flex-col md:grid md:grid-cols-2 gap-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="contact-input">
          <label for="name" class="label label-text">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            class="input contact-bordered"
            value={name()}
            placeholder="Full name"
            onInput={(e) => setName(e.currentTarget.value)}
          />
        </div>

        <div class="contact-input">
          <label for="email" class="label label-text">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            class="input contact-bordered"
            value={email()}
            placeholder="Email address"
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
        </div>

        {/*
        <div class="contact-input">
          <label for="workType" class="label label-text">Type of work</label>
          <select
            id="workType"
            name="workType[]"
            class="select contact-bordered"
            onInput={(e) => setWorkType(e.currentTarget.value)}
          >
            <option value="" disabled selected>-- Select --</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full Stack Development</option>
          </select>
        </div>

        <div class="contact-input">
          <label for="phone" class="label label-text">Phone (optional)</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            class="input contact-bordered"
            value={phone()}
            placeholder="Phone number"
            maxLength={14}
            onInput={(e) => {
              let phone = phoneAutoFormat(e.currentTarget.value);
              setPhone(phone);
            }}
          />
        </div>
        */}

        <div class="col-span-2 contact-input">
          <label for="message" class="label label-text">Message</label>
          <textarea
            id="message"
            name="message"
            class="textarea contact-bordered"
            value={message()}
            placeholder="Your idea, problem, or question..."
            onInput={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
        </div>

        <div class="col-span-2">
          <Show when={error()}>
            <p class="text-red-400 text-start w-full mb-4">{error()}</p>
          </Show>
          <Show when={successMsg()} fallback={
            <button type="submit" class="p-3 rounded-lg w-full bg-amber-400 text-slate-900 font-semibold cursor-pointer">Submit</button>
          }>
            <p class="text-green-400 text-start w-full text-lg">{successMsg()}</p>
          </Show>
        </div>

      </form>
    </PageLayout>
  );
}
