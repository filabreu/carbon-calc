import { kgToLb } from '../utils/kgToLb';

const Housing = {
  electricity: (_, args) => {
    const { consumption, householdPeople } = args;

    // Calculate emissions based on monthly kWh consumption
    const MWhperkWh = 0.001;
    const CO2kgPerMWh = 852.3;
    const CO2kg = parseInt(consumption) * MWhperkWh * CO2kgPerMWh;
    const CO2lbs = kgToLb(CO2kg);

    const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

    return ({ carbonEmissions, metric: 'lbs' });
  },
  heatingOil: (_, args) => {
    const { consumption, householdPeople } = args;

    // Calculate emissions based on monthly gallons consumed
    const mmbtuPerGallon = 0.139;
    const kgCO2PerMmbtu = 73.3;
    const CO2kg = parseInt(consumption) * mmbtuPerGallon * kgCO2PerMmbtu;
    const CO2lbs = kgToLb(CO2kg);

    const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

    return ({ carbonEmissions, metric: 'lbs' });
  },
  naturalGas: (_, args) => {
    const { consumption, householdPeople } = args;

    // Calculate emissions based on monthly therms consumed
    const mmbtuPerTherm = 0.1;
    const CO2kgPerMmbtu = 53.07;
    const CO2kg = parseInt(consumption) * mmbtuPerTherm * CO2kgPerMmbtu;
    const CO2lbs = kgToLb(CO2kg);

    const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

    return ({ carbonEmissions, metric: 'lbs' });
  },
  propane: (_, args) => {
    const { consumption, householdPeople } = args;

    // Calculate emissions based on monthly gallons consumed
    const mmbtuPerGallon = 0.091;
    const CO2kgPerMmbtu = 62.87;
    const CO2kg = parseInt(consumption) * mmbtuPerGallon * CO2kgPerMmbtu;
    const CO2lbs = kgToLb(CO2kg);

    const carbonEmissions = Math.floor(CO2lbs * 12 / parseInt(householdPeople));

    return ({ carbonEmissions, metric: 'lbs' });
  },
};

export default Housing;
