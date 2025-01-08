const getEnvContent = (projectName) => `
MONGO_URI=mongodb://localhost:27017/${projectName}
JWT_SECRET=secretkey
`;

module.exports = { getEnvContent };
