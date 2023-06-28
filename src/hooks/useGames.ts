import useData from "./useData";
import { GenreProps } from "./useGenres";
import { PlatformProps } from "./usePlatforms";

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
}

const useGames = (selectedGenre: GenreProps | null) =>
  useData<GameProps>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default useGames;
