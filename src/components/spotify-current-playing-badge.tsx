import { SpotifyCurrentPlayingResponse } from "@/lib/types/spotify-current-playing-response";
import AnimatedBadge from "./animated-badge";
import { IconBrandSpotify } from "@tabler/icons-react";

interface SpotifyCurrentPlayingBadgeProps {
  title?: string | undefined;
  spotifyInfo: SpotifyCurrentPlayingResponse;
}

export default function SpotifyCurrentPlayingBadge({
  title,
  spotifyInfo,
}: SpotifyCurrentPlayingBadgeProps) {
  const musicName = spotifyInfo.item.name;
  const mainArtist = spotifyInfo.item.artists[0].name;
  const musicLink = spotifyInfo.item.external_urls.spotify;

  return (
    <div className="flex flex-col gap-1 w-full">
      {title && (
        <p className="font-mono text-sm text-gray-400 opacity-65">{title}</p>
      )}
      <a href={musicLink}>
        <AnimatedBadge className="gap-1 bg-[#1DB954] dark:text-foreground select-none">
          <IconBrandSpotify size={20} />
          <p>
            {musicName} - {mainArtist}
          </p>
        </AnimatedBadge>
      </a>
    </div>
  );
}
