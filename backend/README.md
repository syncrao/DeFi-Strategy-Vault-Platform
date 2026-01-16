## ⚙️ Environment Setup

Create a `.env` file in the **project root** (same level as `manage.py`).

### Example `.env`

```env
SECRET_KEY=your-secret-key-here
DATABASE=postgres://username:password@localhost:5432/dbname
```

### Notes

* `SECRET_KEY` → Django secret key
* `DATABASE` → Database URL supported by `dj-database-url`

#### Database URL Examples

**PostgreSQL**

```
postgres://user:password@host:5432/dbname
```

**SQLite (for local testing)**

```
sqlite:///db.sqlite3
```

---

## 📦 Install Dependencies

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## 🔧 Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## ▶️ Run Server

```bash
python manage.py runserver
```

Server will start at:

```
http://127.0.0.1:8000/
```

---

## 🔐 Authentication

JWT Authentication is enabled using **SimpleJWT**.

Token lifetimes:

* Access Token: **10 minutes**
* Refresh Token: **7 days**

---

## 📡 API Endpoints

### 1️⃣ Wallet Ping API

**Endpoint**

```
POST /user/wallet/
```

**Purpose**

* Creates a user if wallet does not exist
* Returns existing user if wallet already exists

**Request Body (JSON)**

```json
{
  "wallet_address": "0x123abc..."
}
```

**Response**

```json
{
  "wallet_address": "0x123abc...",
  "created": true
}
```

* `created: true` → New user created
* `created: false` → User already existed

**❌ Error Response**

If wallet address is missing:

```json
{
  "error": "wallet_address is required"
}
```

Status Code: **400 BAD REQUEST**

---

## 📌 Notes

* `DEBUG=True` is enabled for development only
* `ALLOWED_HOSTS = ["*"]` should be restricted in production

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Built for Web3 / wallet-based authentication systems using Django.
