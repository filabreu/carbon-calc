import { kgToLb } from '../utils/kgToLb';

const Housing = (_, args) => {
  const {
    input: {
      householdPeople,
      electricityConsumption,
      heatingOilConsumption,
      naturalGasConsumption,
      propaneConsumption,
    }
  } = args;

  return ({
    electricity: () => {
      if (householdPeople === 0) {
        return ({ carbonEmissions: 0, metric: 'lbs' });
      }

      // Calculate emissions based on monthly kWh consumption
      const MWhperkWh = 0.001;
      const CO2kgPerMWh = 852.3;
      const CO2kg = parseInt(electricityConsumption) * MWhperkWh * CO2kgPerMWh;
      const CO2lbs = kgToLb(CO2kg);

      const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

      return ({ carbonEmissions, metric: 'lbs' });
    },
    heatingOil: () => {
      if (householdPeople === 0) {
        return ({ carbonEmissions: 0, metric: 'lbs' });
      }

      // Calculate emissions based on monthly gallons consumed
      const mmbtuPerGallon = 0.139;
      const kgCO2PerMmbtu = 73.3;
      const CO2kg = parseInt(heatingOilConsumption) * mmbtuPerGallon * kgCO2PerMmbtu;
      const CO2lbs = kgToLb(CO2kg);

      const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

      return ({ carbonEmissions, metric: 'lbs' });
    },
    naturalGas: () => {
      if (householdPeople === 0) {
        return ({ carbonEmissions: 0, metric: 'lbs' });
      }

      // Calculate emissions based on monthly therms consumed
      const mmbtuPerTherm = 0.1;
      const CO2kgPerMmbtu = 53.07;
      const CO2kg = parseInt(naturalGasConsumption) * mmbtuPerTherm * CO2kgPerMmbtu;
      const CO2lbs = kgToLb(CO2kg);

      const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

      return ({ carbonEmissions, metric: 'lbs' });
    },
    propane: () => {
      if (householdPeople === 0) {
        return ({ carbonEmissions: 0, metric: 'lbs' });
      }

      // Calculate emissions based on monthly gallons consumed
      const mmbtuPerGallon = 0.091;
      const CO2kgPerMmbtu = 62.87;
      const CO2kg = parseInt(propaneConsumption) * mmbtuPerGallon * CO2kgPerMmbtu;
      const CO2lbs = kgToLb(CO2kg);

      const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

      return ({ carbonEmissions, metric: 'lbs' });
    },
  });
};

export default Housing;
