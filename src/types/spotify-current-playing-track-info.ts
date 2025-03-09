export interface SpotifyCurrentPlayingTrackInfo {
  name: string;
  timestamp: number;
  progressMs: number;
  isPlaying: boolean;
  href: string;
  artists: string[];
  image: {
    url: string;
    height: number;
    width: number;
  };
}
