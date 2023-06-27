import { Typography } from "@mui/material";
import LineChart from "./components/LineChart";
import { EquipmentQueryParams } from "./hooks/useLineChart";

const App = () => {
  const queryParams: EquipmentQueryParams = {
    name: ["P-101", "P-201"],
    aggregation_type: 1,
  };

  return (
    <>
      <Typography variant="h1" fontSize="36px">
        AOS frontend
      </Typography>
      <LineChart params={queryParams} />
    </>
  );
};

export default App;
