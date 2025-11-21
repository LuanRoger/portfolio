import Marquee from "react-fast-marquee";
import Image from "next/image";
import FinalFantasyBadge from "~/public/images/finalfantasy.gif";
import BrasilFlagBadge from "~/public/images/brasil.gif";
import ChronoBadge from "~/public/images/chrono.png";
import ZeldaBadge from "~/public/images/zelda.png";
import CssValid from "~/public/images/cssvalid.gif";
import IloveMusic from "~/public/images/ilovemusic.png";
import MozillaBadge from "~/public/images/mozilla.gif";
import Mp3LoveBadge from "~/public/images/mp3love.gif";
import NotepadBadge from "~/public/images/notepad.gif";

export default function BadgeMarquee() {
  return (
    <div className="opacity-80">
      <Marquee speed={20} className="gap-2">
        <span className="flex gap-2">
          <Image
            src={FinalFantasyBadge}
            alt="Final Fantasy Badge"
            width={80}
            height={15}
          />
          <Image
            src={BrasilFlagBadge}
            alt="Brasil Badge"
            width={80}
            height={15}
          />
          <Image
            src={ChronoBadge}
            alt="Chrono Trigger Badge"
            width={80}
            height={15}
          />
          <Image src={ZeldaBadge} alt="Zelda Badge" width={80} height={15} />
          <Image src={CssValid} alt="CSS Valid Badge" width={80} height={15} />
          <Image
            src={IloveMusic}
            alt="I Love Music Badge"
            width={80}
            height={15}
            unoptimized
          />
          <Image
            src={MozillaBadge}
            alt="Mozilla Badge"
            width={80}
            height={15}
          />
          <Image
            src={Mp3LoveBadge}
            alt="Mp3 Love Badge"
            width={80}
            height={15}
          />
          <Image
            src={NotepadBadge}
            alt="Notepad Badge"
            width={80}
            height={15}
          />
        </span>
      </Marquee>
    </div>
  );
}
