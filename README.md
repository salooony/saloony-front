# 💅 Saloony Frontend

Saloony is a modern salon management platform built with [Next.js 15](https://nextjs.org/) and [MUI](https://mui.com/), featuring server-side rendering, Turbopack, and multi-language support.

## ⚙️ Requirements

- [Docker](https://www.docker.com/) (required)
- [Node.js](https://nodejs.org/) 22.x
- [npm](https://www.npmjs.com/)

---

## 🧰 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/saloony-front.git
   cd saloony-front
   ```

2. **Create a `.env` file** at the project root — use the `.env.example` file as a reference for required variables.

3. **Start the application using Docker Compose**:

   ```bash
   docker compose up --build
   ```

> This will automatically build the image and start the frontend container on port **3000** (or the `PORT` value set in `.env`, defaults to `3000`).

---

## 📄 Environment Variables

Saloony frontend uses a `.env` file to configure the app.

### Example:

```env
# App
NEXT_PUBLIC_VERSION=v3.5.1

# Backend API URL
NEXT_PUBLIC_API_URL=https://your-api-url/

# Next Auth
NEXTAUTH_URL=http://localhost:3000/
NEXT_PUBLIC_NEXTAUTH_SECRET=your-secret
```

---

## 🐳 Running with Docker

1. **First time — build and start**:

   ```bash
   docker compose up --build
   ```

2. **Every time after**:

   ```bash
   docker compose up
   ```

3. **Stop the container**:

   ```bash
   docker compose down
   ```

> Only re-run `--build` when `package.json` or `Dockerfile.dev` changes.

> Next.js is started with `--hostname 0.0.0.0` so it binds to all interfaces inside the container, not just localhost. Port is set via `--port $PORT` reading from `.env`.

---

## 🌐 App URL

After starting the container, the app is available at:

```
http://localhost:3000
```

> Port is controlled by `PORT` in `.env` — defaults to `3000` if not set.

---

## 🧪 Scripts (for container development only)

Run scripts manually inside the container:

```bash
docker exec -it saloony-front npm run lint
docker exec -it saloony-front npm run build
```

> Dependencies are installed with `npm ci` inside the image — faster and deterministic, based strictly on `package-lock.json`.
