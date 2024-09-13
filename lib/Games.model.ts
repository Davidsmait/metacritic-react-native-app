interface GameImage {
  bucketType: string;
  bucketPath: string;
}

interface GameCriticScoreSummary {
  url: string;
  max: number;
  score: number;
  reviewCount: number;
  positiveCount: number;
  neutralCount: number;
  negativeCount: number;
  sentiment: string;
}

interface GameItem {
  id: string;
  type: string;
  typeId: number;
  title: string;
  slug: string;
  premiereYear: number;
  releaseDate: string;
  rating: string;
  image: GameImage;
  criticScoreSummary: GameCriticScoreSummary;
  genres: { id: string | null; name: string }[];
  description: string;
  duration: number;
  streamingDates: {
    videoClosestPastAvailableDate: string | null;
    videoClosestFutureAvailableDate: string | null;
    videoClosestPastExpiryDate: string | null;
    videoClosestFutureExpiryDate: string | null;
    videoClosestPastAvailableNetworkId: string | null;
    videoClosestFutureAvailableNetworkId: string | null;
    videoClosestPastExpiryNetworkId: string | null;
    videoClosestFutureExpiryNetworkId: string | null;
    networkStreamingDates: any;
  };
}

interface LatestGamesResponse {
  data: {
    id: string;
    totalResults: number;
    items: GameItem[];
    genres: null;
    network: null;
  };
  links: {
    self: { href: string; meta: { pageNum: number; count: number } };
    prev: { href: string | null; meta: null };
    next: { href: string | null; meta: { pageNum: number; count: number } };
    first: { href: string; meta: { pageNum: number; count: number } };
    last: { href: string; meta: { pageNum: number; count: number } };
  };
  meta: {
    componentName: null;
    componentDisplayName: null;
    componentType: null;
  };
}

export interface LatestGame {
  description: string;
  releaseDate: string;
  score: number;
  slug: string;
  title: string;
  image: string;
}
