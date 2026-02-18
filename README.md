# FixBuddy MVP

Production-ready MVP scaffold for a blue-collar skill marketplace built with Next.js 14, TypeScript, Tailwind, Framer Motion, Zustand, MongoDB/Mongoose, NextAuth, and Socket.io.

## Features
- Role-based experiences: worker, customer, admin
- Protected dashboard routes with middleware
- Modular Mongoose models and REST API routes
- Smart worker sorting by availability, rating, and distance
- Animated, mobile-first UI with premium glassmorphism
- Seed script with dummy data

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set environment variables in `.env.local`:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/fixbuddy
   NEXTAUTH_SECRET=replace-me
   NEXTAUTH_URL=http://localhost:3000
   ```
3. Seed data:
   ```bash
   npm run seed
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/workers`
- `GET /api/workers/:id`
- `PATCH /api/workers/:id`
- `POST /api/bookings`
- `PATCH /api/bookings/:id/status`
- `GET /api/bookings/user/:id`
- `POST /api/reviews`

## Notes
- OTP flow is mocked through credentials for MVP simplicity.
- Socket server helper is included for live status integration.
- Mapbox/Google Maps can be wired in customer home with worker location coordinates.
