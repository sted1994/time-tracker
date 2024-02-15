import {
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

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

export const InterestMultiSelect = () => {
  const [interests, setInterests] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof interests>) => {
    const {
      target: { value },
    } = event;
    setInterests(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Container>
      <FormControl sx={{ width: 300 }}>
        <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
          Select your interests
        </FormLabel>
        <Select
          size="small"
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={interests}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em style={{ color: "lightGray" }}>
                  Please select your interests
                </em>
              );
            }

            return selected.join(", ");
          }}
          sx={{ backgroundColor: "white" }}
        >
          {fillerSkills.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={interests.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};
