import useData from "./useData";
import { GenreProps } from "./useGenres";

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
}

const useGames = (selecredGenre: GenreProps | null) =>
  useData<GameProps>("/games", { params: { genres: selecredGenre?.id } }, [
    selecredGenre?.id,
  ]);
export default useGames;
