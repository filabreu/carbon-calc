import { Route, Routes, Link } from 'react-router-dom';

import { FormsDataProvider } from './context/forms-data-context';
import StartPage from './pages/start';
import HomeEnergyPage from './pages/home-energy';
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
              <Link to="/home-energy">Home Energy</Link>
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
            path="/home-energy"
            element={<HomeEnergyPage />}
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
