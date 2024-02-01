import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Canvas from "./pages/canvas/Canvas";

const App = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
