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

### Global Installation
Install the CLI tool globally using npm:
```bash
npm install -g create-my-node-app
```

### Local Installation
To install the CLI locally within a project:
```bash
npm install create-my-node-app
```

To use the CLI locally, link it with the following command:
```bash
npm link
```
This makes the `create-my-node-app` command available globally for development purposes.

---

## Usage

Run the following command to initialize a new Node.js project:
```bash
create-my-node-app
```

### Steps:
1. The CLI will prompt you to enter the **project name**.
2. Once entered, it will:
   - Create a folder with the project name.
   - Generate all required files and directories (controllers, services, models, routes, etc.).
   - Set up a local MongoDB connection with the project name as the database name.
   - Configure Swagger UI for API documentation.

---

## Project Structure

Here’s what your generated project will look like:

```
your-project-name/
├── controllers/        # Handles incoming API requests
├── services/           # Contains business logic
├── models/             # Defines MongoDB schemas
├── routes/             # API route definitions
├── config/
│   └── db.js           # MongoDB connection logic
├── app.js              # Main application entry point
├── package.json        # Project dependencies and metadata
├── swagger.json        # Swagger UI configuration
└── README.md           # Project documentation
```

---

## MongoDB Configuration

The CLI automatically sets up a local MongoDB connection.  
If MongoDB is installed locally, ensure it is running on the default port (`27017`).  

You can adjust the database connection settings in the `config/db.js` file.

---

## API Documentation

Swagger UI is pre-configured for your convenience.  
Once the app is running, you can access the API documentation at:

```
http://localhost:3000/api-docs
```

---

## Example Workflow

1. Run the CLI:
   ```bash
   create-my-node-app
   ```

2. Enter the project name when prompted:
   ```
   Enter your project name: my-awesome-app
   ```

3. The CLI generates the project:
   ```
   Project my-awesome-app created successfully!
   ```

4. Navigate to the project folder and install dependencies:
   ```bash
   cd my-awesome-app
   npm install
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Access the API docs:
   ```
   http://localhost:3000/api-docs
   ```

---

## Contribution

Contributions are welcome! If you have ideas for new features or improvements:
1. Fork this repository.
2. Create a feature branch.
3. Submit a pull request.

---

## Troubleshooting

- **MongoDB Connection Error**: Ensure MongoDB is installed and running on your system.
- **Port Conflicts**: Change the server port in `app.js` if `3000` is already in use.

---

Happy coding with `Create My Node App CLI`! 🎉
