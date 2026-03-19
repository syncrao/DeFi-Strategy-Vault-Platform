# 🌐 DeFi Strategy Vault Platform - Frontend

## 📌 Overview

This is the **web frontend** for the DeFi Strategy Vault Platform.
Built with **Next.js**, it provides a modern UI for:

* Wallet connection (Web3)
* Strategy management
* Real-time trading interaction
* AI insights visualization

The frontend communicates with the backend APIs and smart contracts to deliver a seamless **full-stack Web3 experience**.

---

## 🧱 Project Structure

```
web/
│── app/            # Next.js App Router (pages & layouts)
│── components/     # Reusable UI components
│── hooks/          # Custom React hooks
│── lib/            # Utility functions & configs
│── services/       # API calls (backend integration)
│── web3/           # Blockchain interaction logic
│── models/         # MongoDB models (optional usage)
│── package.json
```

---

## ⚙️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript / JavaScript
* **Styling:** Tailwind CSS 
* **Web3:** Solana 
* **State Management:** Zustand
* **Database :** MongoDB

---

## 🔥 Features

### 🔗 Wallet Integration

* Connect crypto wallets (Phantom / MetaMask)
* Sign messages for authentication
* Display wallet address & balance

---

### 📊 Strategy Dashboard

* Create and manage strategies
* View strategy performance
* Monitor execution status

---

### 🤖 AI Insights UI

* Display AI-generated signals
* Visualize predictions and trends
* Show recommendations

---

### ⚡ Execution Interface

* Trigger strategy execution
* View transaction status
* Track on-chain interactions

---

### 🛡️ Risk Visualization

* Display risk metrics
* Portfolio exposure charts
* Alerts for unsafe conditions

---

## 🚀 Getting Started

### 1️⃣ Navigate to frontend

```bash
cd web
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SOLANA_RPC=https://api.devnet.solana.com
```

---

### 4️⃣ Run development server

```bash
npm run dev
```

---

### 5️⃣ Open in browser

```
http://localhost:3000
```

---

## 🔌 Web3 Integration

Frontend interacts with blockchain via:

* Wallet connection (Phantom / MetaMask)
* Transaction signing
* Smart contract calls 

---

## 📡 API Integration

All backend communication is handled via `services/`:

Example:

```
GET /api/strategies/
POST /api/execution/run/
POST /api/risk/check/
```

---

## 🧠 Architecture Overview

```
User (Browser)
     ↓
Next.js Frontend
     ↓
Backend API (Django)
     ↓
Blockchain (Solana)
```

---

## 🔐 Security

* Wallet-based authentication (no passwords)
* Environment variable protection
* Secure API communication

---

## 📈 Future Improvements

* Real-time updates (WebSockets)
* Advanced charts (TradingView integration)
* Multi-wallet support
* Mobile responsive UI improvements
* Dark mode & UX enhancements

---

## 🤝 Contribution

Steps:

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a Pull Request

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Shah Rukh Rao**

---

## 💡 Vision

To create a **user-friendly Web3 interface**
that simplifies complex DeFi strategies and AI-driven trading.

---
