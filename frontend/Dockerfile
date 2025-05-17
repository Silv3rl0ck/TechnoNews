FROM node:20-alpine
WORKDIR /app

# Only copy package.json
COPY package.json ./

# Install dependencies via npm
RUN npm install

# Copy the rest of your source
COPY . .

# Build and start
RUN npm run build
CMD ["npm", "start"]
