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

  const styles = {
    "input-label": {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%",
      color: "red",
    },

    input: {
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "blue",
      },
    },
  };

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
                placeholder="Enter Name"
                variant="outlined"
                sx={{
                  borderRadius: 1,
                  "& .MuiInputBase-root": {
                    "& input": {
                      color: "gray",
                      fontStyle: "italic",
                    },
                  },
                  backgroundColor: "white",
                }}
              />
            </FormLabel>
            <FormLabel sx={{ display: "flex", flexDirection: "column" }}>
              Location
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Enter Location"
                variant="outlined"
                sx={{
                  borderRadius: 1,
                  "& .MuiInputBase-root": {
                    "& input": {
                      color: "gray",
                      fontStyle: "italic",
                    },
                  },
                  backgroundColor: "white",
                }}
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
            sx={{
              borderRadius: 1,
              "& .MuiInputBase-root": {
                "& input": {
                  color: "gray",
                  fontStyle: "italic",
                },
              },
              backgroundColor: "white",
            }}
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
