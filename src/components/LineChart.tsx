import { Skeleton, Typography } from "@mui/material";
import Plot from "react-plotly.js";
import useLineChart, { EquipmentQueryParams } from "../hooks/useLineChart";

interface Props {
  params?: EquipmentQueryParams;
}

const LineChart = ({ params }: Props) => {
  const { data: figure, isLoading, error } = useLineChart(params || {});

  if (error) return <Typography>{error.message}</Typography>;

  if (isLoading)
    return <Skeleton variant="rounded" height={400} sx={{ m: 5 }} />;

  if (!figure) return null;

  return (
    <Plot
      style={{ width: "100%", height: "100%" }}
      data={figure.data}
      layout={figure.layout}
      useResizeHandler={true}
      config={{ displaylogo: false }}
    ></Plot>
  );
};

export default LineChart;
