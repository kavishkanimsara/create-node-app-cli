# Create My Node App CLI

`Create My Node App` is a CLI tool designed to simplify setting up a Node.js project with essential features like user authentication (register and login). It generates all the necessary project components, sets up a MongoDB connection dynamically, and includes Swagger UI for API documentation.

## Features
- **User Authentication**: Pre-built register and login functionality.
- **Automatic Project Setup**:
  - Generates controllers, services, and models.
  - Configures routes and database connections.
- **Dynamic MongoDB Database**:
  - Local MongoDB database setup with a name that matches the project name.
- **Swagger UI Integration**:
  - Easily visualize and test your APIs.
- **Customizable Project Name**: Enter a project name, and everything is dynamically generated around it.

---

## Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (Node Package Manager) or yarn
- MongoDB (local installation or running in Docker)

---

## Installation

Install the CLI tool globally using npm:
```bash
npm install -g create-my-node-app
