# Use Node.js LTS
FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json from backend folder
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all backend files
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
