import Link from "../link";
import {
  AramisLogo,
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
        Hello there! I&apos;m Luan Roger, a software engineer, full-stack
        developer and student based in Brazil 🇧🇷. Currently, I&apos;m working at{" "}
        <Link href="https://www.aramis.com.br">
          <AramisLogo className="scale-95 inline-block" /> Aramis
        </Link>{" "}
        as Software Engineer while studying Software Engineering at UFC
        (Universidade Federal do Ceará).
        <br />
        In my spare time, I create and maintain open-source projects using{" "}
        <ReactIcon className="inline-block w-5 h-5 fill-foreground" /> React,{" "}
        <ElectronIcon className="inline-block w-5 h-5 fill-foreground" />{" "}
        Electron,{" "}
        <DotnetIcon className="inline-block w-5 h-5 fill-foreground" /> .NET
        (C#/ASP.NET),{" "}
        <FlutterIcon className="inline-block w-5 h-5 fill-foreground" />{" "}
        Flutter, and other technologies for my GitHub. I also write articles and
        tutorials about programming on my blog.
        <br />I love playing games, especially RPGs—my favorites include the
        Final Fantasy series, Chrono Trigger and The Legend of Zelda. I&apos;m
        always looking for new challenges and opportunities to learn and help
        the community.
      </p>
    </section>
  );
}
