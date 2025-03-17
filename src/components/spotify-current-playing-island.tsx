import { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify-current-playing-track-info";
import { formatSpotifyArtistsName } from "@/utils/formater";
import Image from "next/image";
import spotifyLogo from "@/app/images/spotify.svg";
import Link from "./link";

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
    <div className="relative isolate w-full h-36 rounded-lg overflow-clip">
      <div className="absolute bg-gradient-to-t from-spotifyPrimary z-10 size-full"/>
      <Image
        src={image.url}
        width={300}
        height={300}
        alt={`${name} album cover`}
        className="absolute inset-0 z-0 object-none size-full"
      />
      <div className="absolute flex flex-col z-20 p-2 justify-between size-full">
        <div className="inline-flex items-center gap-2">
          <Image
            src={spotifyLogo}
            width={18}
            height={18}
            alt="Spotify Logo"
            className="filter invert"
          />
          <h2 className="text-sm">{title}</h2>
        </div>
        <div>
          <Link href={href} isExternal className="text-white font-bold">{name}</Link>
          <h2 className="text-white text-sm">{formatedArtists}</h2>
        </div>
      </div>
    </div>
  );
}
