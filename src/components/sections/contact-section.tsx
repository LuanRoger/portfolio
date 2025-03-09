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
        , or keep in touch with me on:
      </p>
    </section>
  );
}
