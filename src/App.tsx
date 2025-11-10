import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Campuses from "./pages/Campuses";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <WhatsAppFloat />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
