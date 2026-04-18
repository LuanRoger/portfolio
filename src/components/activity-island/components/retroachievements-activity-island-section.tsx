import { SiRetroachievements } from "@icons-pack/react-simple-icons";
import type {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";
import ActivityIsland from "../../activity-island";

type RetroachievementsActivityIslandSectionProps = {
  lastGamePlayedInfo: LastPlayedGame;
  userProfile: RetroachievementsUserProfile;
};

export default function RetroachievementsActivityIslandSection({
  lastGamePlayedInfo,
  userProfile,
}: RetroachievementsActivityIslandSectionProps) {
  const { title, consoleName, imageBoxArt, imageTitle } = lastGamePlayedInfo;
  const { richPresenceMsg } = userProfile;
  const details = `Playing on ${consoleName}`;
  const retroachievementsUrl = `${process.env.NEXT_PUBLIC_RETROACHIEVEMENTS_BASE_URL}/game/${lastGamePlayedInfo.gameId}`;

  return (
    <ActivityIsland
      accentColor={"#ffcc00"}
      activityDescription={details}
      description={richPresenceMsg}
      href={retroachievementsUrl}
      icon={<SiRetroachievements size={16} />}
      imageAlt={imageTitle}
      imageSrc={imageBoxArt}
      title={title}
    />
  );
}
