import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";

import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  metal: boolean;
  plastic: boolean;
  paper: boolean;
  glass: boolean;
}

const WastePage: FC = () => {
  const { formsData, setFormsData } = useFormsData();

  const { waste: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, waste: formValues });
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
        <Typography variant="h2">Waste</Typography>
        <Typography variant="h4">What types of waste do you recycle?</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value="metal"
                size="large"
                onChange={(event) =>
                  setFormValues({ ...formValues, metal: event.target.checked })
                }
              />
            }
            label="Metal"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="plastic"
                size="large"
                onChange={(event) =>
                  setFormValues({ ...formValues, plastic: event.target.checked })
                }
              />
            }
            label="Plastic"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="paper"
                size="large"
                onChange={(event) =>
                  setFormValues({ ...formValues, paper: event.target.checked })
                }
              />
            }
            label="Paper"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="glass"
                size="large"
                onChange={(event) =>
                  setFormValues({ ...formValues, glass: event.target.checked })
                }
              />
            }
            label="Glass"
          />
        </FormGroup>
        <Link to="/emissions">
          <Button variant="contained">
            Next
          </Button>
        </Link>
      </Box>
    </Paper>
  );
}

export default WastePage;
