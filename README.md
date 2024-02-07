# schmitt-global-think-challenge

## Introduction

This repository contains the code for my submission to the Technical Challenge provided by Global Think Technology. The challenge consists of creating a simple REST API to evaluate different programming aspects and the ability to solve problems. Some of the requirements are:
- API REST design
- Data manipulation
- Error handling

## Technologies
The required technologies for this challenge are:
- Node.js: in this case, I used the NestJS framework, which is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- React: I used Vite as a build tool for the React application. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Mantine was used as a UI library for the frontend application.

Some boilerplate code was taken from the official documentation of the technologies used in order to speed up the development process, and focus on the main requirements of the challenge.

## Installation
There are two main ways to run the application: using Docker or running the applications separately.

For the Docker approach, you need to have Docker and Docker Compose installed on your machine. Then, you can run the following command to start the application:
```bash
$ docker-compose up
```

_**Note:** there seems to be a problem with the Docker approach, as the frontend application is not being built correctly. I am working on fixing this issue. The backend application is running correctly._

For the separate approach, you need to have Node.js and npm (yarn, pnpm) installed on your machine. Then, you can run the following commands to start the applications:
```bash
# Backend
$ cd backend
$ npm install
$ npm run start:dev

# Frontend
$ cd frontend
$ npm install
$ npm run dev
```

Or using yarn for the frontend:
```bash
# Frontend
$ cd frontend
$ yarn
$ yarn dev
```

There is a third alternative, which is to build both applications and run them separately. You can run the following commands to build and start the applications:
```bash
# Backend
$ cd backend
$ npm install
$ npm run build
$ npm run start:prod

# Frontend
$ cd frontend
$ yarn
$ yarn build
$ yarn preview
```

**NOTE:** depending on the ports used by the applications, you may need to change the `API_URL` const in the `./frontend/config.ts` file of the frontend application.

## Usage
After starting the application, if you are using Docker, you can access the frontend application at `http://localhost:3001` and the backend application at `http://localhost:3000`. If you are running the applications separately, you should check the logs to see the ports that the applications are running, but they may be running at `http://localhost:5173` (frontend dev mode) and `http://localhost:3000` (backend dev mode). The production mode ports may be `http://localhost:4173` (frontend) and `http://localhost:3000` (backend).

## API Documentation
The endpoints available in the API are:
- `GET /cars`: returns a collection of cars
- `GET /cars/:id`: returns a car by its id
- `POST /cars`: creates a new car
- `PATCH /cars/:id`: updates a car by its id
- `DELETE /cars/:id`: deletes a car by its id

The car object has the following structure:
```json
{
  "id": "string",
  "brand": "string",
  "version": "string",
  "model": "string",
  "year": "number",
  "engineType": EngineType
}
```

The `EngineType` is an enum with the following values:
```ts
enum EngineType {
  V8 = 'V8',
  V6 = 'V6',
  INLINE_4 = 'INLINE_4',
  INLINE_6 = 'INLINE_6',
}
```

The list of cars is stored in memory, so it is not persistent. The list is initialized with some cars when the application starts.

## Logger
The backend application uses a simple middleware to log the requests. The logs are printed in the console and contain the method, the path, the status, and the response time of the request. It also stores the logs in a file named after the current date in the `./logs` directory, inside the backend application.

## Tests
Coming soon...