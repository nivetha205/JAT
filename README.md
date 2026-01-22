<div align="center">
  <img width="1200" height="475" alt="Job Application Tracker Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 📌 Job Application Tracker – Backend API

A **Job Application Tracker backend** built from scratch using **Node.js and NestJS**, designed to help users manage and track their job applications efficiently with secure authentication and clean architecture.

---

## 📖 Project Overview

Final-year students and job seekers often apply to multiple companies and struggle to track application statuses, notes, and progress.  
This project provides a **RESTful backend API** that allows users to register, authenticate securely, and manage job applications with different statuses.

The backend is built using **Node.js fundamentals** and structured with **NestJS** to ensure scalability, maintainability, and clean code practices.

---

## 🎯 Features

- User Registration & Login
- JWT-based Authentication
- Secure password hashing using bcrypt
- Create, Read, Update, Delete (CRUD) job applications
- Track application status:
  - Applied
  - Interview
  - Offer
  - Rejected
- Modular and scalable backend architecture

---

## 🛠️ Tech Stack

- **Runtime:** Node.js  
- **Framework:** NestJS  
- **Language:** TypeScript  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** bcrypt  
- **Configuration:** Environment variables (.env)  
- **API Style:** RESTful APIs  

---

## 🧱 Backend Architecture

The project follows a **modular architecture**:

- **Controllers** – Handle HTTP requests & responses  
- **Services** – Business logic  
- **Modules** – Feature-based organization  
- **DTOs** – Request validation and data control  
- **Config Module** – Environment-specific configuration  

This structure ensures **loose coupling** and **easy scalability**.

---

## 🔐 Authentication & Security

- Secure user login and registration
- Passwords hashed using **bcrypt**
- Stateless authentication using **JWT**
- Protected routes for authenticated users only
- Sensitive data managed via environment variables

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

---

### Installation

```bash
npm install


<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1gjy7ddPtgmlJV8pOy6RTRNOO5V6MCBAW

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
