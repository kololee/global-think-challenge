# Use the official Node.js image as base
FROM node:20.11

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run the application
CMD ["npm", "run", "start:dev"]
