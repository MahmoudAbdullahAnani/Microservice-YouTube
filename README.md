# Microservices Project with NestJS

This project demonstrates a Microservices architecture built using [NestJS](https://nestjs.com/) framework. It consists of three main services: **User**, **Product**, and the **Backend Gateway**. This project structure provides a scalable foundation for building applications that require separate services for handling different aspects of the system.

> This project was demonstrated and explained in detail on my [YouTube Channel](https://www.youtube.com/@MahmoudAbdullahAnani).

---

## 📜 Table of Contents
- [Project Overview](#project-overview)
- [Microservices Structure](#microservices-structure)
  - [User Service](#user-service)
  - [Product Service](#product-service)
  - [Backend Gateway](#backend-gateway)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Video Explanation](#video-explanation)
- [License](#license)

---

## 📝 Project Overview

This project is structured to show the benefits of the **Microservices** architecture. Each service runs independently, managing its data and tasks, and communicates with other services through HTTP and message queues (or similar protocols). This setup allows easy scaling, modularity, and separate deployment for each service, making it ideal for complex applications with varied functionalities.

---

## ⚙️ Microservices Structure

### User Service
Handles all functionalities related to user management, such as:
- User Registration
- User Login and Authentication
- User Profile Management

### Product Service
Manages all actions related to products, including:
- Product Creation
- Product Listing and Details
- Inventory and Stock Management

### Backend Gateway
Acts as a central entry point, routing requests to the appropriate microservice and handling cross-service communication. It includes:
- Central API Gateway for routing and authentication
- Communication bridge between User and Product services

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- NestJS CLI
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MahmoudAbdullahAnani/Microservice-YouTube.git
   cd microservices-nestjs
