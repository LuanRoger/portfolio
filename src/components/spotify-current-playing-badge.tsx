"use client";

import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import AnimatedBadge from "./animated-badge";
import { IconBrandSpotify } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { SpotifyCurrentPlayingResponse } from "@/lib/types/spotify-current-playing-response";

interface SpotifyCurrentPlayingBadgeProps {
  title?: string | undefined;
}

export default function SpotifyCurrentPlayingBadge({
  title,
}: SpotifyCurrentPlayingBadgeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPlayingInfo, setCurrentPlayingInfo] = useState<
    SpotifyCurrentPlayingResponse | undefined
  >(undefined);
  const [mainArtist, setMainArtist] = useState<string | undefined>(undefined);
  const [musicLink, setMusicLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchCurrentPlaying() {
      const currentPlayingInfo = await getSpotifyCurrentPlaying();
      return currentPlayingInfo;
    }

    fetchCurrentPlaying()
      .then((data) => {
        setCurrentPlayingInfo(data);
        setMainArtist(data.item.artists[0].name);
        setMusicLink(data.item.external_urls.spotify);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !currentPlayingInfo) {
    return <SpotifyCurrentPlayingBadgeLoading />;
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      {title && (
        <p className="font-mono text-sm text-gray-400 opacity-65">{title}</p>
      )}
      <a href={musicLink}>
        <AnimatedBadge className="gap-1 bg-[#1DB954] dark:text-foreground select-none">
          <IconBrandSpotify size={20} />
          <p>
            {currentPlayingInfo.item.name} - {mainArtist}
          </p>
        </AnimatedBadge>
      </a>
    </div>
  );
}

function SpotifyCurrentPlayingBadgeLoading() {
  return <Skeleton className="w-24 h-9" />;
}
