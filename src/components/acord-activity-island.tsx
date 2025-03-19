import { AcordCurrentActivity } from "@/types/acord-current-activity";
import vsCodeLogo from "@/app/images/vscode.svg";
import ActivityIsland from "./activity-island";

interface AcordActivityIslandProps {
  acordActivity: AcordCurrentActivity;
}

export default function AcordActivityIsland({
  acordActivity,
}: AcordActivityIslandProps) {
  const { activity, details, caption, environment, imageUrl, color } =
    acordActivity;

  return (
    <ActivityIsland
      title={caption}
      description={environment}
      activityDescription={details}
      imageSrc={imageUrl}
      imageAlt={`${activity} activity image`}
      iconSrc={vsCodeLogo}
      iconAlt={"Visual Studio Code Logo"}
      accentColor={color}
    />
  );
}
