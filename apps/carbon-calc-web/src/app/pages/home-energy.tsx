import { FormEvent } from "react";

import { useFormsData } from "../context/forms-data-context";

interface FormValues {
  electricity: number;
  naturalGas: number;
  heatingOil: number;
  propane: number;
}

const HomeEnergyPage = () => {
  const { formsData, setFormsData } = useFormsData();

  const { homeEnergy: formValues } = formsData;

  const setFormValues = (formValues: FormValues) => {
    setFormsData({ ...formsData, homeEnergy: formValues });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted', formValues);
  };

  return (
    <div>
      <h1>Home Energy</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="naturalGas">Natural Gas</label>
          <input
            id="naturalGas"
            type="number"
            value={formValues.naturalGas}
            onChange={(event) => setFormValues({ ...formValues, naturalGas: Number(event.target.value) })}
          />
        </div>
        <div>
          <label htmlFor="electricity">Electricity</label>
          <input
            id="electricity"
            type="number"
            value={formValues.electricity}
            onChange={(event) => setFormValues({ ...formValues, electricity: Number(event.target.value) })}
          />
        </div>
        <div>
          <label htmlFor="heatingOil">Heating Oil</label>
          <input
            id="heatingOil"
            type="number"
            value={formValues.heatingOil}
            onChange={(event) => setFormValues({ ...formValues, heatingOil: Number(event.target.value) })}
          />
        </div>
        <div>
          <label htmlFor="propane">Propane</label>
          <input
            id="propane"
            type="number"
            value={formValues.propane}
            onChange={(event) => setFormValues({ ...formValues, propane: Number(event.target.value) })}
          />
        </div>
      </form>
    </div>
  )
}

export default HomeEnergyPage;
