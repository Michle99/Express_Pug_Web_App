// data/data.js
const fs = require('fs');

const dataFilePath = 'users.json'; // Add your data file path

let users = [];

function saveData() {
  fs.writeFileSync(dataFilePath, JSON.stringify({ users }, null, 2), 'utf-8');
}

module.exports = {
  initializeData: () => {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      users = JSON.parse(data).users || [];
    } catch (error) {
      console.error('Error reading data file:', error.message);
    }
  },
  getUserByUsername: (username) => users.find(user => user.username === username),
  addUser: (user) => {
    users.push(user);
    saveData();
  }
};
