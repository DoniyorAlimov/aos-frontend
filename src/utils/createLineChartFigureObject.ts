import { Figure } from "react-plotly.js";
import { Equipment } from "../hooks/useLineChart";

const createLinetChartFigureObject = (data: Equipment[]): Figure => {
  return {
    data: data.map((eq) => {
      return {
        x: eq.aggregations.map((agg) => agg.timestamp),
        y: eq.aggregations.map((agg) => agg.value),
        name: eq.name,
        type: "scatter",
        mode: "lines",
      };
    }),
    layout: {
      title: data[0].aggregations[0].aggregation_type.name,
      showlegend: true,
    },
    frames: null,
  };
};

export default createLinetChartFigureObject;
