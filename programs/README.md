# 📦 VaultX Programs (Solana Anchor Workspace)

This directory contains all **on-chain programs (smart contracts)** for VaultX, built using the **Anchor framework on Solana**.

These programs are responsible for:

* Managing user deposits
* Executing strategy-based trades
* Tracking vault shares
* Enforcing security & risk rules

---

## 🧠 Overview

VaultX uses a **modular multi-program architecture**:

```
programs/
│
├── strategy_vault/     # Core vault logic (funds, shares, deposits, withdrawals)
├── strategy_registry/  # Strategy storage & management
└── utils/              # Shared helpers (math, validation, fees)
```

Each folder is an independent **Anchor program**, but all live inside a **single workspace**.

---

## ⚙️ Tech Stack

* **Solana**
* **Rust**
* **Anchor Framework**
* **SPL Token Program**
* **PDA (Program Derived Addresses)**

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure you have installed:

```bash
solana --version
anchor --version
rustc --version
node --version
```

If not:

* Install Solana CLI → [https://docs.solana.com/cli/install-solana-cli-tools](https://docs.solana.com/cli/install-solana-cli-tools)
* Install Anchor → [https://www.anchor-lang.com/docs/installation](https://www.anchor-lang.com/docs/installation)

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Build Programs

```bash
anchor build
```

---

### 4️⃣ Run Tests

```bash
anchor test
```

---

### 5️⃣ Deploy to Localnet

```bash
solana-test-validator
```

In another terminal:

```bash
anchor deploy
```

---

## 🧱 Programs Explained

---

### 🔐 1. strategy_vault

> Core contract that holds user funds and manages vault logic.

#### Responsibilities:

* Accept user deposits
* Mint vault shares
* Handle withdrawals
* Track total assets
* Execute trades (via backend trigger)
* Enforce risk rules

#### Key Concepts:

* **Vault Account (PDA)** → Stores total funds
* **User Position (PDA)** → Tracks user shares
* **Shares System** → Represents ownership

#### Example Flow:

```
User deposits SOL/USDC
   ↓
Vault mints shares
   ↓
Backend executes trades
   ↓
Vault value changes
   ↓
User withdraws based on shares
```

---

### 📊 2. strategy_registry

> Stores and manages trading strategies.

#### Responsibilities:

* Register new strategies
* Store strategy metadata
* Enable/disable strategies
* Validate strategy rules

#### Example Data:

```json
{
  "name": "RSI Strategy",
  "entry": "rsi < 30",
  "exit": "rsi > 70",
  "risk_level": "medium"
}
```

#### Notes:

* Actual execution happens **off-chain (Django)**
* This program ensures **on-chain transparency**

---

### 🧰 3. utils

> Shared utilities used across programs.

#### Includes:

* Math calculations (shares, fees)
* Validation helpers
* Constants
* Risk checks

#### Why separate?

* Avoid code duplication
* Keep programs clean
* Reusable across all vault logic

---

## 🔑 Core Concepts

---

### 📍 PDA (Program Derived Address)

VaultX uses PDAs for secure account management:

Examples:

* Vault PDA → stores funds
* User PDA → stores user shares
* Strategy PDA → stores strategy data

---

### 🪙 Vault Shares Model

Instead of tracking raw balances:

* Users receive **shares**
* Vault value changes based on trading
* Withdraw = proportional to shares

---

### 🔄 CPI (Cross Program Invocation)

Programs interact with each other:

* `strategy_vault` → calls `strategy_registry`
* `strategy_vault` → uses `utils`

---

## 🔐 Security Design

* ✅ No private key stored on-chain
* ✅ PDA-based access control
* ✅ Role-based execution (backend bot)
* ✅ Emergency pause (to be implemented)
* ✅ Safe math operations

---

## 🔄 How It Works (End-to-End)

```
1. User deposits funds into vault
2. Vault issues shares
3. Backend (Django) reads strategy
4. Backend triggers on-chain execution
5. Vault interacts with DEX (future CPI)
6. Profits/loss reflected in vault value
7. User withdraws based on shares
```

---

## 🧪 Testing

Tests are located in:

```
tests/
```

Run:

```bash
anchor test
```

---

## 🌐 Deployment

### Localnet

```bash
solana-test-validator
anchor deploy
```

### Devnet

```bash
solana config set --url devnet
anchor deploy
```

---

## ⚠️ Important Notes

* This is an **experimental DeFi system**
* Not audited — do NOT use real funds
* Strategy execution is hybrid (off-chain + on-chain)
* DEX integration (Jupiter/Orca) will be added

---

## 🛣️ Future Improvements

* DEX CPI integration (Jupiter)
* Multi-token vaults
* Strategy NFTs
* DAO governance
* Advanced risk engine

---

## 🤝 Contributing

* Fork the repo
* Create a feature branch
* Submit a PR

---

## 📄 License

MIT License

---

