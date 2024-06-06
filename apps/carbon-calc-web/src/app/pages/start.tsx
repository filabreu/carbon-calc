import { FC, FormEvent } from "react";
import { useFormsData } from "../context/forms-data-context";
import {
  TextField,
  Typography,
} from "@mui/material";

interface FormValues {
  householdPeople: number;
}

const StartPage: FC = () => {
  const { formsData, setFormsData } = useFormsData();

  const { start: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, start: formValues });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted', formValues);
  }

  return (
    <>
      <Typography variant="h2">What is your carbon footprint?</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <Typography>How many people are in your household?</Typography>
          <TextField
            id="householdPeople"
            type="number"
            value={formValues.householdPeople}
            onChange={(event) =>
              setFormValues({ ...formValues, householdPeople: Number(event.target.value) })
            }
          />
        </div>
        <input type="submit" value="Get Started" />
      </form>
    </>
  );
}

export default StartPage;
