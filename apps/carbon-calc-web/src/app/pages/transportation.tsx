import { FormEvent } from "react";

import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  milesDriven: number;
  milesPerGallon: number;
}

const TransportationPage = () => {
  const { formsData, setFormsData } = useFormsData();

  const { transportation: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, transportation: formValues });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted', formValues);
  }

  return (
    <div>
      <h1>Transportation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="milesDriven">Miles Driven</label>
          <input
            id="milesDriven"
            type="number"
            value={formValues.milesDriven}
            onChange={(event) =>
              setFormValues({ ...formValues, milesDriven: Number(event.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="milesPerGallon">Miles Per Gallon</label>
          <input
            id="milesPerGallon"
            type="number"
            value={formValues.milesPerGallon}
            onChange={(event) =>
              setFormValues({ ...formValues, milesPerGallon: Number(event.target.value) })
            }
          />
        </div>
      </form>
    </div>
  );
}

export default TransportationPage;
