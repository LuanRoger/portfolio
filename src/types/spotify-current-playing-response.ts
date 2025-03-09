export interface SpotifyCurrentPlayingResponse {
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: {
    name: string;
    preview_url: string;
    artists: {
      name: string;
    }[];
    images: {
      height: number;
      width: number;
      url: string;
    }[];
    external_urls: {
      spotify: string;
    };
  };
}
