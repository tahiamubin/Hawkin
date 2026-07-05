# 🐾 Hawkin — PawFeet Pet Adoption Platform

A full-stack **MERN** Pet Adoption Platform that connects loving homes with pets in need. Browse pets, view detailed profiles, submit adoption requests, and manage listings — all through a secure, authenticated web experience.

**Live Site:** [pawfeet-client.vercel.app](https://pawfeet-client.vercel.app/)
**Repository:** [github.com/tahiamubin/Hawkin](https://github.com/tahiamubin/Hawkin)

---

## 📖 Overview

Hawkin (branded as **PawFeet / Pawfect Home**) is a real-world pet adoption portal built for Bangladesh's pet-loving community. The platform allows users to:

- Explore pets available for adoption — dogs, cats, birds, rabbits, and more
- View detailed pet profiles including health records, vaccination status, and behaviour assessments
- Submit and track adoption requests through a personal dashboard
- List pets for adoption (for shelters and individual owners) and manage incoming requests

The goal is to make the adoption journey **simple, transparent, and joyful** — from first browse to forever home.

---

## ✨ Features

### For Adopters
- 🔍 Browse and filter pets by species, age, size, and temperament
- 🐕 Detailed pet profile pages with photos, health, and vaccination info
- 📝 Submit adoption requests with a single click
- 📊 Personal dashboard to track the status of all submitted requests
- 👤 Profile management

### For Pet Owners / Shelters
- ➕ Add new pets for adoption with full profile details
- 📋 Manage active listings
- ✅ Review and respond to incoming adoption requests

### Platform-Wide
- 🔐 Secure user authentication (sign up / sign in)
- 🌐 Responsive, modern UI across devices
- ⚡ Fast, server-rendered pages for optimal performance

---

## 🛠️ Tech Stack

**Client (this repository)**
- [Next.js](https://nextjs.org/) (React framework)
- JavaScript
- Tailwind CSS (utility-first styling)

**Backend**
- Node.js & Express.js
- MongoDB (Mongoose)
- JWT-based authentication
- RESTful, secured API endpoints

**Deployment**
- Client hosted on [Vercel](https://vercel.com/)

> This repository contains the **client-side application**. It communicates with a backend REST API for authentication, pet data, and adoption request management.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm / yarn / pnpm / bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/tahiamubin/Hawkin.git
   cd Hawkin
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables

   Create a `.env.local` file in the root directory and add the required variables (e.g. backend API base URL, auth keys):
   ```env
   NEXT_PUBLIC_API_BASE_URL=your_backend_api_url
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📂 Project Structure

```
Hawkin/
├── public/
│   └── images/          # Static assets
├── src/                 # Application source code (pages, components, routes)
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🌍 Live Demo

Check out the live application here: **[pawfeet-client.vercel.app](https://pawfeet-client.vercel.app/)**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/tahiamubin/Hawkin/issues) or open a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for educational and personal use.

---

## 💌 Contact

Made with ❤️ for animals across Bangladesh.
Email: info@pawfecthome.com