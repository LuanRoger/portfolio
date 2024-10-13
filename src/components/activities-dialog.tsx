import Link from "next/link";
import IconText from "./icon-text";
import OnlinePresence from "./online-presence";
import SpotifyCurrentPlayingBadge from "./spotify-current-playing-badge";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { IconRocket } from "@tabler/icons-react";
import OfflinePresence from "./offline-presence";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { Skeleton } from "./ui/skeleton";

export default async function ActivitiesDialog() {
  const titlesDefaultClasses = "font-mono text-sm text-gray-400 opacity-65";

  const currentPlayingInfo = await getSpotifyCurrentPlaying();

  const isOnline = currentPlayingInfo.is_playing;
  const statusMessage = isOnline
    ? "I'm online! Reach me out 👋"
    : "I'll be back later, but in the meantime, send me a message.";

  return (
    <Popover>
      <PopoverTrigger>
        {isOnline ? <OnlinePresence /> : <OfflinePresence />}
      </PopoverTrigger>
      <PopoverContent
        className="max-w-72 flex flex-col items-center gap-2 text-gra"
        side="left"
      >
        {isOnline && (
          <>
            <IconText
              icon={
                <IconRocket size={20} color="#9ca3af" className="opacity-65" />
              }
              text="Activities"
              textClassName={`${titlesDefaultClasses} uppercase text-sm`}
            />
            <SpotifyCurrentPlayingBadge
              title="Listening to"
              spotifyInfo={currentPlayingInfo}
            />
            <Separator />
          </>
        )}

        <h1 className={titlesDefaultClasses}>{statusMessage}</h1>
        <Button variant={"ghost"}>
          <Link href="#contact">Send a message</Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export function ActivitiesDialogLoading() {
  return (
    <Skeleton className="w-20 h-6 rounded-full" />
  );
}