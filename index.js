#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { getMainIndexJsContent } = require('./src/content/main-content');
const { getUserControllerContent } = require('./src/content/controller-content');
const { getUserModelContent } = require('./src/content/user-model-content');
const { getUserRoutesContent } = require('./src/content/routes-content');
const { getEnvContent } = require('./src/content/env-content');
const { getSwaggerContent } = require('./src/content/swagger-content');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const initApp = () => {
    rl.question('Enter project name: ', (projectName) => {
        const projectPath = path.join(process.cwd(), projectName);

        if (fs.existsSync(projectPath)) {
            console.log('Error: Project already exists!');
            rl.close();
            return;
        }

        fs.mkdirSync(projectPath, { recursive: true });
        console.log(`Creating Node.js app in ${projectPath}...`);

        const packageJson = {
            name: projectName,
            version: '1.0.0',
            main: 'index.js',
            scripts: {
                start: 'node index.js',
            },
            dependencies: {
                express: "^4.18.2",
                mongoose: "^7.3.0",
                bcrypt: "^5.1.0",
                jsonwebtoken: "^9.0.0",
                "swagger-ui-express": "^4.6.2",
                "body-parser": "^1.20.2", 
            },
        };

        // Create `package.json`
        fs.writeFileSync(
            path.join(projectPath, 'package.json'),
            JSON.stringify(packageJson, null, 2)
        );

        // Create folders
        const folders = ['config', 'controllers', 'models', 'routes'];
        folders.forEach((folder) => {
            fs.mkdirSync(path.join(projectPath, folder));
        });

        // Create placeholder files
        const files = [
            { path: 'index.js', content: getMainIndexJsContent(projectName) },
            { path: 'controllers/userController.js', content: getUserControllerContent() },
            { path: 'models/User.js', content: getUserModelContent() },
            { path: 'routes/userRoutes.js', content: getUserRoutesContent() },
            { path: '.env', content: getEnvContent(projectName) },
            { path: 'swagger.json', content: getSwaggerContent() },
        ];

        files.forEach(({ path: filePath, content }) => {
            const fullPath = path.join(projectPath, filePath);
            fs.writeFileSync(fullPath, content);
        });

        console.log('Node.js app created successfully!');
        console.log('Run "npm install" inside the project folder to install dependencies.');
        rl.close();
    });
};

initApp();