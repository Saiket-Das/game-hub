import useData from "./useData";

export interface GenreProps {
  id: number;
  name: string;
}

const useGenres = () => useData<GenreProps>("/genres");
export default useGenres;
