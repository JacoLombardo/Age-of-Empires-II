import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import LogIn from "./views/Login/LogIn";
import DetailedCiv from "./views/DetailedCiv";
import DetailedUnit from "./views/DetailedUnit";
import Register from "./views/Login/Register";
import Favourites from "./views/Favourites";
import NoMatch from "./views/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";
import Civilizations from "./components/Civilizations/Civilizations";
import Units from "./components/Units/Units";
import Structures from "./components/Structures/Structures";
import Technologies from "./components/Technologies/Technologies";
import { AuthContextProvider } from "./context/AuthContext";
import { PaginationContextProvider } from "./context/PaginationContext";
import { FavouriteContextProvider } from "./context/FavouriteContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FavouriteContextProvider>
        <PaginationContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/civilizations" element={<Civilizations />} />
            <Route path="/civilizations/civilization-:id" element={<DetailedCiv />} />
            <Route path="/units" element={<Units />} />
            <Route path="/units/unit-:id" element={<DetailedUnit />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/structures" element={<Structures />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favourites/unit-:id" element={<ProtectedRoute><DetailedUnit /></ProtectedRoute>} />
            <Route path="/favourites/civilization-:id" element={<ProtectedRoute><DetailedCiv /></ProtectedRoute>} />
            <Route path="/favourites" element={<ProtectedRoute><Favourites /></ProtectedRoute>} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </PaginationContextProvider>
        </FavouriteContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
