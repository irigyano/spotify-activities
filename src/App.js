import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Layout from "./components/Layout/Layout";
import { SpotifyUserContextProvider } from "./contexts/SpotifyUserContext";

const App = () => {
  return (
    <SpotifyUserContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SpotifyUserContextProvider>
  );
};

export default App;
