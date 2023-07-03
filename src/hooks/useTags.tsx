import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Tag {
  id: number;
  name: string;
}

const useTags = () => {
  const apiClient = new APIClient<Tag>("/tags/");

  return useQuery({
    queryKey: ["tags"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useTags;
