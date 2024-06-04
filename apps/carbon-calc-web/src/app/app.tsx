import { Route, Routes, Link } from 'react-router-dom';

import { FormsDataProvider } from './context/forms-data-context';
import StartPage from './pages/start';
import HousingPage from './pages/housing';
import TransportationPage from './pages/transportation';
import WastePage from './pages/waste';

export function App() {
  return (
    <FormsDataProvider>
      <div>
        {/* START: routes */}
        <div role="navigation">
          <ul>
            <li>
              <Link to="/housing">Housing</Link>
            </li>
            <li>
              <Link to="/transportation">Transportation</Link>
            </li>
            <li>
              <Link to="/waste">Waste</Link>
            </li>
          </ul>
        </div>
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
        </Routes>
        {/* END: routes */}
      </div>
    </FormsDataProvider>
  );
}

export default App;
