import { Skeleton, Typography } from "@mui/material";
import Plot, { Figure } from "react-plotly.js";
import useLineChart, { EquipmentQueryParams } from "../hooks/useLineChart";
import { red } from "@mui/material/colors";

interface Props {
  params?: EquipmentQueryParams;
}

const LineChart = ({ params }: Props) => {
  if (!params?.aggregation_type) params = { ...params, aggregation_type: 1 };

  const { data, isLoading, error } = useLineChart(params || {});

  if (error)
    return (
      <Typography color={red[400]} sx={{ m: 5 }}>
        {error.message}
      </Typography>
    );

  if (isLoading)
    return <Skeleton variant="rounded" height={400} sx={{ m: 5 }} />;

  if (!data) return null;

  let figure: Figure = params.name?.length ? data : { ...data, data: [] };

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
