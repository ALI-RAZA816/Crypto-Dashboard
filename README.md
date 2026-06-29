# 💹 Crypto Dashboard

A sleek, dark-themed cryptocurrency dashboard built with **React** and **Vite**. It provides a portfolio overview, price/graph tracking, a transaction history view, and a support/contact page — all wrapped in a modern, responsive UI.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Screenshots

<!--
Replace the paths below with the actual path to your screenshots once you've
added them to the repo. See the "Adding Screenshots to This README" section
at the bottom of this file for step-by-step instructions.
-->

| Dashboard | Transactions | Support |
|:---:|:---:|:---:|
|![Dashboard](https://github.com/ALI-RAZA816/Crypto-Dashboard/blob/34be0bac4b67899405cf5d82f48e345e5ed11e6d/crypto_dashboard_screenshot1.PNG) | 
![Transactions](https://github.com/ALI-RAZA816/Crypto-Dashboard/blob/34be0bac4b67899405cf5d82f48e345e5ed11e6d/crypto_dashboard_screenshot2.PNG) | 
![Support](https://github.com/ALI-RAZA816/Crypto-Dashboard/blob/34be0bac4b67899405cf5d82f48e345e5ed11e6d/crypto_dashboard_screenshot3.PNG) |

---

## ✨ Features

- **Dashboard (Home) Page**
  - Total portfolio value and wallet balance overview
  - Deposit / Withdraw quick-action buttons
  - Live-style price chart with 1H / 1D / 1W / 1M timeframe tabs
  - Buy / Sell action buttons
  - Promotional info cards (Loans, Contact/Real-estate services)
- **Transactions Page**
  - Filterable tabs — All, Deposit, Withdraw, Trade — with live counts
  - Search by transaction ID or destination
  - Sortable table headers (Date & Time, Amount)
  - Transaction history list with status badges (Pending, Processing, Completed)
- **Support Page**
  - Contact form (Name, Surname, Email, Message)
  - Live chat / chatbot promotional section
- **Global UI**
  - Collapsible sidebar navigation with active-route highlighting
  - Responsive top header with page title and user/login toggle
  - Fully responsive, dark "luxury" themed design

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Library | [React 19](https://react.dev/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Routing | [React Router DOM 5](https://v5.reactrouter.com/) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Styling | CSS Modules |
| Linting | ESLint 9 |

---

## 📂 Project Structure

```
Crypto-Dashboard/
├── public/
│   └── images/                # Static images used in the graph/footer sections
├── src/
│   ├── Component/
│   │   ├── Header/             # Top navigation bar
│   │   ├── Sidebar/            # Collapsible side navigation
│   │   └── Pages/
│   │       ├── Page1/          # Dashboard: TopBox, GraphGrid, FooterBox
│   │       ├── Page2/          # Transactions: TopHeader, SecondHeader, Transactions
│   │       └── Page3/          # Support: Contact, BottomText
│   ├── App.jsx                 # Root component & route definitions
│   ├── App.css
│   ├── main.jsx                 # App entry point
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/Crypto-Dashboard.git

# Move into the project directory
cd Crypto-Dashboard

# Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with hot reload |
| `npm run build` | Builds the app for production into the `dist/` folder |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs ESLint across the project |

---

## 🧭 Routes

| Path | Page |
|---|---|
| `/` | Dashboard |
| `/transactions` | Transactions |
| `/support` | Support |

---

## 🗺️ Roadmap / Ideas for Future Improvements

- [ ] Connect to a live crypto price API (e.g., CoinGecko)
- [ ] Add real authentication (login/logout is currently UI-only)
- [ ] Make transaction data dynamic (currently static/mock data)
- [ ] Add unit tests
- [ ] Upgrade to React Router v6+

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — feel free to use it for learning or personal projects.

---

## 👤 Author

**Ali Raza**

---

## 🖼️ Adding Screenshots to This README

Since a README lives in your GitHub repo, images need to either be committed to the repo or hosted somewhere with a public URL. Here are two easy ways to do it:

### Option A — Commit the images to your repo (recommended)

1. In your local project folder, create a new folder named `screenshots` at the root (same level as `src/` and `package.json`):
   ```bash
   mkdir screenshots
   ```
2. Copy your screenshot files into that folder, e.g.:
   ```
   screenshots/dashboard.png
   screenshots/transactions.png
   screenshots/support.png
   ```
3. Reference them in the README using a **relative path**:
   ```markdown
   ![Dashboard](./screenshots/dashboard.png)
   ```
4. Commit and push:
   ```bash
   git add screenshots README.md
   git commit -m "Add screenshots to README"
   git push
   ```
   GitHub will automatically render the images once the files exist in the repo — no extra setup needed.

### Option B — Drag and drop directly on GitHub.com (quickest, no local git needed)

1. Go to your repository on GitHub and open the file editor for `README.md` (click the pencil ✏️ icon).
2. Click into the description/edit box, then simply **drag and drop your screenshot image** into the text area (or click "Add files" if editing via the file view).
3. GitHub uploads the image to its CDN and automatically inserts a Markdown line like:
   ```markdown
   ![dashboard](https://github.com/user-attachments/assets/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
   ```
4. Move/edit that generated line into wherever you want it to appear (e.g., the Screenshots section), then commit the change.

> 💡 Tip: Keep image file sizes reasonably small (compress PNG/JPG) so your README loads quickly. A width around 800–1200px is usually plenty for a README screenshot.

Once you've added your images using either method, update the `Screenshots` table at the top of this README to point to your actual filenames.