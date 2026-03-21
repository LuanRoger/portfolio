import Image from "next/image";
import LRLogo from "~/public/images/lr-logo.png";
import Link from "../link";
import ScrollTopLink from "../scroll-top-link";

export default function FooterSection() {
  return (
    <footer className="flex w-full flex-col gap-2">
      <div className="flex flex-row justify-evenly">
        <Link
          className="text-muted-foreground"
          href="https://linkedin.com/in/luan-roger"
          isExternal
        >
          <h2>LinkedIn</h2>
        </Link>
        <Link
          className="text-muted-foreground"
          href="https://github.com/LuanRoger"
          isExternal
        >
          <h2>GitHub</h2>
        </Link>
        <Link
          className="text-muted-foreground"
          href="https://discordapp.com/users/226491187463192576"
          isExternal
        >
          <h2>Discord</h2>
        </Link>
        <Link
          className="text-muted-foreground"
          href="https://blog.luanroger.dev"
          isExternal
        >
          <h2>LR Tech Blog</h2>
        </Link>
      </div>
      <div className="flex flex-row items-end justify-between">
        <ScrollTopLink />
        <Image
          alt="LR Logo"
          className="opacity-60"
          height={50}
          src={LRLogo}
          width={50}
        />
      </div>
    </footer>
  );
}
