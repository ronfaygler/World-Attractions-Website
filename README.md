# 🌍 World Attractions Web App

This is a full-stack web application built as part of QueenB’s Summer Camp, developed by a team of junior developers under the guidance of an industry mentor.

The project showcases world attractions with search, filtering, and user authentication features. Each team member was responsible for specific components while collaborating using Git and GitHub.

## ✨ Features
- Attractions display and browsing  
- Search functionality  
- Filtering and sorting options  
- User authentication and secure login  
- Content upload interface  

## 🧠 What I Worked On
- Attractions display pages and components  
- Filtering and sorting functionality  
- Full-stack collaboration and Git workflow  

<img width="602" height="248" alt="attractions_website" src="https://github.com/user-attachments/assets/07119e83-9133-418b-bed1-cb9bed7c93f2" /> 
<img width="602" height="207" alt="attractions_website2" src="https://github.com/user-attachments/assets/d3e9436b-cdf9-4509-aad0-a752fa37dc3e" />

## 🛠 Tech Stack
- Frontend: React  
- Backend: Node.js, Express  
- Database: MongoDB  
- Tools: Git, GitHub  

## 📦 Installation

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/en) (version 20.x or higher)  
- npm (version 10.x or higher)  
- MongoDB (Atlas recommended)  

### Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### Server Setup
```bash
cd server
npm install
```

### Client Setup

Navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Server Environment Variables

Create a `.env` file in the `server` directory and add the following:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-db-name>?retryWrites=true&w=majority
CLIENT_URL=http://localhost:3000
PORT=5000
```
### Client Environment Variables

Create a `.env` file in the `client` directory and add the following:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚀 Usage

### Run the Server

Navigate to the `server` directory and start the server:

```bash
cd server
npm run dev
```

### Run the Client

Navigate to the `client` directory and start the client:

```bash
cd client
npm start
```

### 📫 Contact

Email: ronfaygler@gmail.com

LinkedIn: https://www.linkedin.com/in/ronfaygler
