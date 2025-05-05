import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import LegalPage from "@/pages/LegalPage";

function App() {
  return (
    <TooltipProvider>
      <MainLayout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/legal" component={LegalPage} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
