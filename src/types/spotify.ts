export interface SpotifyAuthResponse {
  access_token: string;
}

export interface SpotifyCurrentPlayingTrackInfo {
  artists: string[];
  href: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  isPlaying: boolean;
  name: string;
  progressMs: number;
  timestamp: number;
}
