
# Use an official Node.js runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build your React app
RUN npm run build

# Use a lightweight HTTP server to serve your app
FROM nginx:alpine

# Copy the built app from the previous stage into the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the nginx server will use
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
