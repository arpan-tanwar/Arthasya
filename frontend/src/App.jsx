import HomePage from "./layouts/HomePage";
import AboutPage from "./layouts/AboutPage";
import SupportPage from "./layouts/SupportPage";
import LoginPage from "./layouts/LoginPage";
import SignUpPage from "./layouts/SignUpPage";
import NotFoundPage from "./layouts/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollReset from "./utils/ScrollReset";

function App() {
  return (
    <BrowserRouter>
      <ScrollReset>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ScrollReset>
    </BrowserRouter>
  );
}

export default App;
