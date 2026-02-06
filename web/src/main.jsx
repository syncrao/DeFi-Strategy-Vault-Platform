import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { WagmiProvider } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config } from "./utils/wagmi.js";
import { chains } from "./utils/chainConfig.js";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId: import.meta.env.VITE_REOWN_PROJECT_ID,
  chains,
   themeVariables: {
    "--w3m-accent": "#0ea5e9",
    "--w3m-border-radius-master": "14px"
  }
});

createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </WagmiProvider>
);
