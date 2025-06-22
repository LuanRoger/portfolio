import IconText from "./icon-text";
import OnlinePresence from "./online-presence";
import SpotifyCurrentPlayingIsland from "./spotify-current-playing-island";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { IconRocket } from "@tabler/icons-react";
import OfflinePresence from "./offline-presence";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { Skeleton } from "./ui/skeleton";
import { getCurrentAcordActivity } from "@/app/actions/acord";
import AcordActivityIsland from "./acord-activity-island";

export default async function ActivitiesDialog() {
  const titlesDefaultClasses = "font-mono text-sm text-gray-400 opacity-65";

  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const currentAcordActivityInfo = await getCurrentAcordActivity();

  const isSpotifyPlaying = currentPlayingInfo?.isPlaying;
  const isAcordActivity = !!currentAcordActivityInfo;
  const isOnline = isSpotifyPlaying || isAcordActivity;

  const statusMessage = isOnline
    ? "I'm online! Probably doing something awesome 🚀"
    : "I'll be back later ⏳...";

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
            {isSpotifyPlaying && (
              <SpotifyCurrentPlayingIsland
                title="Listening to"
                spotifyInfo={currentPlayingInfo}
              />
            )}
            {currentAcordActivityInfo && (
              <AcordActivityIsland acordActivity={currentAcordActivityInfo} />
            )}
            <Separator />
          </>
        )}

        <h1 className={titlesDefaultClasses}>{statusMessage}</h1>
      </PopoverContent>
    </Popover>
  );
}

export function ActivitiesDialogLoading() {
  return <Skeleton className="w-20 h-6 rounded-full" />;
}
