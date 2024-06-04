import { FormEvent, useState } from "react";

interface FormValues {
  milesDriven: number;
  milesPerGallon: number;
}

const TransportationPage = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    milesDriven: 0,
    milesPerGallon: 0,
  });

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
