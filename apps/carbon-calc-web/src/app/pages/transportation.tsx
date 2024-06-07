import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";

import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  milesDriven: number | null;
  milesPerGallon: number | null;
  fuelType: string | null;
}

const TransportationPage: FC = () => {
  const { formsData, setFormsData } = useFormsData();

  const { transportation: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, transportation: formValues });
  };

  return (
    <Paper elevation={4}>
      <Box
        my={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={2}
        p={2}
      >
        <Typography variant="h2">Transportation</Typography>
        <Typography variant="h4">How much you drive with your personal vehicle per week?</Typography>
        <Box
          display="flex"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
          gap={2}
          p={2}
        >
          <TextField
            id="milesDriven"
            type="number"
            label="Miles Driven / Week"
            value={formValues.milesDriven}
            onChange={(event) =>
              setFormValues({ ...formValues, milesDriven: Number(event.target.value) })
            }
          />
          <TextField
            id="milesPerGallon"
            type="number"
            label="Miles Per Gallon"
            value={formValues.milesPerGallon}
            onChange={(event) =>
              setFormValues({ ...formValues, milesPerGallon: Number(event.target.value) })
            }
          />
          <FormControl fullWidth>
            <InputLabel>Fuel Type</InputLabel>
            <Select
              id="fuel-type"
              value={formValues.fuelType}
              label="Fuel Type"
              onChange={(event) =>
                setFormValues({ ...formValues, fuelType: event.target.value })
              }
            >
              <MenuItem value="gasoline">Gasoline</MenuItem>
              <MenuItem value="diesel">Diesel</MenuItem>
              <MenuItem value="ethanol">Ethanol</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Link to="/waste">
          <Button variant="contained">
            Next
          </Button>
        </Link>
      </Box>
    </Paper>
  );
}

export default TransportationPage;
