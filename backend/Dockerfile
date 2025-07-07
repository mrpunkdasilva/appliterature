# Stage 1: Base image with all dependencies
FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Stage 2: Build the application
FROM base AS build
WORKDIR /usr/src/app
COPY . .
RUN npm run build

# Stage 3: Production image
FROM node:20-alpine AS production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /usr/src/app/dist ./dist
CMD ["node", "dist/main"]