import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./_root/pages";
import { Signinform, Signupform } from "./_auth/forms";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <main className="flex m-auto max-w-[1440px] h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Signinform />} />
          <Route path="/sign-up" element={<Signupform />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </main>
  );
}

export default App;
