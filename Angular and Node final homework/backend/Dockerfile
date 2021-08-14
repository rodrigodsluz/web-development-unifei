# Create image based on the official Node 10 image from the dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /backend

# Change directory so that our commands run inside this new directory
WORKDIR /backend

# Copy dependency definitions and entrypoint
COPY package*.json /backend/
COPY node-entrypoint.sh /backend/

# Expose the port the app runs in
EXPOSE 3001

# Specifies a command that will always be executed when the container starts.
CMD ["sh", "node-entrypoint.sh"]