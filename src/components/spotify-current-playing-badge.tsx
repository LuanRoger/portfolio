import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import AnimatedBadge from "./animated-badge";
import { IconBrandSpotify } from "@tabler/icons-react";

interface SpotifyCurrentPlayingBadgeProps {
  title?: string | undefined;
}

export default async function SpotifyCurrentPlayingBadge({
  title,
}: SpotifyCurrentPlayingBadgeProps) {
  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const mainArtist = currentPlayingInfo.item.artists[0].name;
  const musicLink = currentPlayingInfo.item.external_urls.spotify;

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
