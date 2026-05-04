import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { useLenis } from "lenis/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ThankyouPage from "./pages/ThankyouPage";
import Legal from "./pages/Legal";
import Referrals from "./pages/Referrals";
import BookCall from "./pages/BookCall";
import Collaborate from "./pages/Collaborate";
import Stories from "./pages/Stories";
import Therapy from "./pages/Therapy";

gsap.registerPlugin(ScrollTrigger);

function LenisRouteManager() {
  const { pathname } = useLocation();

  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useLayoutEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

const App = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <ReactLenis root>
      <LenisRouteManager />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ReactLenis>
  );
};

export default App;
