# 🔗 Shortly - MERN URL Shortener

A modern, secure, and responsive Bitly-like URL shortener built using the **MERN stack**, with features like:
- ✂️ URL shortening
- 🔐 Auth (Email/Password + Google Sign-In)
- 📸 QR Code generation
- 📊 Link analytics (future scope)
---

## ⚙️ Tech Stack

- **Frontend:** React, Axios, Firebase (Google Auth), QRCode.react
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT
- **Middleware:** Rate limiting, Input sanitization
- **Deployment:** Render (backend) + Netlify (frontend)

---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| 🔐 Authentication | Email/Password login & Google Sign-In using Firebase |
| ✂️ Shorten URLs | Generate unique short links using `nanoid` |
| 📸 QR Code | Auto-generate QR code for each shortened URL |
| 🧼 Input Sanitization | Secure user inputs |
| 🚫 Rate Limiting | Protects from abuse with Express Rate Limit |
| 🔓 Protected Access | Only logged-in users can shorten URLs |
| 💅 Responsive UI | Clean, modern modal-based UI with full mobile support |
| ⏳ Future Scope | User dashboard, link analytics, expiry, Stripe limits |

---

## 📦 Folder Structure
```
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Header, Footer, Auth Modal, QR, etc.
│ │ ├── contexts/ # AuthContext
│ │ ├── pages/ # (Dashboard - future)
│ │ └── utils/ # Axios instance
├── configs/ # MongoDB connection
├── middlewares/ # JWT, rateLimiter, sanitizeInput
├── models/ # URL & User models
├── routes/ # Auth + URL routes
├── service/ # URL shortening + redirect logic
├── repository/ # DB operations
└── server.js # Main Express app
```

---

## 🔐 Auth Flow

- JWT-based auth (stored in `localStorage`)
- Firebase-powered Google Sign-In
- AuthContext to persist login across refreshes

---


---

## 🌐 Live Demo

👉 [Launch the App](https://shortly.netlify.app)

---

