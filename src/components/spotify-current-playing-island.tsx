import { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify-current-playing-track-info";
import { formatSpotifyArtistsName } from "@/utils/formater";
import spotifyLogo from "@/app/images/spotify.svg";
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
      title={name}
      description={formatedArtists}
      activityDescription={title ?? "Listening to"}
      iconSrc={spotifyLogo}
      iconAlt="Spotify Logo"
      imageSrc={image.url}
      imageAlt={`${name} album cover`}
      href={href}
      accentColor="#1ED760"
    />
  );
}
