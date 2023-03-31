import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
