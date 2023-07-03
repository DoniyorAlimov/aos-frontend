import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import useAggregationTypes from "../hooks/useAggregationTypes";

interface Props {
  selectedAggregationTypeId: number;
  onSelectAggregationTypeId: (aggregationTypeId: number) => void;
}

const AggregationTypesList = ({
  selectedAggregationTypeId = 1,
  onSelectAggregationTypeId,
}: Props) => {
  const { data: aggregations, error, isLoading } = useAggregationTypes();

  if (error) return null;

  if (isLoading)
    return (
      <Skeleton
        variant="rounded"
        height={40}
        width={240}
        sx={{ m: 5 }}
      ></Skeleton>
    );

  if (!aggregations) return null;

  return (
    <FormControl variant="standard" sx={{ m: 5, minWidth: 240 }}>
      <InputLabel id="aggregation_select">Aggregation Type</InputLabel>
      <Select
        labelId="aggregation_select"
        value={selectedAggregationTypeId}
        onChange={(e) => onSelectAggregationTypeId(Number(e.target.value))}
        sx={{ color: lightBlue[700] }}
      >
        {aggregations.map((aggr) => (
          <MenuItem key={aggr.id} value={aggr.id}>
            {aggr.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AggregationTypesList;
