import { FC, FormEvent } from "react";

import { useFormsData } from "../context/forms-data-context";
import { TextField } from "@mui/material";

interface FormValues {
  electricity: number;
  naturalGas: number;
  heatingOil: number;
  propane: number;
}

const HousingPage: FC = () => {
  const { formsData, setFormsData } = useFormsData();

  const { housing: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, housing: formValues });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted', formValues);
  };

  return (
    <div>
      <h1>Housing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="electricity"
            type="number"
            label="Electricity"
            value={formValues.electricity}
            onChange={(event) => setFormValues({ ...formValues, electricity: Number(event.target.value) })}
          />
        </div>
        <div>
          <TextField
            id="naturalGas"
            type="number"
            label="Natural Gas"
            value={formValues.naturalGas}
            onChange={(event) => setFormValues({ ...formValues, naturalGas: Number(event.target.value) })}
          />
        </div>
        <div>
          <TextField
            id="heatingOil"
            type="number"
            label="Heating Oil"
            value={formValues.heatingOil}
            onChange={(event) => setFormValues({ ...formValues, heatingOil: Number(event.target.value) })}
          />
        </div>
        <div>
          <TextField
            id="propane"
            type="number"
            label="Propane"
            value={formValues.propane}
            onChange={(event) => setFormValues({ ...formValues, propane: Number(event.target.value) })}
          />
        </div>
      </form>
    </div>
  )
}

export default HousingPage;
