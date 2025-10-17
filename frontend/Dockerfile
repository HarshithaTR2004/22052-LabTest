# Use Node.js LTS image to build React app
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files (src + public)
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight server to serve static files
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
