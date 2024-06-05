const Waste = (_, args) => {
  const { input: { recyclePaper, recyclePlastic, recycleMetal, recycleGlass } } = args;

  return ({
    personalEmissions: () => {
      // Calculate waste total emissions based on recycling habits
      let totalCO2lbs = 692;

      if (recyclePaper) {
        totalCO2lbs -= 113.14;
      }

      if (recyclePlastic) {
        totalCO2lbs -= 35.56;
      }

      if (recycleMetal) {
        totalCO2lbs -= 89.38;
      }

      if (recycleGlass) {
        totalCO2lbs -= 25.39;
      }

      const carbonEmissions = Math.floor(totalCO2lbs);

      return ({ carbonEmissions, metric: 'lbs' });
    },
  });
}

export default Waste;
