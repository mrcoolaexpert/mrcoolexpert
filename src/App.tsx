import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
import { Suspense, lazy, useEffect } from "react"; // Added useEffect
import { Loader2 } from "lucide-react";

// LAZY LOAD PAGES
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Brands = lazy(() => import("./pages/Brands"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// NEW: Import the Location Page
const Kangeyam = lazy(() => import("./pages/locations/Kangeyam"));

const queryClient = new QueryClient();

// 1. Create the ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Triggers whenever the URL path changes

  return null;
};

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-slate-50">
    <Loader2 className="h-10 w-10 animate-spin text-primary" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        {/* 2. Place ScrollToTop inside BrowserRouter but outside Routes */}
        <ScrollToTop />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* SEO Route for Kangeyam Location */}
            <Route path="/ac-service-kangeyam" element={<Kangeyam />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
