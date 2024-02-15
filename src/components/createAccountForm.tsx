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
            <FormLabel>
              Name
              <TextField
                id="outlined-basic"
                label="Enter Name"
                variant="outlined"
              />
            </FormLabel>
            <FormLabel>
              Location
              <TextField
                id="outlined-basic"
                label="Enter Location"
                variant="outlined"
              />
            </FormLabel>
          </InputGroup>
          <InputGroup>
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
            <FormLabel>
              Skills you would like to teach
              <Select multiple value={[""]}>
                {fillerSkills.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormLabel>
          </InputGroup>
        </Container>
        <FormLabel>
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
