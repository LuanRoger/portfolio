import retroachievementsLogo from "@/app/images/retroachievements.svg";
import ActivityIsland from "./activity-island";
import { LastPlayedGame } from "@/types/retroachievements";

interface RetroachievementsActivityIslandProps {
  lastGamePlayedInfo: LastPlayedGame;
}

export default function RetroachievementsActivityIsland({
  lastGamePlayedInfo,
}: RetroachievementsActivityIslandProps) {
  const { title, numAchieved, achievementsTotal, imageBoxArt, imageTitle } =
    lastGamePlayedInfo;
  const description = `Got ${numAchieved} out of ${achievementsTotal} achievements`;
  const details = `Playing on Retroachievements`;

  return (
    <ActivityIsland
      title={title}
      description={description}
      activityDescription={details}
      imageSrc={imageBoxArt}
      imageAlt={imageTitle}
      iconSrc={retroachievementsLogo}
      iconAlt={"Retroachievements Logo"}
      accentColor={"#ffcc00"}
    />
  );
}
