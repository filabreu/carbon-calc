import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import { useFormsData } from '../context/forms-data-context';

const CarbonEmissionsPage: React.FC = () => {
  const {
    formsData: { start, housing, transportation, waste },
    resetFormsData,
  } = useFormsData();

  const housingInput = {
    householdPeople: start.householdPeople ?? 0,
    electricityConsumption: housing.electricity ?? 0,
    naturalGasConsumption: housing.naturalGas ?? 0,
    heatingOilConsumption: housing.heatingOil ?? 0,
    propaneConsumption: housing.propane ?? 0,
  };

  const transportationInput = {
    milesDriven: transportation.milesDriven ?? 0,
    milesPerGallon: transportation.milesPerGallon ?? 0,
    fuelType: transportation.fuelType ?? 'gasoline',
  };

  const wasteInput = {
    householdPeople: start.householdPeople ?? 0,
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
    <Paper elevation={4}>
      <Box
        my={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={2}
        p={2}
      >
        <Typography variant="h2">Your Carbon Emissions</Typography>
        <Box
          mt={2}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Box>
            <Typography variant="h5">Housing total emissions: {housingTotalEmissions} lbs / year</Typography>
            <Typography variant="h6">Electricity emissions: {data?.housing.electricity.carbonEmissions} lbs / year</Typography>
            <Typography variant="h6">Natural Gas emissions: {data?.housing.naturalGas.carbonEmissions} lbs / year</Typography>
            <Typography variant="h6">Heating Oil emissions: {data?.housing.heatingOil.carbonEmissions} lbs / year</Typography>
            <Typography variant="h6">Propane emissions: {data?.housing.propane.carbonEmissions} lbs / year</Typography>
          </Box>
          <Typography variant="h5">Transportation emissions: {transportationTotalEmissions} lbs / year</Typography>
          <Typography variant="h5">Waste emissions: {wasteTotalEmissions} lbs / year</Typography>
          <Typography variant="h3">Total emissions: {totalEmissions} lbs / year</Typography>
        </Box>
        <Link to="/" onClick={() => resetFormsData() }>
          <Button variant="contained">
            Start Over
          </Button>
        </Link>
      </Box>
    </Paper>
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

export default CarbonEmissionsPage;
