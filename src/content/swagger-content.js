const getSwaggerContent = () => `
{
    "swagger": "2.0",
    "info": {
        "title": "Node.js API",
        "version": "1.0.0",
        "description": "API documentation for the Node.js project"
    },
    "host": "localhost:3000",
    "basePath": "/api",
    "schemes": ["http"],
    "paths": {
        "/users/register": {
            "post": {
                "summary": "Register a user",
                "description": "Create a new user account.",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": { "type": "string", "example": "johndoe" },
                                "password": { "type": "string", "example": "password123" }
                            }
                        }
                    }
                ],
                "responses": {
                    "201": { "description": "User registered successfully" },
                    "500": { "description": "Internal server error" }
                }
            }
        },
        "/users/login": {
            "post": {
                "summary": "Login a user",
                "description": "Authenticate a user and return a token.",
                "parameters": [
                    {
                        "in": "body",
                        "name": "body",
                        "required": true,
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": { "type": "string", "example": "johndoe" },
                                "password": { "type": "string", "example": "password123" }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": { "description": "Login successful" },
                    "401": { "description": "Invalid credentials" },
                    "500": { "description": "Internal server error" }
                }
            }
        }
    }
}
`;

module.exports = { getSwaggerContent };