# Full Stack Portfolio Website

A modern, responsive portfolio website built with Next.js and Express.js.

## Project Structure

```
portfolio-website/
├── frontend/                # Next.js frontend application
│   ├── src/
│   │   ├── app/            # Next.js 14 app directory
│   │   ├── components/     # Reusable React components
│   │   └── lib/           # Utility functions and hooks
│   ├── public/            # Static files
│   └── ...config files
│
└── backend/               # Express.js backend application
    ├── src/
    │   ├── controllers/   # Route controllers
    │   ├── models/        # Database models
    │   ├── routes/        # API routes
    │   ├── middleware/    # Custom middleware
    │   └── index.ts       # Entry point
    └── ...config files
```

## Tech Stack

### Frontend
- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios

### Backend
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- Nodemailer

## Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create environment variables:

Frontend (.env.local):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Backend (.env):
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Development

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Responsive design
- Modern UI/UX
- Portfolio showcase
- Contact form with email notifications
- Blog section (optional)
- Admin dashboard (optional)
- SEO optimized
- Performance optimized

## Deployment

### Frontend
The frontend can be deployed to Vercel:
```bash
cd frontend
vercel
```

### Backend
The backend can be deployed to various platforms like Heroku, DigitalOcean, or AWS.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 