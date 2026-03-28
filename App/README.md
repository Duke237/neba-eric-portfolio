# NEBA ERIC SUH - Portfolio

Full-stack portfolio project with:
- `App/src/server.js`: Node.js + Express backend
- `App/client`: Vite + React frontend

## Requirements
- Node.js 18+
- npm

## Install

From the `App` folder:

```bash
npm install
npm --prefix client install
```

## Environment Variables

Create these files:

1. `App/.env`
2. `App/client/.env`

Use the provided examples:

```bash
copy .env.example .env
copy client\.env.example client\.env
```

## Run In Development (2 terminals)

Terminal 1 (backend):

```bash
npm run dev:server
```

Terminal 2 (frontend):

```bash
npm run dev:client
```

Open `http://localhost:5173`.

Backend health route: `http://localhost:3000/api/health`

## Production-style Run

```bash
npm run build
npm start
```

Open `http://localhost:3000`.
