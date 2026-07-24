# Project 4: Express Integration & Cloud Deployment

## Project Overview
This project transforms a static front-end dashboard into a full-stack web application powered by a custom Node.js & Express.js backend. It features dynamic REST API endpoints, request-logging middleware, error handling, loading states, and cloud environment variable configuration.

## Features & Implementation
- **Express Back-End:** Serves JSON responses through `/api/items` using both GET and POST endpoints.
- **Middleware:** Utilizes `express.json()` for parsing incoming data and custom request-logging middleware.
- **Front-End Integration:** Asynchronously consumes live back-end endpoints using modern `fetch` requests with built-in loading states and error handling.
- **Environment Variables:** Dynamically loads configuration properties using `process.env.GREETING` and `process.env.PORT`.
- **UI/UX Enhancements:** Includes loading notifications, error messages, interactive data cards, and a toggleable bookmark/favorite feature.

## Deployment Steps (Render)
1. Push the code repository containing `server.js`, `package.json`, `index.html`, `dashboard_project.js`, and `style.css` to GitHub.
2. Link the repository to a new Web Service on Render.
3. Configure the build command as `npm install` and start command as `node server.js`.
4. Navigate to the **Environment** tab in Render and add:
   - **Key:** `GREETING`
   - **Value:** `Hello from Render!`
5. Save changes to trigger an automated live deployment.