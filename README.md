# VaultX – Non-Custodial DeFi Strategy Platform

> **VaultX** is a non-custodial DeFi platform that allows users to deposit funds directly from their wallets into on-chain strategy vaults. Each vault follows a predefined trading strategy executed automatically by a backend bot, while users always retain ownership of their funds.

VaultX supports **Web (Vite + React)**, **Mobile (React Native)**, **Smart Contracts**, and a **Django-based execution backend**, making it a complete, production-grade Web3 system.

---

## 🌟 Why VaultX?

* ❌ No custodial app wallet
* ✅ Funds always stay on-chain
* 📊 Multiple trading strategies
* 🧩 User-created strategies
* 📱 Mobile-first + Web dashboard
* 🔍 Fully transparent & verifiable

---

## 🧠 Core Concept (Simple Flow)

```
User Wallet
   ↓ deposit
Strategy Vault (Smart Contract)
   ↓
Backend Executor (Django + Celery)
   ↓
DEX (Uniswap / PancakeSwap)
```

* Users deposit funds directly into vault contracts
* Vault issues shares representing ownership
* Backend bot executes trades based on strategy rules
* Users can withdraw anytime based on share value

---

## 🏗️ Full System Architecture

```
Web App (Vite + React) ─┐
                        ├─→ Django REST API
Mobile App (React Native)┘
                              ↓
                       Strategy Executor (Celery)
                              ↓
                     Smart Contracts (Vaults)
                              ↓
                        DEX (On-chain Trading)
```

---

## 🧱 Tech Stack

### 🌐 Web Frontend

* Vite + React + JavaScript
* Wagmi
* WalletConnect
* Charting libraries (ECharts)

### 📱 Mobile App

* React Native (Expo)
* JavaScript
* WalletConnect v2
* Ethers.js

### 🔐 Smart Contracts

* Solidity (EVM compatible)
* Hardhat
* OpenZeppelin
* Target Chains: Arbitrum

### 🧠 Backend (Execution Engine)

* Django
* Django REST Framework
* Celery + Celery Beat
* Redis
* Web3.py
* CCXT (optional market data)

### 🗄️ Database

* PostgreSQL

---

## 📦 Repository Structure

```
vaultx/
│
├── contracts/              # Solidity smart contracts
│   ├── StrategyVault.sol
│   ├── StrategyRegistry.sol
│   └── roles/
│
├── backend/                # Django backend
│   ├── core/
│   ├── strategies/
│   ├── execution/
│   ├── risk/
│   ├── users/
│   ├── manage.py
│   └── requirements.txt
│
├── web/                    # Web frontend (Vite + React)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── web3/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── app/                    # Mobile app (React Native)
│   ├── src/
│   ├── screens/
│   ├── components/
│   └── wallet/
│
├── docs/                   # Architecture & diagrams
├── .env.example
└── README.md
```

---

## 🧩 Strategy System

VaultX uses **rule-based strategies** (AI-ready for future).

### Example Strategy Definition

```json
{
  "entry": "rsi < 30",
  "exit": "rsi > 70",
  "stop_loss": 5,
  "take_profit": 10,
  "max_trade_size": 2
}
```

* Strategies evaluated off-chain
* Trades executed on-chain
* Same system can later plug in AI models

---

## 👤 Strategy Types

### 1️⃣ Platform Strategies

* Created & maintained by VaultX
* Verified and risk-limited

### 2️⃣ User-Created Strategies

* Users define strategies via Web/Mobile UI
* Backend validates and deploys
* Future: profit-sharing & strategy NFTs

---

## 🔐 Security Principles

* ❌ No app-owned wallet
* ✅ Funds only in smart contracts
* ✅ Executor role for backend bot
* ✅ Emergency pause & withdraw
* ✅ Strategy-level risk limits

---

## 🔄 Backend Execution Flow

```
Scheduler (Celery Beat)
   ↓
Fetch Market Data
   ↓
Evaluate Strategy Rules
   ↓
Risk Management Checks
   ↓
Execute Trade via Smart Contract
   ↓
Log Trades & Update PnL
```

---

## 🛣️ Development Roadmap

### Phase 1 – Core

* Strategy vault smart contracts
* Django execution engine
* Basic Web dashboard

### Phase 2 – User Power

* User-created strategies
* Mobile app
* Advanced analytics

### Phase 3 – Advanced

* AI strategies
* DAO governance
* Strategy NFTs
* Cross-chain vaults

---

## ⚠️ Disclaimer

This project is for **educational and experimental purposes only**. Crypto trading involves risk. Do not deploy with real funds without proper audits.

---

## 🤝 Contributing

Contributions are welcome via issues and pull requests.

---

## 📄 License

MIT License
