// data/data.js
const fs = require('fs');

const dataFilePath = 'users.json'; // Add your data file path

let users = [];

function saveData() {
  fs.writeFileSync(dataFilePath, JSON.stringify({ users }, null, 2), 'utf-8');
}
// check if user is registered
function isUserRegistered(username) { // register form
  return users.includes(user => user.username === username);
}

// check if registered user entered the correct password
function isCorrectPassword(username, password) { // login form
  const user = users.find(user => user.username === username);
  return user && user.password === password;
}

module.exports = {
  initializeData: () => {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const existingUsers = JSON.parse(data).users || []
      users = [...users, ...existingUsers]; // Merge existing users w/ new users
    } catch (error) {
      console.error('Error reading data file:', error.message);
    }
  },
  getUserByUsername: (username) => users.find(user => user.username === username),
  addUser: (user) => {
    users.push(user);
    saveData();
  },
  isUserRegistered: isUserRegistered,
  isCorrectPassword: isCorrectPassword
};
