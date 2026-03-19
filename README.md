# VaultX – Non-Custodial DeFi Strategy Platform

> **VaultX** is a non-custodial DeFi platform that allows users to deposit funds directly from their wallets into on-chain strategy vaults built on **Solana**. Each vault follows a predefined or AI-driven trading strategy executed by a backend engine, while users always retain ownership of their funds.

VaultX supports **Web (Next.js)**, **Mobile (React Native)**, **Solana Smart Contracts (Anchor)**, and a **Django-based AI/strategy engine**, making it a complete production-grade Web3 system.

---

## 🌟 Why VaultX?

* ❌ No custodial app wallet
* ✅ Funds always stay on-chain (Solana)
* ⚡ High-speed & low-cost transactions
* 📊 Multiple trading strategies
* 🧩 User-created + AI strategies
* 📱 Mobile-first + Web dashboard
* 🔍 Fully transparent & verifiable

---

## 🧠 Core Concept (Simple Flow)

```
User Wallet (Phantom / Solflare)
   ↓ deposit
Strategy Vault (Solana Program - Anchor)
   ↓
Backend AI Engine (Django)
   ↓
DEX (Jupiter / Raydium / Orca)
```

* Users deposit funds directly into vault programs
* Vault issues shares representing ownership
* Backend evaluates strategies (rule-based / AI)
* Trades executed on-chain via Solana programs
* Users can withdraw anytime based on share value

---

## 🏗️ Full System Architecture

```
Web App (Next.js) ───────┐
                         ├─→ API Layer (Next.js API Routes)
Mobile App (React Native)┘
                               ↓
                      Strategy & AI Engine (Django)
                               ↓
                      Execution Workers (Celery)
                               ↓
                    Solana Programs (Anchor Vaults)
                               ↓
                  DEX Aggregators (Jupiter / Orca)
```

---

## 🧱 Tech Stack

### 🌐 Web Frontend

* Next.js (App Router)
* TypeScript / JavaScript
* Tailwind CSS
* Solana Wallet Adapter
* Zustand / React Query
* Charting (ECharts / Recharts)

### 📱 Mobile App

* React Native (Expo)
* WalletConnect / Solana Mobile Stack
* Solana Web3.js

### 🔐 Smart Contracts (Solana)

* Rust (Anchor Framework)
* Solana Programs (Vault logic)
* SPL Tokens
* PDA-based vault architecture

### 🧠 Backend (AI & Strategy Engine)

* Django
* Django REST Framework
* Celery + Celery Beat
* Redis
* AI/ML strategy modules (future-ready)
* Web3 interaction via Solana RPC

### 🗄️ Databases

* **MongoDB** → Used by Next.js (user data, UI state, caching, analytics)
* **PostgreSQL** → Used by Django (strategies, execution logs, AI models, trades)

---

## 📦 Repository Structure

```
vaultx/
│
├── programs/               # Solana Anchor programs
│   ├── strategy_vault/
│   ├── strategy_registry/
│   └── utils/
│
├── backend/                # Django AI & execution engine
│   ├── core/
│   ├── strategies/
│   ├── execution/
│   ├── ai/
│   ├── risk/
│   ├── users/
│   ├── manage.py
│   └── requirements.txt
│
├── web/                    # Web frontend (Next.js)
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── web3/
│   ├── models/             # MongoDB models
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

VaultX uses **rule-based + AI-driven strategies**.

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

* Strategies evaluated off-chain (Django AI engine)
* Trades executed on-chain (Solana programs)
* Future-ready for ML/AI models

---

## 👤 Strategy Types

### 1️⃣ Platform Strategies

* Created & maintained by VaultX
* Audited and risk-managed

### 2️⃣ User-Created Strategies

* Users define strategies via Web/Mobile UI
* Stored & validated via Django backend
* Future: monetization + strategy NFTs

---

## 🔐 Security Principles

* ❌ No centralized custody
* ✅ Funds only stored in Solana programs
* ✅ PDA-based secure vault design
* ✅ Role-based execution control
* ✅ Emergency pause & withdrawal
* ✅ Strategy-level risk limits

---

## 🔄 Backend Execution Flow

```
Scheduler (Celery Beat)
   ↓
Fetch Market Data (DEX / APIs)
   ↓
AI / Rule Evaluation
   ↓
Risk Management Checks
   ↓
Trigger Solana Transaction
   ↓
Execute Trade via Vault Program
   ↓
Store Logs (PostgreSQL)
```

---

## 🛣️ Development Roadmap

### Phase 1 – Core

* Anchor-based vault programs (Solana)
* Django strategy engine
* Next.js dashboard
* Wallet integration (Phantom)

### Phase 2 – User Power

* User-created strategies
* Mobile app
* Advanced analytics
* MongoDB integration

### Phase 3 – Advanced

* AI-powered strategies
* DAO governance
* Strategy NFTs
* Cross-chain expansion

---

## ⚠️ Disclaimer

This project is for **educational and experimental purposes only**.
Crypto trading involves risk. Do not use real funds without audits and security reviews.

---

## 🤝 Contributing

Contributions are welcome via issues and pull requests.

---

## 📄 License

MIT License

---

