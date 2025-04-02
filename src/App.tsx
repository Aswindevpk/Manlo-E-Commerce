import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import GlobalStyle from "./styles/Globalstyles"


import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
import AppLayout from "./ui/AppLayout"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Shop from "./pages/Shop"
import Profile from "./pages/Profile"
import Orders from "./pages/Orders"
import Order from "./pages/Order"
import Wishlist from "./pages/Wishlist"
import Search from "./pages/Search"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import ProtectedRoute from "./features/Auth/ProtectedRoute"
import Signup from "./pages/Signup"
import { Toaster } from 'react-hot-toast';
import Addresses from "./pages/Addresses"
import UserDetails from "./pages/UserDetails"
import Collection from "./pages/Collection"
import VerifyOtp from "./pages/VerifyOtp"



//React query config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 5
      // staleTime: 0
    }
  }
})

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Home />} />
              <Route path="product/:productItemId" element={<Product />} />
              <Route path="order/:orderId" element={<Order />} />
              <Route path="user" element={<Profile />}>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={<UserDetails/>} />
                <Route path="addresses" element={<Addresses/>} />
                <Route path="orders" element={<Order/>} />
              </Route>
              <Route path="collection/:collectionSlug" element={<Collection />} />
              <Route path="orders" element={<Orders />} />
              <Route path="cart" element={<Cart />} />
              <Route path="shop" element={<Shop />} />
              <Route path="search" element={<Search />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verify-otp" element={<VerifyOtp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000
            },
            error: {
              duration: 5000
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-gray-0)',
              color: 'var(--color-gray-700)'
            }
          }}
        />
      </QueryClientProvider>
    </>
  )
}

export default App
