import spotifyLogo from "@/app/images/spotify.svg";
import type { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify-current-playing-track-info";
import { formatSpotifyArtistsName } from "@/utils/formater";
import ActivityIsland from "./activity-island";

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
    <ActivityIsland
      accentColor="#1ED760"
      activityDescription={title ?? "Listening to"}
      description={formatedArtists}
      href={href}
      iconAlt="Spotify Logo"
      iconSrc={spotifyLogo}
      imageAlt={`${name} album cover`}
      imageSrc={image.url}
      title={name}
    />
  );
}
