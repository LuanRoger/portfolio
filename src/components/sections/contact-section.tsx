import Link from "../link";

export default function ContactSection() {
  return (
    <section className="space-y-2" id="contact">
      <h2 className="font-bold text-xl">Contact</h2>
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
