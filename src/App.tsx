import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
import GlobalStyle from "./styles/Globalstyles"
import AppLayout from "./ui/AppLayout"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Register from "./pages/Register"
import Shop from "./pages/Shop"
import Category from "./pages/Category"
import Profile from "./pages/Profile"
import Orders from "./pages/Orders"
import Order from "./pages/Order"
import Wishlist from "./pages/Wishlist"
import Search from "./pages/Search"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="order/:orderId" element={<Order />} />
            <Route path="category/:categoryId" element={<Category />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
            <Route path="search" element={<Search />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
