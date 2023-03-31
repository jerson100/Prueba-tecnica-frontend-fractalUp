import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumsPage from "../../../pages/AlbumsPage";
import SearchPage from "../../../pages/SearchPage";
import NotFound from "../../commons/NotFound";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index path="/" element={<SearchPage />} /> */}
          <Route path="/canciones" element={<SearchPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
