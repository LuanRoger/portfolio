import vsCodeLogo from "@/app/images/vscode.svg";
import type { AcordCurrentActivity } from "@/types/acord-current-activity";
import ActivityIsland from "../../activity-island";

type AcordActivityIslandSectionProps = {
  acordActivity: AcordCurrentActivity;
};

export default function AcordActivityIslandSection({
  acordActivity,
}: AcordActivityIslandSectionProps) {
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
