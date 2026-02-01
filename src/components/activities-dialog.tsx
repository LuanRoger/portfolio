import { IconRocket } from "@tabler/icons-react";
import { cacheLife } from "next/cache";
import { getCurrentAcordActivity } from "@/app/actions/acord";
import {
  getLastGamePlayed,
  getRetroachievementsUserProfile,
} from "@/app/actions/retroachievements";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { hoursSince } from "@/utils/time";
import AcordActivityIsland from "./acord-activity-island";
import IconText from "./icon-text";
import OfflinePresence from "./offline-presence";
import OnlinePresence from "./online-presence";
import RetroachievementsActivityIsland from "./retroachievements-activity-island";
import SpotifyCurrentPlayingIsland from "./spotify-current-playing-island";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

export default async function ActivitiesDialog() {
  "use cache";
  cacheLife("minutes");

  const titlesDefaultClasses = "font-mono text-sm text-gray-400 opacity-65";

  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const currentAcordActivityInfo = await getCurrentAcordActivity();
  const retroachievementsUserProfile = await getRetroachievementsUserProfile();
  const lastGamePlayedInfo = await getLastGamePlayed();

  const isSpotifyPlaying = currentPlayingInfo && currentPlayingInfo?.isPlaying;
  const isAcordActivity = !!currentAcordActivityInfo;
  const hoursSinceLastRetroachievementsPlay = hoursSince(
    lastGamePlayedInfo.lastPlayed
  );
  const isRetroachievementsActive = hoursSinceLastRetroachievementsPlay < 1;
  const isOnline =
    isSpotifyPlaying || isAcordActivity || isRetroachievementsActive;

  const statusMessage = isOnline
    ? "I'm online! Probably doing something awesome 🚀"
    : "I'll be back later ⏳...";

  return (
    <Popover>
      <PopoverTrigger>
        {isOnline ? <OnlinePresence /> : <OfflinePresence />}
      </PopoverTrigger>
      <PopoverContent
        className="flex max-w-72 flex-col items-center gap-2 text-gra"
        side="left"
      >
        {isOnline && (
          <>
            <IconText
              icon={
                <IconRocket className="opacity-65" color="#9ca3af" size={20} />
              }
              text="Activities"
              textClassName={`${titlesDefaultClasses} uppercase text-sm`}
            />
            {isSpotifyPlaying && (
              <SpotifyCurrentPlayingIsland
                spotifyInfo={currentPlayingInfo}
                title="Listening to"
              />
            )}
            {isAcordActivity && currentAcordActivityInfo && (
              <AcordActivityIsland acordActivity={currentAcordActivityInfo} />
            )}
            {isRetroachievementsActive && (
              <RetroachievementsActivityIsland
                lastGamePlayedInfo={lastGamePlayedInfo}
                userProfile={retroachievementsUserProfile}
              />
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
  return <Skeleton className="h-6 w-20 rounded-full" />;
}
