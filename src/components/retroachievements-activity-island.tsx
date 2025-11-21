import retroachievementsLogo from "@/app/images/retroachievements.svg";
import ActivityIsland from "./activity-island";
import {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";

interface RetroachievementsActivityIslandProps {
  lastGamePlayedInfo: LastPlayedGame;
  userProfile: RetroachievementsUserProfile;
}

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
      title={title}
      description={richPresenceMsg}
      activityDescription={details}
      imageSrc={imageBoxArt}
      imageAlt={imageTitle}
      iconSrc={retroachievementsLogo}
      iconAlt={"Retroachievements Logo"}
      href={retroachievementsUrl}
      accentColor={"#ffcc00"}
    />
  );
}
