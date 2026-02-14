import { cacheLife } from "next/cache";
import { getCurrentAcordActivity } from "@/app/actions/acord";
import {
  getLastGamePlayed,
  getRetroachievementsUserProfile,
} from "@/app/actions/retroachievements";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { hoursSince } from "@/utils/time";
import Content from "./components/content";

export default async function ActivitiesIsland() {
  "use cache";
  cacheLife("minutes");

  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const currentAcordActivityInfo = await getCurrentAcordActivity();
  const retroachievementsUserProfile = await getRetroachievementsUserProfile();
  const lastGamePlayedInfo = await getLastGamePlayed();

  const isSpotifyPlaying = currentPlayingInfo?.isPlaying;
  const isAcordActivity = Boolean(currentAcordActivityInfo);
  const hoursSinceLastRetroachievementsPlay = hoursSince(
    lastGamePlayedInfo.lastPlayed
  );
  const isRetroachievementsActive = hoursSinceLastRetroachievementsPlay < 1;

  return (
    <Content
      acordActivityInfo={isAcordActivity ? currentAcordActivityInfo : undefined}
      retroachievementsActivityInfo={
        isRetroachievementsActive
          ? {
              userProfileInfo: retroachievementsUserProfile,
              lastGamePlayedInfo,
            }
          : undefined
      }
      spotifyPlayingInfo={isSpotifyPlaying ? currentPlayingInfo : undefined}
    />
  );
}
