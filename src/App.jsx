import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ThankyouPage from "./pages/ThankyouPage";
import Legal from "./pages/Legal";
import Referrals from "./pages/Referrals";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
    </>
  );
};

export default App;
