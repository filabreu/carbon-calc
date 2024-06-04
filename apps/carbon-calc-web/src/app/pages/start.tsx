import { FormEvent } from "react";
import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  householdPeople: number;
}

const StartPage = () => {
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
    <div>
      <h1>What is your carbon footprint?</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="householdPeople">How many people are in your household?</label>
          <input
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
    </div>
  );
}

export default StartPage;
