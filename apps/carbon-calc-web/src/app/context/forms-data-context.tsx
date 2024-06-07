import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState
} from "react";

interface FormsDataType {
  start: {
    householdPeople: number | null;
  };
  housing: {
    electricity: number| null;
    naturalGas: number| null;
    heatingOil: number| null;
    propane: number| null;
  };
  transportation: {
    milesDriven: number| null;
    milesPerGallon: number| null;
    fuelType: string | null;
  };
  waste: {
    metal: boolean;
    plastic: boolean;
    paper: boolean;
    glass: boolean;
  };
}

interface FormsDataContextType {
  formsData: FormsDataType;
  setFormsData: (formsData: FormsDataType) => void;
  resetFormsData: () => void;
}

export const FormsDataContext = createContext<FormsDataContextType>({
  formsData: {
    start: {
      householdPeople: null,
    },
    housing: {
      electricity: null,
      naturalGas: null,
      heatingOil: null,
      propane: null,
    },
    transportation: {
      milesDriven: null,
      milesPerGallon: null,
      fuelType: null,
    },
    waste: {
      metal: false,
      plastic: false,
      paper: false,
      glass: false,
    },
  },
  setFormsData: () => {
    return;
  },
  resetFormsData: () => {
    return;
  },
});

export const useFormsData = () => useContext(FormsDataContext);

interface FormsDataProviderProps {
  children: ReactNode;
}

export const FormsDataProvider: FC<FormsDataProviderProps> = ({ children }) => {
  const defaultState = {
    start: {
      householdPeople: null,
    },
    housing: {
      electricity: null,
      naturalGas: null,
      heatingOil: null,
      propane: null,
    },
    transportation: {
      milesDriven: null,
      milesPerGallon: null,
      fuelType: null,
    },
    waste: {
      metal: false,
      plastic: false,
      paper: false,
      glass: false,
    },
  };

  const [formsData, setFormsData] = useState<FormsDataType>(defaultState);

  const resetFormsData = () => setFormsData(defaultState);

  return (
    <FormsDataContext.Provider
      value={{formsData, setFormsData, resetFormsData}}
    >
      {children}
    </FormsDataContext.Provider>
  );
}
