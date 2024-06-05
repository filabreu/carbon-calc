import Housing from './housing';
import Transportation from './transportation';
import Waste from './waste';

const resolvers = {
  Query: {
    housing: Housing,
    transportation: Transportation,
    waste: Waste,
  }
};

export default resolvers;
