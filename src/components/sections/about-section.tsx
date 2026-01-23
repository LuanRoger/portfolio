import CodingStatsCollapser from "../coding-stats-collapser";
import Link from "../link";
import {
  AramisLogo,
  DotnetIcon,
  ElectronIcon,
  FlutterIcon,
  NextJSIcon,
  ReactIcon,
  RustIcon,
} from "../svg-icons";

export default function AboutSection() {
  return (
    <section id="about" className="space-y-2">
      <h2 className="text-xl font-bold">About Me</h2>
      <p>
        I&apos;m Luan Roger, a software engineer and full-stack developer based
        in Brazil 🇧🇷. I currently work as a Software Engineer at{" "}
        <Link href="https://www.aramis.com.br">
          <AramisLogo className="inline-block scale-95" /> Aramis
        </Link>
        , while pursuing my Bachelor&apos;s degree in Software Engineering at
        UFC (Universidade Federal do Ceará).
        <br />I actively contribute to the open-source community, developing and
        maintaining projects with{" "}
        <NextJSIcon className="fill-foreground inline-block h-5 w-5" /> Next.js,{" "}
        <ElectronIcon className="fill-foreground inline-block h-5 w-5" />{" "}
        Electron and other modern technologies. In parallel, I am expanding my
        expertise in{" "}
        <RustIcon className="fill-foreground inline-block h-5 w-5" /> Rust and
        regularly share my knowledge through technical articles and tutorials
        published on my blog.
        <br />
        Beyond coding, I often play some RPGs, particularly, the Final Fantasy
        series, Chrono Trigger, and The Legend of Zelda. I&apos;m continually
        seeking new challenges and opportunities to expand my expertise while
        contributing to the developer community.
      </p>
      <CodingStatsCollapser />
    </section>
  );
}
