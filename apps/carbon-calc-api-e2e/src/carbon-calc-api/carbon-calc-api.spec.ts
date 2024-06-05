import axios from 'axios';

const GET_EMISSIONS_QUERY = `
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
`;

describe('POST /graphql', () => {
  it('should return emissions', async () => {
    const res = await axios.post(
      `/graphql`,
      {
        query: GET_EMISSIONS_QUERY,
        variables: {
          housing: {
            householdPeople: 1,
            electricityConsumption: 450,
            naturalGasConsumption: 35,
            heatingOilConsumption: 18,
            propaneConsumption: 9,
          },
          transportation: {
            milesDriven: 72,
            milesPerGallon: 25,
            fuelType: 'gasoline',
          },
          waste: {
            householdPeople: 1,
            recycleMetal: false,
            recyclePlastic: true,
            recyclePaper: true,
            recycleGlass: false,
          },
        },
      }
    );

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      "data": {
        "housing": {
          "electricity": {
            "carbonEmissions": 10146,
            "metric": "lbs",
          },
          "heatingOil": {
            "carbonEmissions": 4851,
            "metric": "lbs",
          },
          "naturalGas": {
            "carbonEmissions": 4913,
            "metric": "lbs",
          },
          "propane": {
            "carbonEmissions": 1362,
            "metric": "lbs",
          },
        },
        "transportation": {
          "personalVehicle": {
            "carbonEmissions": 2898,
            "metric": "lbs",
          }
        },
        "waste": {
          "personalEmissions": {
            "carbonEmissions": 543,
            "metric": "lbs",
          }
        }
      }
    });
  });

  it('should consider household people in calculations', async () => {
    const res = await axios.post(
      `/graphql`,
      {
        query: GET_EMISSIONS_QUERY,
        variables: {
          housing: {
            householdPeople: 3,
            electricityConsumption: 450,
            naturalGasConsumption: 35,
            heatingOilConsumption: 18,
            propaneConsumption: 9,
          },
          transportation: {
            milesDriven: 72,
            milesPerGallon: 25,
            fuelType: 'gasoline',
          },
          waste: {
            householdPeople: 3,
            recycleMetal: false,
            recyclePlastic: true,
            recyclePaper: true,
            recycleGlass: false,
          },
        },
      }
    );

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      "data": {
        "housing": {
          "electricity": {
            "carbonEmissions": 3382,
            "metric": "lbs",
          },
          "heatingOil": {
            "carbonEmissions": 1617,
            "metric": "lbs",
          },
          "naturalGas": {
            "carbonEmissions": 1637,
            "metric": "lbs",
          },
          "propane": {
            "carbonEmissions": 454,
            "metric": "lbs",
          },
        },
        "transportation": {
          "personalVehicle": {
            "carbonEmissions": 2898,
            "metric": "lbs",
          }
        },
        "waste": {
          "personalEmissions": {
            "carbonEmissions": 543,
            "metric": "lbs",
          }
        }
      }
    });
  });
});
