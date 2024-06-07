import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  electricity: number | null;
  naturalGas: number | null;
  heatingOil: number | null;
  propane: number | null;
}

const HousingPage: FC = () => {
  const { formsData, setFormsData } = useFormsData();

  const { housing: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, housing: formValues });
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
        <Typography variant="h4">Housing</Typography>
        <Typography variant="h5">Input your household monthly consumption</Typography>
        <Box
          display="flex"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
          gap={2}
          p={2}
        >
          <TextField
            id="electricity"
            type="number"
            label="Electricity"
            InputProps={{
              endAdornment: <InputAdornment position="end">KwH</InputAdornment>
            }}
            value={formValues.electricity}
            onChange={(event) => setFormValues({ ...formValues, electricity: Number(event.target.value) })}
          />
          <TextField
            id="naturalGas"
            type="number"
            label="Natural Gas"
            InputProps={{
              endAdornment: <InputAdornment position="end">Therms</InputAdornment>
            }}
            value={formValues.naturalGas}
            onChange={(event) => setFormValues({ ...formValues, naturalGas: Number(event.target.value) })}
          />

          <TextField
            id="heatingOil"
            type="number"
            label="Heating Oil"
            InputProps={{
              endAdornment: <InputAdornment position="end">Gallons</InputAdornment>
            }}
            value={formValues.heatingOil}
            onChange={(event) => setFormValues({ ...formValues, heatingOil: Number(event.target.value) })}
          />

          <TextField
            id="propane"
            type="number"
            label="Propane"
            InputProps={{
              endAdornment: <InputAdornment position="end">Gallons</InputAdornment>
            }}
            value={formValues.propane}
            onChange={(event) => setFormValues({ ...formValues, propane: Number(event.target.value) })}
          />
        </Box>
        <Link to="/transportation">
          <Button variant="contained">Next</Button>
        </Link>
      </Box>
    </Paper>
  )
}

export default HousingPage;
