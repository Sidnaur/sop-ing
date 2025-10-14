import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { AuthProvider } from "./hooks/use-auth";
import HomePage from "./pages/home-page";
import NotFound from "./pages/not-found";
import AuthPage from "./pages/auth-page";
import OrderManagementPage from "./pages/order-management";
import { ProtectedRoute } from "./lib/protected-route";
import CafeteriaInventory from "./pages/cafeteria-inventory";
import CustomerFeedback from "./pages/customer-feedback";
import SettingsPage from "./pages/settings";
import Analytics from "./pages/analytics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={AuthPage} />
      <ProtectedRoute path="/dashboard" component={HomePage} />
      <ProtectedRoute path="/orders" component={OrderManagementPage} />
      <ProtectedRoute path="/inventory" component={CafeteriaInventory} />
      <ProtectedRoute path="/feedback" component={CustomerFeedback} /> 
      <ProtectedRoute path="/settings" component={SettingsPage} />
      <ProtectedRoute path="/analytics" component={Analytics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;