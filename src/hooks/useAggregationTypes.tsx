import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface AggregationType {
  id: number;
  name: string;
  unit: string;
}

const useAggregationTypes = () => {
  const apiClient = new APIClient<AggregationType>("/aggregation-types/");

  return useQuery({
    queryKey: ["aggregationTypes"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useAggregationTypes;
