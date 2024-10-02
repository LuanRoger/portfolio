import Link from "../link";
import {
  DiscordLogo,
  DotnetIcon,
  ElectronIcon,
  FlutterIcon,
  ReactIcon,
} from "../svg-icons";

export default function AboutSection() {
  return (
    <section id="about" className="space-y-2">
      <h2 className="text-xl font-bold">About Me</h2>
      <p>
        Hello there! I'm Luan Roger, a software engineer and full-stack
        developer based on Brazil 🇧🇷. Currently, I'm working at{" "}
        <Link href="https://www.aramis.com.br">
          <DiscordLogo className="scale-95 inline-block" /> Aramis
        </Link>{" "}
        as Software Engineer. I also provide development services for
        companies and individuals{" "}
        <small>
          <a href="mailto:luanroger.dev@gmail.com">(contact-me)</a>
        </small>
        .
        <br />
        In my spare time, I create and maintain open-source projects using{" "}
        <ReactIcon className="inline-block w-5 h-5 fill-foreground" /> React,{" "}
        <ElectronIcon className="inline-block w-5 h-5 fill-foreground" />{" "}
        Electron,{" "}
        <DotnetIcon className="inline-block w-5 h-5 fill-foreground" /> .NET
        (C#/ASP.NET),{" "}
        <FlutterIcon className="inline-block w-5 h-5 fill-foreground" />{" "}
        Flutter, and other technologies for my GitHub and also, write articles
        and tutorials about programming in my blog.
      </p>
    </section>
  );
}
