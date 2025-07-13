import Image from "next/image";
import Link from "../link";
import ScrollTopLink from "../scroll-top-link";
import BadgeMarquee from "./badge-marquee";
import LRLogo from "~/public/images/lr-logo.png";

export default function FooterSection() {
  return (
    <footer className="flex w-full flex-col space-y-2">
      <div className="flex flex-row justify-evenly">
        <Link
          href="https://linkedin.com/in/luan-roger"
          isExternal
          className="text-muted-foreground"
        >
          <h2>LinkedIn</h2>
        </Link>
        <Link
          href="https://github.com/LuanRoger"
          isExternal
          className="text-muted-foreground"
        >
          <h2>GitHub</h2>
        </Link>
        <Link
          href="https://discordapp.com/users/226491187463192576"
          isExternal
          className="text-muted-foreground"
        >
          <h2>Discord</h2>
        </Link>
        <Link
          href="https://blog.luanroger.dev"
          isExternal
          className="text-muted-foreground"
        >
          <h2>LR Tech Blog</h2>
        </Link>
      </div>
      <div className="mx-4 flex flex-row items-center justify-between">
        <ScrollTopLink className="self-end" />
        <Image
          src={LRLogo}
          alt="LR Logo"
          width={50}
          height={50}
          className="opacity-55"
        />
      </div>
      <BadgeMarquee />
    </footer>
  );
}
