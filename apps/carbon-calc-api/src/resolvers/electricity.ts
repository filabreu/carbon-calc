const electricityResolver = (_, args) => {
  const { consumption, householdPeople } = args;

  const carbonEmissions = parseInt(consumption) * 0.8523 * 12 / parseInt(householdPeople);

  return ({ carbonEmissions, metric: 'lbs' });
}
