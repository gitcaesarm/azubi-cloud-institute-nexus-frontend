Azubi Cloud Institute Nexus Frontend
Overview: This repository contains the ReactJS frontend application for the Azubi Cloud Institute Nexus platform. The application is designed to run in a Docker container, ensuring consistency across different development and deployment environments.

Prerequisites
Before getting started, ensure you have the following installed on your system:

Git: For cloning the project repository.
Docker: For building and running the application inside a container.
Node.js: (Optional) Required only if you want to run the app locally before containerization.

Setup Guide

1. Clone the Repository
clone https://github.com/azubi-cloud-institute/nexus-frontend.git
cd nexus-frontend

2. Local Development Setup (Optional)
If you wish to run the application locally before containerization:
npm install
npm start

This will start the React application on http://localhost:3000.

3. Environment Configuration
Create a .env file in the project root directory to set up environment variables:
# .env
REACT_APP_NEBULA_BACKEND_API_URL=https://api.azubi-cloud.institute

Ensure these variables are correctly referenced in your React application using process.env.REACT_APP_NEBULA_BACKEND_API_URL.


4. Building the Docker Image
Build the Docker image for the Azubi Cloud Institute Nexus frontend:
docker build -t azubi/nexus-frontend:latest .
This command tags the image as azubi/nexus-frontend:latest. Adjust the tag as needed for your specific use case or versioning strategy.

5. Running the Docker Container
Start a container using the built image:
docker run -d -p 3000:5000 azubi/nexus-frontend:latest

This command:

Runs the container in detached mode (-d)
Maps port 3000 on the host to port 5000 in the container (-p 3000:5000)
Uses the image we built in step 4

6. Accessing the Application
Once the container is running, access the Azubi Cloud Institute Nexus frontend at:
http://localhost:3000
