# Bitcoin Flow Analyzer - Frontend

A modern React/Next.js frontend application for analyzing Bitcoin transaction flows and exchange data visualization.

## 🚀 Overview

This frontend application provides an intuitive dashboard for visualizing Bitcoin flow analysis data. It displays exchange information, transaction patterns, and blockchain analytics through interactive charts and components.

## ⚠️ Important Note

**Backend Status**: The Python backend for this application is currently not hosted. Instead of live backend data, this frontend uses mock data for demonstration purposes.

**Backend Repository**: The corresponding Python backend can be found at:
[https://github.com/GihanEbi/bitcoin-flow-analyzer-backend.git](https://github.com/GihanEbi/bitcoin-flow-analyzer-backend.git)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Data Visualization**: (Charts/graphs for Bitcoin flow analysis)

## 📁 Project Structure

```
├── components/
│   ├── Dashboard.tsx          # Main dashboard component
│   └── ExchangeCard.tsx       # Exchange data visualization card
├── hooks/
│   └── useExchangeData.ts     # Custom hook for exchange data management
├── src/
│   └── app/
│       ├── globals.css        # Global styles
│       ├── layout.tsx         # Root layout
│       └── page.tsx           # Home page
├── types/
│   └── index.ts               # TypeScript type definitions
└── public/                    # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-frontend-repo-url>
cd bitcoin-flow-analyzer-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📊 Features

- **Exchange Data Visualization**: Interactive cards displaying exchange information
- **Dashboard Analytics**: Comprehensive dashboard for Bitcoin flow analysis
- **Responsive Design**: Mobile-friendly interface
- **Mock Data Integration**: Currently uses mock data instead of live backend

## 🔧 Configuration

The application is currently configured to use mock data. When the backend is deployed, you'll need to:

1. Update API endpoints in the data fetching hooks
2. Configure environment variables for backend URL
3. Remove mock data implementations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Related Repositories

- **Backend**: [Bitcoin Flow Analyzer Backend](https://github.com/GihanEbi/bitcoin-flow-analyzer-backend.git)

## 📞 Contact

For questions or support, please open an issue in this repository.