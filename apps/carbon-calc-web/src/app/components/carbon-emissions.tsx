import { useQuery, gql } from '@apollo/client';

import { useFormsData } from '../context/forms-data-context';

const CarbonEmissions: React.FC = () => {
  const { formsData: { start, housing, transportation, waste } } = useFormsData();

  const housingInput = {
    householdPeople: start.householdPeople,
    electricityConsumption: housing.electricity,
    naturalGasConsumption: housing.naturalGas,
    heatingOilConsumption: housing.heatingOil,
    propaneConsumption: housing.propane,
  };

  const transportationInput = {
    milesDriven: transportation.milesDriven,
    milesPerGallon: transportation.milesPerGallon,
    fuelType: transportation.fuelType,
  };

  const wasteInput = {
    householdPeople: start.householdPeople,
    recycleMetal: waste.metal,
    recyclePlastic: waste.plastic,
    recyclePaper: waste.paper,
    recycleGlass: waste.glass,
  }

  const { data, error } = useQuery(GET_EMISSIONS, {
    variables: {
      housing: housingInput,
      transportation: transportationInput,
      waste: wasteInput,
    },
  });

  if (error) {
    return null;
  }

  const housingTotalEmissions =
    data?.housing.electricity.carbonEmissions
    + data?.housing.naturalGas.carbonEmissions
    + data?.housing.heatingOil.carbonEmissions
    + data?.housing.propane.carbonEmissions

  const transportationTotalEmissions = data?.transportation.personalVehicle.carbonEmissions;

  const wasteTotalEmissions = data?.waste.personalEmissions.carbonEmissions;

  const totalEmissions =
    housingTotalEmissions
    + transportationTotalEmissions
    + wasteTotalEmissions

  return (
    <div>
      <h1>Carbon Emissions</h1>
      <p>Housing total emissions: {housingTotalEmissions} lbs / year</p>
      <p>Transportation total emissions: {transportationTotalEmissions} lbs / year</p>
      <p>Waste total emissions: {wasteTotalEmissions} lbs / year</p>
      <p>Total emissions: {totalEmissions} lbs / year</p>
    </div>
  );
}

const GET_EMISSIONS = gql`
  query GetEmissionsQuery(
    $housing: HousingInput!,
    $transportation: TransportationInput!,
    $waste: WasteInput!
  ) {
    housing(input: $housing) {
      electricity {
        carbonEmissions
        metric
      }
      naturalGas {
        carbonEmissions
        metric
      }
      heatingOil {
        carbonEmissions
        metric
      }
      propane {
        carbonEmissions
        metric
      }
    }
    transportation(input: $transportation) {
      personalVehicle {
        carbonEmissions
        metric
      }
    }
    waste(input: $waste) {
      personalEmissions {
        carbonEmissions
        metric
      }
    }
  }
`

export default CarbonEmissions;
