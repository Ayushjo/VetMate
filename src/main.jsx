import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/user-context.jsx";

const PUBLISHABLE_KEY = "pk_test_YW1wbGUtc2tpbmstNC5jbGVyay5hY2NvdW50cy5kZXYk";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ClerkProvider>
  </BrowserRouter>
);
