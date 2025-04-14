import { HashRouter as Router, Route, Routes } from "react-router-dom"
import GlobalStyle from "./styles/Globalstyles"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from 'react-hot-toast';

import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Signup from "./pages/Signup"
import VerifyOtp from "./pages/VerifyOtp"
import ForgotPassword from "./pages/ForgotPassword"
import AdminLogin from "./admin/pages/AdminLogin"


import AdminRoutes from "./admin/routes/AdminRoutes"
import AppRoutes from "./routes/AppRoutes"


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
        {/* Hashrouter for git */}
        <Router>
          <Routes>
            {/* Main Protected Routes (Normal user routes) */}
            <Route path="/*" element={<AppRoutes />}></Route>

            {/* Admin Dashboard Routes */}
            <Route path="admin/*" element={<AdminRoutes />}></Route>

            {/* Auth Routes - Redirect authenticated users */}
            <Route path="login" element={<Login />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verify-otp" element={<VerifyOtp />} />
            <Route path="forgot-pass" element={<ForgotPassword />} />

            {/* 404 Page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
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
