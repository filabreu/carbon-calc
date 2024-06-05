import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState
} from "react";

interface FormsDataType {
  start: {
    householdPeople: number;
  };
  housing: {
    electricity: number;
    naturalGas: number;
    heatingOil: number;
    propane: number;
  };
  transportation: {
    milesDriven: number;
    milesPerGallon: number;
    fuelType: string;
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
}

export const FormsDataContext = createContext<FormsDataContextType>({
  formsData: {
    start: {
      householdPeople: 0,
    },
    housing: {
      electricity: 0,
      naturalGas: 0,
      heatingOil: 0,
      propane: 0,
    },
    transportation: {
      milesDriven: 0,
      milesPerGallon: 0,
      fuelType: 'gasoline',
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
});

export const useFormsData = () => useContext(FormsDataContext);

interface FormsDataProviderProps {
  children: ReactNode;
}

export const FormsDataProvider: FC<FormsDataProviderProps> = ({ children }) => {
  const [formsData, setFormsData] = useState<FormsDataType>(
    {
      start: {
        householdPeople: 0,
      },
      housing: {
        electricity: 0,
        naturalGas: 0,
        heatingOil: 0,
        propane: 0,
      },
      transportation: {
        milesDriven: 0,
        milesPerGallon: 0,
        fuelType: 'gasoline',
      },
      waste: {
        metal: false,
        plastic: false,
        paper: false,
        glass: false,
      },
    }
  );

  return (
    <FormsDataContext.Provider
      value={{formsData, setFormsData}}
    >
      {children}
    </FormsDataContext.Provider>
  );
}
