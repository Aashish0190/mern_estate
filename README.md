# MERN Estate

A full-stack real-estate listing application built with MongoDB, Express, React and Node.js. Users can create an account, sign in, browse property listings and manage their own listings.

## Features

- Account registration and sign-in
- Google sign-in integration
- Protected profile and listing-management routes
- Create, update and delete property listings
- Browse individual listings and search listings
- User profile and listing views
- Redux Toolkit and Redux Persist for client-side state management

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, Vite, React Router |
| State management | Redux Toolkit, React Redux, Redux Persist |
| Styling | Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs, cookie-parser |
| Integrations | Firebase Authentication |

## Project Structure

```text
mern_estate/
├── Api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── redux/
├── package.json
└── README.md
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Aashish0190/mern_estate.git
cd mern_estate
```

### 2. Install dependencies

```bash
npm install
npm install --prefix client
```

### 3. Configure environment variables

Create a root `.env` file:

```env
MONGO=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
```

Configure the Firebase web app settings required by the client in `client/.env`. Never commit real credentials or environment files.

### 4. Start the backend

From the repository root:

```bash
npm run dev
```

The API server listens on port `8000`.

### 5. Start the frontend

In a second terminal:

```bash
cd client
npm run dev
```

Open the local Vite URL shown in the terminal.

## API Routes

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/api/auth/signup` | Register an account |
| POST | `/api/auth/signin` | Sign in |
| GET | `/api/auth/signout` | Sign out |
| POST | `/api/listing/create` | Create a listing (authenticated) |
| GET | `/api/listing/get` | Retrieve listings |
| GET | `/api/listing/get/:id` | Retrieve one listing |
| POST | `/api/listing/update/:id` | Update a listing (authenticated) |
| DELETE | `/api/listing/delete/:id` | Delete a listing (authenticated) |

## Current Status

This is a learning and portfolio project. Review the source and configure your own MongoDB and Firebase projects before running it. Deployment, automated tests and further security hardening are areas for continued improvement.

## Author

**Ashish Kumar** · [GitHub](https://github.com/Aashish0190) · [LinkedIn](https://www.linkedin.com/in/ashish-kushwah/)
