
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TireWear from "./pages/TireWear";
import RazvalSkhozhdenie from "./pages/RazvalSkhozhdenie";
import RemontHodovoy from "./pages/RemontHodovoy";
import ZapravkaKondicionera from "./pages/ZapravkaKondicionera";
import RemontRulevyhReek from "./pages/RemontRulevyhReek";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tire-wear" element={<TireWear />} />
          <Route path="/razvalskhozhdenie" element={<RazvalSkhozhdenie />} />
          <Route path="/remont-hodovoy" element={<RemontHodovoy />} />
          <Route path="/zapravka-kondicionera" element={<ZapravkaKondicionera />} />
          <Route path="/remont-rulevyh-reek" element={<RemontRulevyhReek />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;