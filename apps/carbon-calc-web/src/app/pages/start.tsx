import { FormEvent, useState } from "react";

interface FormValues {
  householdPeople: number;
}

const StartPage = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    householdPeople: 0,
  });

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
