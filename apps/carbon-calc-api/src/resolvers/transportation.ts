import { kgToLb } from '../utils/kgToLb';

const FUEL_TYPE_EMISSIONS = {
  gasoline: 8.78,
  diesel: 10.21,
  ethanol: 5.75,
  electric: 0,
};

const Transportation = (_, args) => {
  const { input: { milesDriven, milesPerGallon, fuelType } } = args;

  return ({
    personalVehicle:  () => {
      if (milesPerGallon === 0) {
        return ({ carbonEmissions: 0, metric: 'lbs' });
      }

      // Calculate emissions based on weekly miles driven
      const gallonsConsumed = milesDriven / milesPerGallon;
      const CO2kg = gallonsConsumed * FUEL_TYPE_EMISSIONS[fuelType];
      const CO2lbs = kgToLb(CO2kg);

      const carbonEmissions = Math.floor(CO2lbs * 52);

      return ({ carbonEmissions, metric: 'lbs' });
    },
  })
}

export default Transportation;
