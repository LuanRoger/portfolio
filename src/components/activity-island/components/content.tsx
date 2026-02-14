"use client";

import { motion } from "motion/react";
import type { AcordCurrentActivity } from "@/types/acord-current-activity";
import type { Presence } from "@/types/presence";
import type {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";
import type { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify-current-playing-track-info";
import { cn } from "@/utils/shadcn-utils";
import AcordActivityIslandSection from "./acord-activity-island-section";
import ActivityDialogHeader from "./header";
import RetroachievementsActivityIslandSection from "./retroachievements-activity-island-section";
import SpotifyCurrentPlayingIslandSection from "./spotify-current-playing-island-section";

type ContentProps = {
  status: Presence;
  spotifyPlayingInfo?: SpotifyCurrentPlayingTrackInfo;
  acordActivityInfo?: AcordCurrentActivity;
  retroachievementsActivityInfo?: {
    userProfileInfo: RetroachievementsUserProfile;
    lastGamePlayedInfo: LastPlayedGame;
  };
  className?: string;
};

export default function Content({
  status,
  spotifyPlayingInfo,
  acordActivityInfo,
  retroachievementsActivityInfo,
  className,
}: ContentProps) {
  return (
    <motion.div
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className={cn(
        "inset-ring inset-ring-border inset-shadow-sm flex h-fit flex-col items-center rounded-md border-border p-1 shadow-2xs",
        {
          "w-full md:w-52": status === "online",
          "": status === "offline",
        },
        className,
      )}
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
    >
      <ActivityDialogHeader status={status} />
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
    </motion.div>
  );
}
