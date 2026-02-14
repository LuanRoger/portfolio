import { cacheLife } from "next/cache";
import { getCurrentAcordActivity } from "@/app/actions/acord";
import {
  getLastGamePlayed,
  getRetroachievementsUserProfile,
} from "@/app/actions/retroachievements";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { hoursSince } from "@/utils/time";
import AcordActivityIsland from "./acord-activity-island";
import Dot from "./dot";
import SpotifyCurrentPlayingIsland from "./spotify-current-playing-island";

export default async function ActivitiesDialog() {
  "use cache";
  cacheLife("minutes");

  const titlesDefaultClasses = "font-mono text-sm text-gray-400 opacity-65";

  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const currentAcordActivityInfo = await getCurrentAcordActivity();
  const retroachievementsUserProfile = await getRetroachievementsUserProfile();
  const lastGamePlayedInfo = await getLastGamePlayed();

  const isSpotifyPlaying = currentPlayingInfo?.isPlaying;
  const isAcordActivity = !!currentAcordActivityInfo;
  const hoursSinceLastRetroachievementsPlay = hoursSince(
    lastGamePlayedInfo.lastPlayed
  );
  const isRetroachievementsActive = hoursSinceLastRetroachievementsPlay < 1;

  return (
    <div className="inset-ring inset-ring-border inset-shadow-sm flex min-w-56 flex-col items-center rounded-md border-border bg-primary/30 p-1 shadow-2xs">
      <ActivityDialogHeader />
      <div className="size-full overflow-clip rounded-b-md">
        {isSpotifyPlaying && (
          <SpotifyCurrentPlayingIsland spotifyInfo={currentPlayingInfo} />
        )}
        {isAcordActivity && currentAcordActivityInfo && (
          <AcordActivityIsland acordActivity={currentAcordActivityInfo} />
        )}
      </div>
    </div>
  );
}

function ActivityDialogHeader() {
  return (
    <div className="inset-shadow-green-700 inset-shadow-xs flex w-full items-center justify-center gap-1 rounded-t-md bg-green-500 p-1 font-semibold text-sm text-white">
      <Dot animate />
      online
    </div>
  );
}
