import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FazendaJurema from "./pages/FazendaJurema.tsx";
import AeronaveBaronB58 from "./pages/AeronaveBaronB58.tsx";
import LinksPage from "./pages/LinksPage.tsx";
import PropertiesPage from "./pages/PropertiesPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fazenda-jurema" element={<FazendaJurema />} />
          <Route path="/aeronave-baronb58" element={<AeronaveBaronB58 />} />
          <Route path="/imoveis" element={<PropertiesPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
