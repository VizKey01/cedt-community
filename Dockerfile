# Stage 1: Building the application
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --production

# Copy the rest of your application code
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Serve the application
FROM node:20-alpine as runner

# Set the working directory
WORKDIR /app

# Copy over the built artifacts from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose the port Next.js runs on
EXPOSE 3000

# Set the command to start the node server
CMD ["npm", "start"]
