import axios from 'axios';

describe('POST /graphql', () => {
  it('should return housing emissions', async () => {
    const query = `
      query HousingEmissions(
        $electricConsumption: Int!,
        $heatingOilConsumption: Int!,
        $naturalGasConsumption: Int!,
        $propaneConsumption: Int!,
        $householdPeople: Int!
      ) {
        housing {
          electricity(consumption: $electricConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
          heatingOil(consumption: $heatingOilConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
          naturalGas(consumption: $naturalGasConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
          propane(consumption: $propaneConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
        }
      }
    `;

    const res = await axios.post(
      `/graphql`,
      {
        query,
        variables: {
          electricConsumption: 3000,
          heatingOilConsumption: 450,
          naturalGasConsumption: 600,
          propaneConsumption: 0,
          householdPeople: 4,
        },
      }
    );

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      "data": {
        "housing": {
          "electricity": {
            "carbonEmissions": 16910,
            "metric": "lbs",
          },
          "heatingOil": {
            "carbonEmissions": 30323,
            "metric": "lbs",
          },
          "naturalGas": {
            "carbonEmissions": 21059,
            "metric": "lbs",
          },
          "propane": {
            "carbonEmissions": 0,
            "metric": "lbs",
          },
        },
      },
    });
  });

  it('should consider household people in calculations', async () => {
    const query = `
      query HousingEmissions(
        $electricConsumption: Int!,
        $heatingOilConsumption: Int!,
        $naturalGasConsumption: Int!,
        $propaneConsumption: Int!,
        $householdPeople: Int!
      ) {
        housing {
          electricity(consumption: $electricConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
          heatingOil(consumption: $heatingOilConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
          naturalGas(consumption: $naturalGasConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
          propane(consumption: $propaneConsumption, householdPeople: $householdPeople) {
            carbonEmissions
            metric
          }
        }
      }
    `;

    const res = await axios.post(
      `/graphql`,
      {
        query,
        variables: {
          electricConsumption: 3000,
          heatingOilConsumption: 450,
          naturalGasConsumption: 600,
          propaneConsumption: 0,
          householdPeople: 3,
        },
      }
    );

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      "data": {
        "housing": {
          "electricity": {
            "carbonEmissions": 22547,
            "metric": "lbs",
          },
          "heatingOil": {
            "carbonEmissions": 40431,
            "metric": "lbs",
          },
          "naturalGas": {
            "carbonEmissions": 28079,
            "metric": "lbs",
          },
          "propane": {
            "carbonEmissions": 0,
            "metric": "lbs",
          },
        },
      },
    });
  });
});
