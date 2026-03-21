import { cacheLife } from "next/cache";
import {
  getLastGamePlayed,
  getRetroachievementsUserProfile,
} from "@/app/actions/retroachievements";
import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import { hoursSince } from "@/utils/time";
import Content from "./components/content";

type ActivitiesIslandProps = {
  className?: string;
};

export default async function ActivitiesIsland({
  className,
}: ActivitiesIslandProps) {
  "use cache";
  cacheLife("minutes");

  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const retroachievementsUserProfile = await getRetroachievementsUserProfile();
  const lastGamePlayedInfo = await getLastGamePlayed();

  const isSpotifyPlaying = currentPlayingInfo?.isPlaying;
  const hoursSinceLastRetroachievementsPlay = hoursSince(
    lastGamePlayedInfo.lastPlayed
  );
  const isRetroachievementsActive = hoursSinceLastRetroachievementsPlay < 1;

  const isOnline = isSpotifyPlaying || isRetroachievementsActive;

  return (
    <Content
      className={className}
      retroachievementsActivityInfo={
        isRetroachievementsActive
          ? {
              userProfileInfo: retroachievementsUserProfile,
              lastGamePlayedInfo,
            }
          : undefined
      }
      spotifyPlayingInfo={isSpotifyPlaying ? currentPlayingInfo : undefined}
      status={isOnline ? "online" : "offline"}
    />
  );
}
