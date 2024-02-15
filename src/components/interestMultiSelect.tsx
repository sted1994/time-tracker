import {
  Checkbox,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";

export const InterestMultiSelect = () => {
  const fillerSkills = [
    "Carpentry",
    "Cooking",
    "Dancing",
    "Drawing",
    "Fishing",
    "Gardening",
    "Knitting",
    "Painting",
    "Photography",
    "Pottery",
    "Sewing",
    "Singing",
    "Woodworking",
    "Writing",
    "Yoga",
    "Other",
  ];
  return (
    <FormLabel>
      Skills you would like to learn
      <Select multiple value={[""]}>
        {fillerSkills.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormLabel>
  );
};
