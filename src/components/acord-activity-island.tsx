import vsCodeLogo from "@/app/images/vscode.svg";
import type { AcordCurrentActivity } from "@/types/acord-current-activity";
import ActivityIsland from "./activity-island";

type AcordActivityIslandProps = {
  acordActivity: AcordCurrentActivity;
};

export default function AcordActivityIsland({
  acordActivity,
}: AcordActivityIslandProps) {
  const { activity, details, caption, environment, imageUrl, color } =
    acordActivity;

  return (
    <ActivityIsland
      accentColor={color}
      activityDescription={details}
      description={environment}
      iconAlt={"Visual Studio Code Logo"}
      iconSrc={vsCodeLogo}
      imageAlt={`${activity} activity image`}
      imageSrc={imageUrl}
      title={caption}
    />
  );
}
