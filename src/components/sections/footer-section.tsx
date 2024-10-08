import Link from "../link";
import BadgeMarquee from "./badge-marquee";

export default function FooterSection() {
  return (
    <footer className="space-y-2 w-full">
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
      <BadgeMarquee />
    </footer>
  );
}
