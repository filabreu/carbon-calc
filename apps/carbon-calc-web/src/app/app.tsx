import { Route, Routes, Link } from 'react-router-dom';
import { Container, Stack, Typography } from '@mui/material';

import { FormsDataProvider } from './context/forms-data-context';
import CarbonEmissionsPage from './pages/carbon-emissions';
import StartPage from './pages/start';
import HousingPage from './pages/housing';
import TransportationPage from './pages/transportation';
import WastePage from './pages/waste';

const API_URL = process.env.GRAPHQL_API_URL ?? 'http://localhost:4000';

export function App() {
  return (
    <FormsDataProvider>
      <Container>
        <Stack spacing={4}>
          {/* START: routes */}
          <Typography variant="h2" align="center">What is your personal carbon footprint?</Typography>
          <Routes>
            <Route
              index
              element={<StartPage />}
            />
            <Route
              path="/housing"
              element={<HousingPage />}
            />
            <Route
              path="/transportation"
              element={<TransportationPage />}
            />
            <Route
              path="/waste"
              element={<WastePage />}
            />
            <Route
              path="/emissions"
              element={<CarbonEmissionsPage />}
            />
          </Routes>
          {/* END: routes */}
        </Stack>
      </Container>
    </FormsDataProvider>
  );
}

export default App;
