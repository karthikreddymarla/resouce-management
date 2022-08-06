import logo from "./logo.svg";
import HomePage from "./resource-management-admin-portal/homepage/HomePage";
import ResourcePage from "./resource-management-admin-portal/resourcepage/ResourcePage";
import AddResourceItemPage from "./resource-management-admin-portal/addresourceitempage/AddResourceItemPage";
import "./App.css";
import Layout from "./resource-management-admin-portal/Layout";
import AllRoutes from "./resource-management-admin-portal/AllRoutes";

function App() {
  return (
    <div className="App">
      <Layout>
        <AllRoutes />
      </Layout>
    </div>
  );
}

export default App;
