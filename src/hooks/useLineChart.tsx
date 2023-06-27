import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import createLinetChartFigureObject from "../utils/createLineChartFigureObject";
import { Figure } from "react-plotly.js";

interface AggregationType {
  id: number;
  name: string;
  unit: string;
}

interface Aggregation {
  id: number;
  value: number;
  timestamp: string;
  aggregation_type: AggregationType;
}

export interface Equipment {
  id: number;
  name: string;
  aggregations: Aggregation[];
}

export interface EquipmentQueryParams {
  name?: string[];
  aggregation_type?: number;
}

const useLineChart = (params: EquipmentQueryParams) => {
  const apiClient = new APIClient<Equipment, EquipmentQueryParams>(
    "/equipments/"
  );
  return useQuery<Figure, Error>({
    queryKey: params ? ["lineChart", params] : ["lineChart"],
    queryFn: () =>
      apiClient
        .getLineChartData(params)
        .then((data) => createLinetChartFigureObject(data)),
  });
};

export default useLineChart;
