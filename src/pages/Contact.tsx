import { createSignal } from "solid-js";
import PageLayout from "../layouts/PageLayout";

export default function Contact() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name,
          email,
        }).toString(),
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        // Handle errors
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <PageLayout title="Contact">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        class="grid grid-cols-2"
      >
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" name="name" class="border" />
        </div>

        <div>
          <label for="email">Email</label>
          <input id="email" type="email" name="email" class="border" />
        </div>

        <div>
          <label for="phone">Phone</label>
          <input id="phone" type="tel" name="phone" class="border" />
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
          <label for="details">More Details</label>
          <textarea id="details" name="details" class="border"></textarea>
        </div>

        <button type="submit" class="border p-3 rounded-lg">Send</button>
      </form>
    </PageLayout>
  );
}
