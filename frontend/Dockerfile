# Stage 1: Build the Angular app
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built Angular app
COPY --from=build /app/dist/book-network-ui /usr/share/nginx/html

# Copy custom Nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add a placeholder config file
RUN mkdir -p /usr/share/nginx/html/assets/config
COPY src/assets/config/config.json /usr/share/nginx/html/assets/config/config.json

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
