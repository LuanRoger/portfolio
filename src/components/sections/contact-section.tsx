import Link from "../link";
import QuickContactForm from "../quick-contact-form";
import { GitHubIcon, LinkedInIcon } from "../svg-icons";

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
      <div className="p-4 border border-border rounded-md">
        <QuickContactForm />
      </div>
      <p>You can also find me on:</p>
      <div className="flex flex-row justify-evenly">
        <Link
          href="https://linkedin.com/in/luan-roger"
          target="_blank"
          className="text-muted-foreground"
        >
          <h2>LinkedIn</h2>
        </Link>
        <Link
          href="https://github.com/LuanRoger"
          target="_blank"
          className="text-muted-foreground"
        >
          <h2>GitHub</h2>
        </Link>
        <Link
          href="https://discordapp.com/users/226491187463192576"
          target="_blank"
          className="text-muted-foreground"
        >
          <h2>Discord</h2>
        </Link>
      </div>
    </section>
  );
}
