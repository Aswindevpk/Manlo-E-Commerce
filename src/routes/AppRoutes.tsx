import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import UserProtectedRoute from "./UserProtectedRoute";
import AppLayout from "./AppLayout";
import SpinnerFullPage from "./SpinnerFullPage";



const Product = lazy(() => import("../pages/Product"));
const Order = lazy(() => import("../pages/Order"));
const Profile = lazy(() => import("../pages/Profile"));
const Account = lazy(() => import("../pages/Account"));
const Addresses = lazy(() => import("../pages/Addresses"));
const Collection = lazy(() => import("../pages/Collection"));
const Orders = lazy(() => import("../pages/Orders"));
const Cart = lazy(() => import("../pages/Cart"));
const Shop = lazy(() => import("../pages/Shop"));
const Search = lazy(() => import("../pages/Search"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const UpdatePassword = lazy(() => import("../pages/UpdatePassword"));
const OrderConfirmation = lazy(() => import("../pages/OrderConfirmation"));




function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <UserProtectedRoute>
                    <Suspense fallback={<SpinnerFullPage />}>
                        <AppLayout />
                    </Suspense>
                </UserProtectedRoute>
            }>
                <Route index element={<Shop />} />
                <Route path="product/:productSlug" element={<Product />} />
                <Route path="order/:orderId" element={<Order />} />
                <Route path="user" element={<Profile />}>
                    <Route index element={<Navigate to="account" replace />} />
                    <Route path="account" element={<Account />} />
                    <Route path="addresses" element={<Addresses />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="orders/:orderId" element={<Order />} />
                </Route>
                <Route path="collection/:collectionSlug" element={<Collection />} />
                <Route path="cart" element={<Cart />} />
                <Route path="search" element={<Search />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="order-confirm" element={<OrderConfirmation />} />
                <Route path="update-pass" element={<UpdatePassword />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
