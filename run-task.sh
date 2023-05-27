# Install dependencies
echo "Installing dependencies..."
npm install
echo "Dependencies installed successfully!"

# Setup env
ENV_CONTENT="API_LINK=https://jsonplaceholder.typicode.com/users
AUTH_USERNAME=nextlevel
AUTH_PASSWORD=studio"
echo "$ENV_CONTENT" > .env
echo ".env file created successfully!"

# Run project
echo "Running project..."
nest start dev
