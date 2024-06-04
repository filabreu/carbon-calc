import { FormEvent, useState } from "react";

interface FormValues {
  metal: boolean;
  plastic: boolean;
  paper: boolean;
  glass: boolean;
}

const WastePage = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    metal: false,
    plastic: false,
    paper: false,
    glass: false,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", formValues);
  }

  return (
    <div>
      <h1>Waste</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="metal">Metal</label>
          <input
            id="metal"
            type="checkbox"
            checked={formValues.metal}
            onChange={(event) =>
              setFormValues({ ...formValues, metal: event.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="plastic">Plastic</label>
          <input
            id="plastic"
            type="checkbox"
            checked={formValues.plastic}
            onChange={(event) =>
              setFormValues({ ...formValues, plastic: event.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="paper">Paper</label>
          <input
            id="paper"
            type="checkbox"
            checked={formValues.paper}
            onChange={(event) =>
              setFormValues({ ...formValues, paper: event.target.checked })
            }
          />
        </div>
        <div>
          <label htmlFor="glass">Glass</label>
          <input
            id="glass"
            type="checkbox"
            checked={formValues.glass}
            onChange={(event) =>
              setFormValues({ ...formValues, glass: event.target.checked })
            }
          />
        </div>
      </form>
    </div>
  );
}

export default WastePage;
