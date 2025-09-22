import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import TouristManagement from "./pages/TouristManagement";
import Alerts from "./pages/Alerts";
import Heatmaps from "./pages/Heatmaps";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/login"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
         
          <Route path="/login" element={<Login />} />

          
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tourists" element={<TouristManagement />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/heatmaps" element={<Heatmaps />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            {/* Catch-all for unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
