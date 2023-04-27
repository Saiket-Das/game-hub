import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchGamesResponseProps {
  count: number;
  results: GameProps[];
}

const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponseProps>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
