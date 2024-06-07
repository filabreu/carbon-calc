import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  householdPeople: number;
}

const StyledTextField = styled(TextField)({
  width: '100px',
  '& .MuiInputBase-input': { textAlign: 'center' },
});

const StartPage: FC = () => {
  const { formsData, setFormsData } = useFormsData();

  const { start: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, start: formValues });
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
        <Typography variant="h4">How many people are in your household?</Typography>
        <StyledTextField
          id="householdPeople"
          type="number"
          value={formValues.householdPeople}
          onChange={(event) =>
            setFormValues({ ...formValues, householdPeople: Number(event.target.value) })
          }
        />
        <Link to="/housing">
          <Button variant="contained">
            Start
          </Button>
        </Link>
      </Box>
    </Paper>
  );
}

export default StartPage;
