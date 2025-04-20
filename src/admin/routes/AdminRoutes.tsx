import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import AdminLayout from "./AdminLayout";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import Settings from "../pages/Settings";
import Categories from "../pages/Categories";
import Attributes from "../pages/Attributes";
import Product from "../pages/Product";
import Variant from "../pages/Variant";
import Category from "../pages/Category";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedAdminRoute>
          <AdminLayout />
        </ProtectedAdminRoute>}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="categories" element={<Categories />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="attributes" element={<Attributes />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="variant/:variantId" element={<Variant />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
