export interface moviesProps {
  adult?: boolean;
  backdrop_path?: string;
  poster_path: string;
  genre_ids: [];
  name: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
}

export interface movieProps {
    movie: {
      map(arg0: (item: moviesProps) => import("react").JSX.Element): import("react").ReactNode;
      adult?: boolean;
      backdrop_path?: string;
      poster_path: string;
      genre_ids: [];
      name: string;
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      release_date: string;
      title: string;
      video?: boolean;
      vote_average: number;
      vote_count: number;
    };
    name?: string;
  }