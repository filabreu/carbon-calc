import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
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
          path="/home-energy"
          element={
            <div>
              Home Energy
            </div>
          }
        />
        <Route
          path="/transportation"
          element={
            <div>
              Transportation
            </div>
          }
        />
        <Route
          path="/waste"
          element={
            <div>
              Waste
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
