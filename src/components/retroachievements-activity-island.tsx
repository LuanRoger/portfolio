import retroachievementsLogo from "@/app/images/retroachievements.svg";
import type {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";
import ActivityIsland from "./activity-island";

type RetroachievementsActivityIslandProps = {
  lastGamePlayedInfo: LastPlayedGame;
  userProfile: RetroachievementsUserProfile;
};

export default function RetroachievementsActivityIsland({
  lastGamePlayedInfo,
  userProfile,
}: RetroachievementsActivityIslandProps) {
  const { title, consoleName, imageBoxArt, imageTitle } = lastGamePlayedInfo;
  const { richPresenceMsg } = userProfile;
  const details = `Playing on ${consoleName}`;
  const retroachievementsUrl = `${process.env.RETROACHIEVEMENTS_BASE_URL}/game/${lastGamePlayedInfo.gameId}`;

  return (
    <ActivityIsland
      accentColor={"#ffcc00"}
      activityDescription={details}
      description={richPresenceMsg}
      href={retroachievementsUrl}
      iconAlt={"Retroachievements Logo"}
      iconSrc={retroachievementsLogo}
      imageAlt={imageTitle}
      imageSrc={imageBoxArt}
      title={title}
    />
  );
}
