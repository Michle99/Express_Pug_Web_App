// data/data.js
const fs = require('fs');
const bcrypt = require('bcrypt');

const dataFilePath = 'users.json'; 

let users = [];

function saveData() {
  fs.writeFileSync(dataFilePath, JSON.stringify({ users }, null, 2), 'utf-8');
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
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
    users.push({ ...user, password: hashedPassword });
    saveData();
  },
};
