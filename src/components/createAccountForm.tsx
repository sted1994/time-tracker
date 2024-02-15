import {
  Box,
  Button,
  Checkbox,
  Container,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { InterestMultiSelect } from "./interestMultiSelect";

export const CreateAccountForm = () => {
  const InputGroup = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 10,
  });

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
    <Container sx={{ backgroundColor: "#D9D9D9", borderRadius: 5 }}>
      <Typography variant="h4">Create Account</Typography>
      <Container component="form">
        <Container sx={{ display: "flex" }}>
          <InputGroup>
            <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
              Name
              <TextField
                size="small"
                id="outlined-basic"
                label="Enter Name"
                variant="outlined"
              />
            </FormLabel>
            <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
              Location
              <TextField
                size="small"
                id="outlined-basic"
                label="Enter Location"
                variant="outlined"
              />
            </FormLabel>
          </InputGroup>
          <InputGroup>
            <InterestMultiSelect />
            <InterestMultiSelect />
          </InputGroup>
        </Container>
        <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
          About
          <TextField
            id="outlined-basic"
            label="Enter a short bio about yourself"
            variant="outlined"
          />
        </FormLabel>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Container>
    </Container>
  );
};
