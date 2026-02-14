import type { AcordCurrentActivity } from "@/types/acord-current-activity";
import type {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";
import type { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify-current-playing-track-info";
import AcordActivityIslandSection from "./acord-activity-island-section";
import ActivityDialogHeader from "./header";
import RetroachievementsActivityIslandSection from "./retroachievements-activity-island-section";
import SpotifyCurrentPlayingIslandSection from "./spotify-current-playing-island-section";

type ContentProps = {
  spotifyPlayingInfo?: SpotifyCurrentPlayingTrackInfo;
  acordActivityInfo?: AcordCurrentActivity;
  retroachievementsActivityInfo?: {
    userProfileInfo: RetroachievementsUserProfile;
    lastGamePlayedInfo: LastPlayedGame;
  };
};

export default function Content({
  spotifyPlayingInfo,
  acordActivityInfo,
  retroachievementsActivityInfo,
}: ContentProps) {
  return (
    <div className="inset-ring inset-ring-border inset-shadow-sm flex min-w-56 flex-col items-center rounded-md border-border bg-primary/10 p-1 shadow-2xs">
      <ActivityDialogHeader />
      <div className="size-full overflow-clip rounded-b-md">
        {spotifyPlayingInfo && (
          <SpotifyCurrentPlayingIslandSection
            spotifyInfo={spotifyPlayingInfo}
          />
        )}
        {acordActivityInfo && (
          <AcordActivityIslandSection acordActivity={acordActivityInfo} />
        )}
        {retroachievementsActivityInfo && (
          <RetroachievementsActivityIslandSection
            lastGamePlayedInfo={
              retroachievementsActivityInfo.lastGamePlayedInfo
            }
            userProfile={retroachievementsActivityInfo.userProfileInfo}
          />
        )}
      </div>
    </div>
  );
}
