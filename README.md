# Arco - Fintech & Wealth Management Mobile App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)

Arco is a full-stack, personal wealth management and forecasting mobile application. It is designed to aggregate live financial data, track real-time transactions, and leverage machine learning to provide intelligent cash-flow forecasting.

## 🚀 About the Project

This project was built to solve the fragmentation in personal wealth tracking by bridging real-time banking data with predictive machine learning models. 

**For Recruiters & Hiring Managers:** 
This repository demonstrates my ability to design and implement a complex, distributed architecture across mobile, backend, and data-science environments. It showcases my focus on secure authentication pipelines, strict relational data modeling for financial systems, and seamless UI/UX engineering.

## ✨ Key Features

*   **Live Bank Integration (Open Banking):** Securely connects to user bank accounts using the **Yodlee FastLink API** to fetch real-time balances and transaction histories.
*   **Predictive Forecasting:** A dedicated Python microservice processes normalized financial data from the backend to run machine learning forecasting algorithms on future cash flows.
*   **Hardware-Backed Security:** Implements a custom auto-login bootstrapping system leveraging device-level, hardware-encrypted keychains for secure JWT session management.
*   **Custom UI Architecture:** Features a bespoke "Capsule Navigation" system utilizing vector icons and smooth transition states driven by `Zustand`.
*   **Enterprise-Grade Data Integrity:** Engineered with a strict relational database architecture (PostgreSQL + Prisma ORM) ensuring ACID compliance—a non-negotiable requirement for financial platforms.

## 🛠 Tech Stack

The application is divided into three distinct environments to ensure separation of concerns and scalable performance:

### Frontend (Mobile)
*   **Framework:** React Native
*   **State Management:** Zustand
*   **Networking:** Axios (with custom interceptors for JWT injection and token refresh)
*   **Local Security:** Hardware-encrypted keychain storage

### Backend (API Server)
*   **Runtime/Framework:** Node.js & Express.js
*   **Database:** PostgreSQL 
*   **ORM:** Prisma
*   **Authentication:** JWT (JSON Web Tokens) with secure cookie/header parsing

### Data Science (Machine Learning)
*   **Language:** Python
*   **Purpose:** Financial forecasting, trend analysis, and data normalization.

## 🏗 Architecture Flow

1.  **Authentication:** The React Native client checks the hardware keychain for a session token during the `App.js` bootstrap phase.
2.  **API Routing:** Valid requests are routed through Express.js middleware to the PostgreSQL database via Prisma.
3.  **Bank Sync:** The backend securely requests a Yodlee access token and passes it to the frontend to launch the FastLink widget. Once authorized, the backend pulls the provider account data.
4.  **Forecasting:** The Node.js backend pushes sanitized, tabular financial data to the Python environment for ML processing and serves the predictive results back to the mobile UI.

## 💻 Local Development Setup

### Prerequisites
*   Node.js (v18+)
*   React Native CLI environment configured (iOS Simulator / Android Emulator)
*   PostgreSQL running locally
*   Yodlee API Developer Credentials
*   Python 3.10+

### Installation

**1. Clone the repository**
```bash
git clone [https://github.com/yourusername/arco-mobile.git](https://github.com/yourusername/arco-mobile.git)
cd arco-mobile
