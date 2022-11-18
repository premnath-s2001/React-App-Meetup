import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

import Layout from "./components/layout/Layout";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <Layout>
      {/* path after the domain like https://localhost.com/...... */}

      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourite" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
