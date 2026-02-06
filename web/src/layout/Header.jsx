import { Bell, Menu, Search, Wallet } from "lucide-react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useChainId, useDisconnect } from "wagmi";
import { getChainById } from "../utils/chainConfig";
import { useState } from "react";

export default function Header({ setSidebarOpen }) {
  const { open } = useWeb3Modal();
  const chainId = useChainId();
  const { address, isConnected } = useAccount();
  const chain = getChainById(chainId);

  const { disconnect } = useDisconnect();
  const [connecting, setConnecting] = useState(false);

  return (
    <div className="bg-white/10 px-6 py-2 border-b border-white/20  backdrop-blur-xl">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-cemter space-x-4">
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-2 w-96 group hover:bg-white/20 transition-all duration-300">
            <Search className="h-5 w-5 text-white/50 mr-3 group-hover:text-white/70 transition-all" />
            <input
              type="text"
              placeholder="Search Anything with AI....."
              className="bg-transparent text-white placeholder-white/50 focus:outline-none flex-1"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="relative p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-0 -right-0 h-5 w-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={async () => {
                if (connecting) return;

                setConnecting(true);

                try {
                  await disconnect();

                  localStorage.removeItem("walletconnect");
                  localStorage.removeItem("wagmi.store");
                  localStorage.removeItem("wagmi.cache");

                
                  setTimeout(() => {
                    open();
                    setConnecting(false);
                  }, 300);
                } catch (err) {
                  open();
                  setConnecting(false);
                }
              }}
              className="flex items-center space-x-3  bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 cursur-pointer group"
            >
              <div className="text-right ">
                <p className="text-white font-semibold">
                  {isConnected
                    ? `${address.slice(0, 4)}...${address.slice(-4)}`
                    : "Connect"}
                </p>
                <p className="text-white/60 text-xs">
                  {isConnected
                    ? `${chain?.name ?? "Unknown Network"}`
                    : "Wallet"}
                </p>
              </div>
              <div className="relative">
                <Wallet className="text-white font-bold w-8 h-8" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
