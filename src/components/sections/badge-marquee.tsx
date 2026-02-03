import Image from "next/image";
import Marquee from "react-fast-marquee";
import BrasilFlagBadge from "~/public/images/brasil.gif";
import ChronoBadge from "~/public/images/chrono.png";
import CssValid from "~/public/images/cssvalid.gif";
import FinalFantasyBadge from "~/public/images/finalfantasy.gif";
import IloveMusic from "~/public/images/ilovemusic.png";
import MozillaBadge from "~/public/images/mozilla.gif";
import Mp3LoveBadge from "~/public/images/mp3love.gif";
import NotepadBadge from "~/public/images/notepad.gif";
import ZeldaBadge from "~/public/images/zelda.png";

export default function BadgeMarquee() {
  return (
    <div className="opacity-80">
      <Marquee className="gap-2" speed={20}>
        <span className="flex gap-2">
          <Image
            alt="Final Fantasy Badge"
            height={15}
            src={FinalFantasyBadge}
            width={80}
          />
          <Image
            alt="Brasil Badge"
            height={15}
            src={BrasilFlagBadge}
            width={80}
          />
          <Image
            alt="Chrono Trigger Badge"
            height={15}
            src={ChronoBadge}
            width={80}
          />
          <Image alt="Zelda Badge" height={15} src={ZeldaBadge} width={80} />
          <Image alt="CSS Valid Badge" height={15} src={CssValid} width={80} />
          <Image
            alt="I Love Music Badge"
            height={15}
            src={IloveMusic}
            unoptimized
            width={80}
          />
          <Image
            alt="Mozilla Badge"
            height={15}
            src={MozillaBadge}
            width={80}
          />
          <Image
            alt="Mp3 Love Badge"
            height={15}
            src={Mp3LoveBadge}
            unoptimized
            width={80}
          />
          <Image
            alt="Notepad Badge"
            height={15}
            src={NotepadBadge}
            width={80}
          />
        </span>
      </Marquee>
    </div>
  );
}
