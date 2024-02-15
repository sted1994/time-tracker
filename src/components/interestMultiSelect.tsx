import {
  Checkbox,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { SetStateAction, useState } from "react";

export const InterestMultiSelect = () => {
  const [interests, setInterests] = useState([]);
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
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    value?: any
  ) => {
    console.log(event.target.id, checked, value);
  };
  return (
    <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
      Skills you would like to learn
      <Select multiple value={interests} size="small" sx={{ width: 250 }}>
        {fillerSkills.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox id={name} onChange={handleChange} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormLabel>
  );
};
