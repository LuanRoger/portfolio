import { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify-current-playing-track-info";
import AnimatedBadge from "./animated-badge";
import { IconBrandSpotify } from "@tabler/icons-react";
import { formatSpotifyArtistsName } from "@/utils/formater";

interface SpotifyCurrentPlayingBadgeProps {
  title?: string | undefined;
  spotifyInfo: SpotifyCurrentPlayingTrackInfo;
}

export default function SpotifyCurrentPlayingIsland({
  title,
  spotifyInfo,
}: SpotifyCurrentPlayingBadgeProps) {
  const { name, artists, href, image } = spotifyInfo;
  const formatedArtists = formatSpotifyArtistsName(artists);

  return (
    <div className="flex flex-col gap-1 w-full">
      {title && (
        <p className="font-mono text-sm text-gray-400 opacity-65">{title}</p>
      )}
      <a href={href}>
        <AnimatedBadge className="gap-1 bg-[#1DB954] dark:text-foreground select-none">
          <IconBrandSpotify size={20} />
          <p>
            {name} - {formatedArtists}
          </p>
        </AnimatedBadge>
      </a>
    </div>
  );
}
