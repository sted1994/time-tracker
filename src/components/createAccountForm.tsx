import {
  Button,
  Container,
  FormLabel,
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

  const TextInput = styled(TextField)({
    borderRadius: 3,
    "& .MuiInputBase-root": {
      "& input": {
        color: "gray",
        fontStyle: "italic",
      },
    },
    backgroundColor: "white",
  });

  return (
    <Container sx={{ backgroundColor: "#D9D9D9", borderRadius: 5 }}>
      <Typography variant="h4">Create Account</Typography>
      <Container component="form">
        <Container sx={{ display: "flex" }}>
          <InputGroup>
            <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
              Name
              <TextInput
                size="small"
                id="outlined-basic"
                placeholder="Enter Name"
                variant="outlined"
              />
            </FormLabel>
            <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
              Location
              <TextInput
                size="small"
                id="outlined-basic"
                placeholder="Enter Location"
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
          <TextInput
            id="outlined-basic"
            placeholder="Enter a short bio about yourself"
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
