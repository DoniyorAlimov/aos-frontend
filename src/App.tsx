import { Typography } from "@mui/material";
import LineChart from "./components/LineChart";
import { EquipmentQueryParams } from "./hooks/useLineChart";
import AggregationTypesList from "./components/AggregationTypesList";
import { useState } from "react";

const App = () => {
  const [queryParams, setQueryParams] = useState<EquipmentQueryParams>();

  return (
    <>
      <Typography variant="h1" fontSize="36px">
        AOS frontend
      </Typography>
      <AggregationTypesList
        selectedAggregationTypeId={queryParams?.aggregation_type!!}
        onSelectAggregationTypeId={(aggregationTypeId) =>
          setQueryParams({
            ...queryParams,
            aggregation_type: aggregationTypeId,
          })
        }
      />
      <LineChart params={queryParams} />
    </>
  );
};

export default App;
