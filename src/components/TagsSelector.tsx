import {
  Autocomplete,
  Checkbox,
  Chip,
  Skeleton,
  TextField,
} from "@mui/material";
import useTags, { Tag } from "../hooks/useTags";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface Props {
  onSelectedTags: (selectedTags: string[]) => void;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const TagsSelector = ({ onSelectedTags }: Props) => {
  const { data: tags, error, isLoading } = useTags();

  if (error) return null;

  if (isLoading)
    return <Skeleton height={80} width={500} sx={{ m: 5 }}></Skeleton>;

  if (!tags) return null;

  return (
    <Autocomplete
      sx={{ width: 500, mx: 5 }}
      multiple
      options={tags}
      disableCloseOnSelect
      getOptionLabel={(option: Tag) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            sx={{ mr: 2 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Tags" placeholder="Select tags" />
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            variant="outlined"
            color="primary"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      onChange={(e, tags) => onSelectedTags(tags.map((tag) => tag.name))}
    ></Autocomplete>
  );
};

export default TagsSelector;
