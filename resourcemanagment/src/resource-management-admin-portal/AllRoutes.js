import HomePage from "./homepage/HomePage";
import ResourcePage from "./resourcepage/ResourcePage";
import AddResourceItemPage from "./addresourceitempage/AddResourceItemPage";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/resource-page/:id" element={<ResourcePage />} />
        <Route
          exact
          path="/add-item-resource-page"
          element={<AddResourceItemPage />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
