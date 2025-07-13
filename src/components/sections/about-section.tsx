import CodingStatsCollapser from "../coding-stats-collapser";
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
          <AramisLogo className="inline-block scale-95" /> Aramis
        </Link>{" "}
        as Software Engineer while studying Software Engineering at UFC
        (Universidade Federal do Ceará).
        <br />
        In my spare time, I create and maintain open-source projects using{" "}
        <ReactIcon className="fill-foreground inline-block h-5 w-5" /> React,{" "}
        <ElectronIcon className="fill-foreground inline-block h-5 w-5" />{" "}
        Electron,{" "}
        <DotnetIcon className="fill-foreground inline-block h-5 w-5" /> .NET
        (C#/ASP.NET),{" "}
        <FlutterIcon className="fill-foreground inline-block h-5 w-5" />{" "}
        Flutter, and other technologies for my GitHub. I also write articles and
        tutorials about programming on my blog.
        <br />I love playing games, especially RPGs—my favorites include the
        Final Fantasy series, Chrono Trigger and The Legend of Zelda. I&apos;m
        always looking for new challenges and opportunities to learn and help
        the community.
      </p>
      <CodingStatsCollapser />
    </section>
  );
}
