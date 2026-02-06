import { createConfig, http } from "wagmi";
import { walletConnect, metaMask, coinbaseWallet } from "wagmi/connectors";
import { chains } from "./chainConfig"; 

export const config = createConfig({
  chains,
  connectors: [
    metaMask(),
    walletConnect({
      projectId: import.meta.env.VITE_REOWN_PROJECT_ID,
      showQrModal: true
    }),
    coinbaseWallet({
      appName: "Jumper"
    })
  ],
  transports: {
    [chains[0].id]: http(),
    [chains[1].id]: http(),
    [chains[2].id]: http(),
    [chains[3].id]: http()
  }
});
