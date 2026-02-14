import { cacheLife } from "next/cache";
import { getCurrentAcordActivity } from "@/app/actions/acord";
import {
  getLastGamePlayed,
  getRetroachievementsUserProfile,
} from "@/app/actions/retroachievements";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { hoursSince } from "@/utils/time";
import AcordActivityIslandSection from "./components/acord-activity-island-section";
import ActivityDialogHeader from "./components/header";
import RetroachievementsActivityIslandSection from "./components/retroachievements-activity-island-section";
import SpotifyCurrentPlayingIslandSection from "./components/spotify-current-playing-island-section";

export default async function ActivitiesIsland() {
  "use cache";
  cacheLife("minutes");

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
    <div className="inset-ring inset-ring-border inset-shadow-sm flex min-w-56 flex-col items-center rounded-md border-border bg-primary/10 p-1 shadow-2xs">
      <ActivityDialogHeader />
      <div className="size-full overflow-clip rounded-b-md">
        {isSpotifyPlaying && (
          <SpotifyCurrentPlayingIslandSection
            spotifyInfo={currentPlayingInfo}
          />
        )}
        {isAcordActivity && currentAcordActivityInfo && (
          <AcordActivityIslandSection
            acordActivity={currentAcordActivityInfo}
          />
        )}
        {isRetroachievementsActive && (
          <RetroachievementsActivityIslandSection
            lastGamePlayedInfo={lastGamePlayedInfo}
            userProfile={retroachievementsUserProfile}
          />
        )}
      </div>
    </div>
  );
}
