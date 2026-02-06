import { Bot, Crown, Rocket, X } from "lucide-react";
import { menuItems } from "../appData/sidebar";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
}) {
  return (
    <div
      className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-80 bg-white/10 backdrop-blur-2xl border-r border-white/20 transform transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-19 px-8 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Bot className="h-7 w-7 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              TradeBot
            </h1>
            <p className="text-xs text-white/60 font-medium">
              PREMIUM STRATEGY
            </p>
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-8 px-6 space-y-2">
        {menuItems.map((items) => {
          return (
            <button
              key={items.id}
              className={`w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden 
          ${activeTab === items.id ? "bg-white/20 text-white shadow-2xl scale-105" : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-110"}`}
              onClick={() => {
                setActiveTab(items.id);
                setSidebarOpen(true);
              }}
            >
              {activeTab === items.id && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${items.grandient} opacity-30 rounded-2xl`}
                ></div>
              )}

              <div
                className={`p-2 rounded-xl bg-gradient-to-r mr-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${items.grandient}`}
              >
                <items.icon className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold relative z-10">{items.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
          {/* Glow circle */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/80 to-transparent rounded-full transform translate-x-10 -translate-y-10" />

          {/* Content */}
          <div className="relative">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl">
                <Crown />
              </div>
              <div>
                <h3 className="text-white font-bold">ULTRA PRO APPS</h3>
                <p className="text-white/60 text-xs">Advanced Technology</p>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-500 ">
              <Rocket className="w-4 h-4 inline mr-2" />
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
