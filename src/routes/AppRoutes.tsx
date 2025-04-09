import { Navigate, Route, Routes } from "react-router-dom";
import UserProtectedRoute from "./UserProtectedRoute";
import AppLayout from "./AppLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Profile from "../pages/Profile";
import UserDetails from "../pages/UserDetails";
import Addresses from "../pages/Addresses";
import Collection from "../pages/Collection";
import Orders from "../pages/Orders";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Search from "../pages/Search";
import Checkout from "../pages/Checkout";
import Wishlist from "../pages/Wishlist";
import UpdatePassword from "../pages/UpdatePassword";
import OrderConfirmation from "../pages/OrderConfirmation";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <UserProtectedRoute>
                    <AppLayout />
                </UserProtectedRoute>
            }>
                <Route index element={<Home />} />
                <Route path="product/:productItemId" element={<Product />} />
                <Route path="order/:orderId" element={<Order />} />
                <Route path="user" element={<Profile />}>
                    <Route index element={<Navigate to="profile" replace />} />
                    <Route path="profile" element={<UserDetails />} />
                    <Route path="addresses" element={<Addresses />} />
                    <Route path="orders" element={<Order />} />
                </Route>
                <Route path="collection/:collectionSlug" element={<Collection />} />
                <Route path="orders" element={<Orders />} />
                <Route path="cart" element={<Cart />} />
                <Route path="shop" element={<Shop />} />
                <Route path="search" element={<Search />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="order-confirm" element={<OrderConfirmation />} />
                {/* update password need auth */}
                <Route path="update-pass" element={<UpdatePassword />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
