# Talksy - Real-Time Chat App

Talksy is a full-stack real-time chat application built with React, Express, Socket.io, and MongoDB. It supports user authentication, online presence, and instant messaging.

## Features

- User signup, login, and profile update
- Real-time messaging with Socket.io
- Online users indicator
- Responsive UI (mobile & desktop)
- Toast notifications for actions
- Avatar/profile picture support

## Tech Stack

- **Frontend:** React, Zustand, Vite, Socket.io-client, react-hot-toast
- **Backend:** Express, MongoDB, Socket.io
- **Other:** Cloudinary (for profile pics), dotenv, cookie-parser, cors

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Brxj19/talksy.git
cd talksy
```

#### 2. Install dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

#### 3. Environment Variables

Create `.env` files in both `backend` and `frontend` folders.

**Backend `.env` example:**
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_URL=your_cloudinary_url
```

**Frontend `.env` example (optional):**
```
VITE_API_URL=http://localhost:5001/api
```

#### 4. Start the servers

**Backend:**
```bash
npm run dev
```

**Frontend:**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
Talksy/
  backend/
    src/
      index.js
      controller/
      lib/
      middleware/
      models/
      routes/
      seeds/
  frontend/
    src/
      components/
        skeletons/
      constants/
      pages/
      store/
      lib/
      assets/
      main.jsx
    index.html
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Deployment

- The backend serves the frontend build in production mode.
- Update CORS and environment variables for your deployment.

## License

MIT

---

**Made with ❤️ by Brxj19