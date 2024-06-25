import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiClient.get<FetchResponse<Genre>>("/genres");
      return res.data.results;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });
};

export default useGenres;
