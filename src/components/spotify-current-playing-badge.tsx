import { getSpotifyCurrentPlaying } from "@/app/actions/spotify";
import AnimatedBadge from "./animated-badge";
import { IconBrandSpotify } from "@tabler/icons-react";

export default async function SpotifyCurrentPlayingBadge() {
  const currentPlayingInfo = await getSpotifyCurrentPlaying();
  const mainArtist = currentPlayingInfo.item.artists[0].name;
  const musicLink = currentPlayingInfo.item.external_urls.spotify;

  return (
    <a href={musicLink}>
      <AnimatedBadge className="gap-1 bg-[#1DB954] dark:text-foreground select-none">
        <IconBrandSpotify size={20} />
        <p>
          {currentPlayingInfo.item.name} - {mainArtist}
        </p>
      </AnimatedBadge>
    </a>
  );
}
