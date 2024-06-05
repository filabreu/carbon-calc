import Housing from './housing';
import Transportation from './transportation';

const resolvers = {
  Housing,
  Transportation,
  Query: {
    housing: () => Housing,
    transportation: () => Transportation,
  }
};

export default resolvers;
