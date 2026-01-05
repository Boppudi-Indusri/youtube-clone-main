Folder structure


youtube-clone-main/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── channelController.js
│   │   ├── videoController.js
│   │   └── commentController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Channel.js
│   │   ├── Video.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── channelRoutes.js
│   │   ├── videoRoutes.js
│   │   └── commentRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── AuthPage.jsx
│   │   │   └── authService.js
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── CategoryBar.jsx
│   │   │   ├── VideoCard.jsx
│   │   │   └── VideoGrid.jsx
│   │   ├── data/
│   │   │   └── videos.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Watch.jsx
│   │   │   └── Channel.jsx
│   │   ├── styles/
│   │   │   ├── header.css
│   │   │   ├── watch.css
│   │   │   └── home.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── index.html
│
└── README.md








Backend API Endpoints
🔐 Authentication
POST   /api/auth/register
POST   /api/auth/login

📺 Videos
GET    /api/videos
POST   /api/videos
PUT    /api/videos/:id
DELETE /api/videos/:id

📂 Channels
POST   /api/channels
GET    /api/channels/:id

💬 Comments
POST   /api/comments
GET    /api/comments/:videoId
DELETE /api/comments/:id   (Only owner)
PUT    /api/comments/:id   (Only owner)

🗄 Database (MongoDB)

Collections:

users

channels

videos

comments

Stored Data:

Video URL

Thumbnail URL

Title, description

User & channel references

▶️ How to Run the Project

Backend API Endpoints
🔐 Authentication
POST   /api/auth/register
POST   /api/auth/login

📺 Videos
GET    /api/videos
POST   /api/videos
PUT    /api/videos/:id
DELETE /api/videos/:id

📂 Channels
POST   /api/channels
GET    /api/channels/:id

💬 Comments
POST   /api/comments
GET    /api/comments/:videoId
DELETE /api/comments/:id   (Only owner)
PUT    /api/comments/:id   (Only owner)

🗄 Database (MongoDB)

Collections:

users

channels

videos

comments

Stored Data:

Video URL

Thumbnail URL

Title, description

User & channel references

▶️ How to Run the Project

Backend
cd backend
npm install
node server.js

2️⃣ Frontend
cd frontend
npm install
npm run dev

🧪 API Testing

Use Thunder Client or Postman:

Test authentication

Test video upload

Test comments CRUD

🔐 Permissions Logic

Only logged-in users can comment

Only comment owner can edit/delete their comment

Other users cannot modify comments

📌 Notes

MongoDB connected using MongoDB Compass

JWT stored in localStorage

YouTube videos embedded via iframe

👨‍💻 Author
Boppudi Indu Sri
YouTube Clone Project
Built for learning MERN Full-Stack Development



