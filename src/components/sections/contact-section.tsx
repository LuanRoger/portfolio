import QuickContactForm from "../quick-contact-form";
import Link from "../link";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-2">
      <h2 className="text-xl font-bold">Contact</h2>
      <p>
        You can reach me out at{" "}
        <Link href="mailto:luanroger.dev@gmail.com">
          luanroger.dev@gmail.com
        </Link>
        , or send me a quick message using the form below:
      </p>
      <div className="p-4 border border-border rounded-md space-y-2">
        <QuickContactForm />
      </div>
    </section>
  );
}
